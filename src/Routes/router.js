import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Motorcycles from "../Pages/Motorcycles/Motorcycles";
import MotorcycleDetails from "../Pages/Motorcycles/MotorcycleDetails";
import PlaceOrder from "../Pages/Orders/PlaceOrder/PlaceOrder";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import MyOrders from "../Pages/Orders/MyOrders/MyOrders";
import AddReview from "../Pages/AddReview/AddReview";
import AdminRoute from "./AdminRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import Payment from "../Pages/Payment/Payment";
import ManageOrders from "../Pages/AdminWorks/ManageOrders/ManageOrders";
import AddProduct from "../Pages/AdminWorks/AddProduct/AddProduct";
import ManageUsers from "../Pages/AdminWorks/ManageUsers/ManageUsers";
import ManageProducts from "../Pages/AdminWorks/ManageProducts/ManageProducts";



const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/motorcycles',
        element: <Motorcycles />
      },
      {
        path: '/motorcycles/:id',
        element: <MotorcycleDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/api/motorcycles/${params.id}`)
      },
      {
        path: '/placeOrder/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/api/motorcycles/${params.id}`),
        element: <PrivateRoute>
          <PlaceOrder />
        </PrivateRoute>
      },
      {
        path: '/addReview',
        element: <PrivateRoute>
          <AddReview />
        </PrivateRoute>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/dashboard',
        element: <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>,
        children: [
          {
            path: '/dashboard/orders/myOrder',
            element: <PrivateRoute>
              <MyOrders />
            </PrivateRoute>
          },
          {
            path: '/dashboard/paymentOptions',
            element: <PrivateRoute>
              <Payment />
            </PrivateRoute>
          },
          {
            path: '/dashboard/manageOrders',
            element: <AdminRoute>
              <ManageOrders />
            </AdminRoute>
          },
          {
            path: '/dashboard/manageProducts',
            element: <AdminRoute>
              <ManageProducts />
            </AdminRoute>
          },
          {
            path: '/dashboard/addProduct',
            element: <AdminRoute>
              <AddProduct />
            </AdminRoute>
          },
          {
            path: '/dashboard/manageUsers',
            element: <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          }
        ]
      }
    ]
  }
]);


export default routes;