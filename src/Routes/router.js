import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Motorcycles from "../Pages/Motorcycles/Motorcycles";
import MotorcycleDetails from "../Pages/Motorcycles/MotorcycleDetails";



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
      }
    ]
  }
]);


export default routes;