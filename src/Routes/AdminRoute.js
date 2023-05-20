import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {

  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user.email);


  const location = useLocation();

  if (loading || isAdminLoading) {
    return <h2>loading.....</h2>
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to='/login' state={{ from: location }}></Navigate>;
};

export default AdminRoute;