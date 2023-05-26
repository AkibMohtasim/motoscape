import { Sidebar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';

const DashboardLayout = () => {

  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);



  return (
    <div className="w-fit flex lg:flex-row flex-col">
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items className='bg-red-800 rounded-lg '>
          <Sidebar.ItemGroup >

            {
              !isAdmin && <>
                <Sidebar.Item className='text-white hover:text-gray-700 tracking-wider'>
                  <Link to={`/dashboard/orders/myOrder?email=${user.email}`}>My Orders</Link>
                </Sidebar.Item>
                <Sidebar.Item className='text-white hover:text-gray-700 tracking-wider'>
                  <Link to='/dashboard/paymentOptions'>Payment Options</Link>
                </Sidebar.Item>
              </>
            }

            {
              isAdmin && <>
                <Sidebar.Item className='text-white hover:text-gray-700 tracking-wider'><Link to='/dashboard/manageOrders'>Manage Orders</Link></Sidebar.Item>
                <Sidebar.Item className='text-white hover:text-gray-700 tracking-wider'><Link to='/dashboard/manageMotorcycles'>Manage Motorcycles</Link></Sidebar.Item>
                <Sidebar.Item className='text-white hover:text-gray-700 tracking-wider'><Link to='/dashboard/manageAccessories'>Manage Accessories</Link></Sidebar.Item>
                <Sidebar.Item className='text-white hover:text-gray-700 tracking-wider'><Link to='/dashboard/addMotorcycle'>Add a Motorcycle</Link></Sidebar.Item>
                <Sidebar.Item className='text-white hover:text-gray-700 tracking-wider'><Link to='/dashboard/addAccessory'>Add an Accessory</Link></Sidebar.Item>
                <Sidebar.Item className='text-white hover:text-gray-700 tracking-wider'><Link to='/dashboard/manageUsers'>Manage Users</Link></Sidebar.Item>
              </>
            }
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <Outlet></Outlet>
    </div>
  );
};

export default DashboardLayout;