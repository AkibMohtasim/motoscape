import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import useTitle from '../../Hooks/useTitle';

const Login = () => {

  useTitle('Login');

  const [errText, setErrText] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const { userLogin, googleSignIn } = useContext(AuthContext);


  const loginHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then(result => {
        // const user = result.user;
        // console.log(user);
        form.reset();
        navigate(from, { replace: true });
        setErrText(null);
      })
      .catch(err => {
        console.error(err.message)
        setErrText(<p>User not found.</p>);
      });

  }

  const googleSignInHandler = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch(err => console.error(err.message))
  }

  return (

    <div className="min-h-[70vh]">
      <div className="bg-opacity-60"></div>
      <div className="text-center text-neutral-content">
        <div className='flex flex-col items-center'>
          <div className='text-center'>
            <h2 className='text-7xl mt-5'>Login</h2>
          </div>

          <form onSubmit={loginHandler} className="form-control w-full max-w-xs mx-auto mt-10">
            <div>
              <label>
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered w-full max-w-xs text-black font-sans" required />
            </div>
            <div>
              <label>
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered w-full max-w-xs text-black font-sans" required />
              {errText}
            </div>

            <button type="submit" className="mt-4 px-6 py-2 text-lg rounded-full bg-red-600 text-white  duration-150 tracking-wider">Login</button>
          </form>
          <p className='my-2 text-xl'>or,</p>

          <button onClick={googleSignInHandler} type="submit" className="my-2 px-6 py-2 text-lg rounded-full border border-gray-600 text-gray-700 hover:text-white hover:bg-gray-700 duration-150 tracking-wider"><FcGoogle className='inline' /> Sign-in</button>
          <p className='my-5 text-lg'>New to Motoscape? <Link to='/signup' className='text-red-600 underline underline-2'>Register</Link></p>
        </div>
      </div>
    </div>


  );
};

export default Login;