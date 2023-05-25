import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../images/NavBar/logo.jpg';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useAdmin from '../../../Hooks/useAdmin';



const NavBar = () => {

  const { user, setUser, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  const logOutHandler = () => {
    const confirm = window.confirm('Are you sure you want to sign out?')

    if (confirm) {
      logOut()
        .then(setUser({}))
        .catch(err => console.log(err.message))
    }
  }

  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Motorcyles', path: '/motorcycles' },
    { label: 'Accessories', path: '/accessories' },
    { label: 'Book a Test Ride', path: '/testRide' }
  ]


  return (
    <Navbar
      fluid={true}
      className='bg-black text-white tracking-wider'
      style={{ backgroundColor: 'black' }}
    >
      <Navbar.Brand>
        <Link to='/' className="flex items-center text-xl font-semibold dark:text-white">
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt="motoscape Logo"
          />
          <span>Motoscape</span>
        </Link>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {
          user?.uid ?
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={<Avatar alt="User settings" img={user?.photoURL} rounded={true} />}
            >
              <Dropdown.Header>
                <span className="block text-sm">
                  {user?.displayName} {isAdmin && '(Admin)'}
                </span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>
              <div className='flex flex-col ms-4 gap-2'>
                {!isAdmin && <Link to='/addReview'>Add a Review</Link>}
                <Link to='/dashboard'>Dashboard</Link>
              </div>
              <Dropdown.Divider />
              <Dropdown.Item onClick={logOutHandler}>
                Sign out
              </Dropdown.Item>
            </Dropdown>
            :
            <Link to='/login'>Login</Link>
        }
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>

        {
          navItems?.map(item =>
            <Link
              key={item.path}
              to={item.path}
              className={`${location.pathname === item.path
                ? 'text-gray-500'
                : 'text-white'
                }`}
            >
              {item.label}
            </Link>
          )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;