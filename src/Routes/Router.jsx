import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/home/login/Login";
import Register from "../pages/home/register/Register";
import RoomDetails from "../pages/home/roomDetails/RoomDetails";
import About from "../pages/home/about/About";
import Contact from "../pages/home/about/Contact";
import ErrorPage from "../errorPage/ErrorPage";
import MyBookings from "../myBookings/MyBookings";
import PrivateRouter from "../Routes/PrivateRouter"
import Reviews from "../reviews/Reviews";
import Testimonials from "../pages/home/testimonials/Testimonials";
import Availableroom from "../pages/home/avilabilityBasedRoom/Availableroom";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
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
        element: <PrivateRouter><RoomDetails></RoomDetails></PrivateRouter>,
        loader: ({params}) => fetch(`https://hotel-booking-server-smoky.vercel.app/rooms/${params.id}`)
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/room",
        element:<Availableroom></Availableroom>
      },
      {
        path: "/myBookings",
        element:<PrivateRouter><MyBookings></MyBookings></PrivateRouter>,
        loader:() => fetch('https://hotel-booking-server-smoky.vercel.app/booking')

      }
      ,
      {
        path: "/reviews/:id",
        element:<Reviews></Reviews>
      },
      {
        path:"/testimonials",
        element: <Testimonials></Testimonials>,
        loader:()=> fetch('https://hotel-booking-server-smoky.vercel.app/reviews')
      }


    ]
    },
  ]);

  export default router;