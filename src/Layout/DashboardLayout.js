import { Sidebar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';

const DashboardLayout = () => {

  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);



  return (
    <div className="w-fit flex">
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>

            {
              !isAdmin && <>
                <Sidebar.Item>
                  <Link to={`/dashboard/orders/myOrder?email=${user.email}`}>My Orders</Link>
                </Sidebar.Item>
                <Sidebar.Item>
                  <Link to='/dashboard/paymentOptions'>Payment Options</Link>
                </Sidebar.Item>
              </>
            }

            {
              isAdmin && <>
                <Sidebar.Item><Link to='/dashboard/manageOrders'>Manage Orders</Link></Sidebar.Item>
                <Sidebar.Item><Link to='/dashboard/manageProducts'>Manage Products</Link></Sidebar.Item>
                <Sidebar.Item><Link to='/dashboard/addProduct'>Add a Product</Link></Sidebar.Item>
                <Sidebar.Item><Link to='/dashboard/manageUsers'>Manage Users</Link></Sidebar.Item>
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