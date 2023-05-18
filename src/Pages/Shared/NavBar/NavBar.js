import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../images/NavBar/logo.jpg';

const NavBar = () => {

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
      className='bg-black text-white'
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
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Bonnie Green
            </span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item>
            Settings
          </Dropdown.Item>
          <Dropdown.Item>
            Earnings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            Sign out
          </Dropdown.Item>
        </Dropdown>
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