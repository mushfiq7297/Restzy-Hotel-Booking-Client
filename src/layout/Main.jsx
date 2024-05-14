import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../pages/home/Footer";
import Newsletter from "../pages/home/Newsletter";
import Banner from "../pages/home/Banner";
import MyMap from "../pages/home/map/MyMap";
import Testimonials from "../pages/home/testimonials/Testimonials";

const Main = () => {
  return (
    <div className="font-EbGaramond">
      <div>
        <Navbar></Navbar>
        
      </div>
      <div >
        <Outlet></Outlet>
      </div>
      <div>
        
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
