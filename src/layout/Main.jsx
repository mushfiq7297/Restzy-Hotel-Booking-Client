import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const Main = () => {
  return (
    <div>
      <div className="w-7xl mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
