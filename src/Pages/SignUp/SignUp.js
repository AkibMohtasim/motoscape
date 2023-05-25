import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import { FcGoogle } from 'react-icons/fc';



const SignUp = () => {

  const { createUser, googleSignIn, updateUser, setUser } = useContext(AuthContext);
  // const [createdUserEmail, setCreatedUserEmail] = useState('');
  const [errText, setErrText] = useState(null);

  useTitle('Sign Up');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';


  const signUpHandler = (event) => {

    event.preventDefault();

    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const name = `${firstName} ${lastName}`
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      setErrText(<p>The passwords don't match</p>)
      return;
    }
    else {
      setErrText(null);
      createUser(email, password)
        .then(result => {
          const user = result.user;
          user.displayName = name;
          setUser(user);
          navigate(from, { replace: true });
          updateUser(name)
            .then(() => {
              saveUser(name, email)
              console.log('displayName added')
            });

          form.reset();
        })
        .catch(err => console.error(err.message));

    }
  }

  const saveUser = (name, email) => {
    const user = { name, email };

    fetch('http://localhost:5000/api/users', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }



  const googleSignInHandler = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        const { displayName, email } = user;
        saveUser(displayName, email);
      })
      .catch(err => console.error(err.message))
  }

  return (
    <div className="hero min-h-[70vh] adventure-font">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className='flex flex-col items-center'>
          <div className='text-center'>
            <h2 className='custom-font font-bold text-7xl'>Sign Up</h2>
          </div>

          <form onSubmit={signUpHandler} className="w-full max-w-xs mx-auto mt-10">
            <div>
              <label>
                <span>First Name</span>
              </label>
              <input type="text" name='firstName' placeholder="first name" className="input input-bordered w-full max-w-xs text-black font-sans" required />
            </div>
            <div>
              <label>
                <span>Last Name</span>
              </label>
              <input type="text" name='lastName' placeholder="last name" className="input input-bordered w-full max-w-xs text-black font-sans" required />
            </div>
            <div>
              <label>
                <span>Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered w-full max-w-xs text-black font-sans" required />
            </div>
            <div>
              <label>
                <span>Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered w-full max-w-xs text-black font-sans" required />
            </div>
            <div>
              <label>
                <span>Confirm Password</span>
              </label>
              <input type="password" name='confirm' placeholder="confirm password" className="input input-bordered w-full max-w-xs text-black font-sans" />
              {errText}
            </div>

            <button type="submit" className="mt-4 px-6 py-2 text-lg rounded-full bg-red-600 text-white  duration-150 tracking-wider">Sign up</button>
          </form>
          <p className='my-2 text-xl'>or,</p>

          <button onClick={googleSignInHandler} type="submit" className="my-2 px-6 py-2 text-lg rounded-full border border-gray-600 text-gray-700 hover:text-white hover:bg-gray-700 duration-150 tracking-wider"><FcGoogle className='inline' /> Sign-in</button>
          <p className='my-5 text-lg'>Already have an account? <Link to='/login' className='text-red-600 underline underline-offset-2'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;