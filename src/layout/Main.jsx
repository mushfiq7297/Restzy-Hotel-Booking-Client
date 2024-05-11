import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../pages/home/Footer";
import Newsletter from "../pages/home/Newsletter";

const Main = () => {
  return (
    <div>
      <div className="w-7xl mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
      <div>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
