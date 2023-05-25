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
import ManageUsers from "../Pages/AdminWorks/ManageUsers/ManageUsers";
import ManageMotorcycles from "../Pages/AdminWorks/ManageMotorcycles/ManageMotorcycles";
import AddMotorcycle from "../Pages/AdminWorks/AddMotorcycle/AddMotorcycle";
import AddAccessory from "../Pages/AdminWorks/AddAccessory/AddAccessory";
import ManageAccessories from "../Pages/AdminWorks/ManageAccessories/ManageAccessories";
import Accessories from "../Pages/Accessories/Accessories";
import PlaceAccessoryOrder from "../Pages/Orders/PlaceOrder/PlaceAccessoryOrder";
import TestRideForm from "../Pages/TestRideForm/TestRideForm";



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
        path: '/accessories',
        element: <Accessories />
      },
      {
        path: '/testRide',
        element: <TestRideForm />
      },
      {
        path: '/motorcycles/:id',
        element: <MotorcycleDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/api/motorcycles/${params.id}`)
      },
      {
        path: '/placeOrder/motorcycle/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/api/motorcycles/${params.id}`),
        element: <PrivateRoute>
          <PlaceOrder />
        </PrivateRoute>
      },
      {
        path: '/placeOrder/accessory/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/api/accessories/${params.id}`),
        element: <PrivateRoute>
          <PlaceAccessoryOrder />
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
            path: '/dashboard/manageMotorcycles',
            element: <AdminRoute>
              <ManageMotorcycles />
            </AdminRoute>
          },
          {
            path: '/dashboard/manageAccessories',
            element: <AdminRoute>
              <ManageAccessories />
            </AdminRoute>
          },
          {
            path: '/dashboard/addMotorcycle',
            element: <AdminRoute>
              <AddMotorcycle />
            </AdminRoute>
          },
          {
            path: '/dashboard/addAccessory',
            element: <AdminRoute>
              <AddAccessory />
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