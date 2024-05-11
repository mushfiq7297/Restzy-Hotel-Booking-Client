import { Link } from "react-router-dom";


const About = () => {
    return (
        <div className="mt-10">
        <h2 className="text-center font-bold text-3xl md:text-6xl font-stack my-12">About Us</h2>
      <div className="hero">
      <div className="hero-content flex-col lg:flex-row gap-10 justify-between">
        <div className="w-full md:w-1/2">
          <img
            src="https://i.ibb.co/ZTBnNvB/image-06.jpg"
            className=" rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold">
            Everything. Right where you need it.
            </h1>
            <p className="mb-5">
            The first inn located in America was recorded in the year 1607 and lead the way with many other firsts in the hospitality industry. The first publicly held hotel (the City Hotel) opened in New York in 1792. The first modern hotel (the Tremont) opened in Boston in 1809 and the first business hotel (the Buffalo Statler) opened in 1908. From there a surge of hotels flooded American and the rest of the world with prominent names such as Radisson, Marriot and Hilton.
            </p>
            <Link to={`/contact`}>
              <button className="btn btn-primary">Contuct Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
};

export default About;