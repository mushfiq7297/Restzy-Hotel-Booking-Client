import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/home/login/Login";
import Register from "../pages/home/register/Register";
import RoomDetails from "../pages/home/roomDetails/RoomDetails";
import About from "../pages/home/about/About";
import Contact from "../pages/home/about/Contact";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/roomDetails/:id",
        element: <RoomDetails></RoomDetails>,
        loader: () => fetch("http://localhost:5000/rooms")
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },

    ]
    },
  ]);

  export default router;