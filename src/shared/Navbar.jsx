
import { Link, NavLink } from "react-router-dom";
import "animate.css";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

 

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then().catch();
  };
    const navLinks = (
    <>
         <li >
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/room">ROOM</NavLink>
      </li>
      <li>
        <NavLink to="/myBookings">MY BOOKINGS </NavLink>
      </li>
      <li>
        <NavLink to="/about">ABOUT</NavLink>
      </li>
      <li>
        <NavLink to="/contact">CONTACT</NavLink>
      </li>
      
    </>
    )
  return (
    <div>
      <div className="navbar  bg-[#1f2937] text-[#9ca3af]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Restzy</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
        {user ? (
          <div>
            <div
              className="tooltip tooltip-left  flex gap-3"
              data-tip={user?.displayName || user.email}
            >
              <div>
              <img
                src={user?.photoURL || "/src/assets/userDefaultPic.png"}
                alt=""
                className="w-8 h-8 mt-2 rounded-full "
              />
              </div>
              <div>
              <button
                onClick={handleLogOut}
                className="btn btn-active btn-primary h-8 mr-2"
              >

                SIGN OUT
              </button>
              </div>
            </div>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary mr-2">LOGIN</button>
          </Link>
        )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
