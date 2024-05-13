import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" flex  justify-center">
        <img
          src="https://i.ibb.co/744LkHv/Pngtree-error-page-fault-404-robot-6457512.png"
          alt=""
          className="w-1/2 "
        />
      </div >
      <div className="">
        <Link to="/">
          <a
            href="#_"
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"
          >
            Back to Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
