import Banner from "./Banner";
import FeaturedRoom from "./FeaturedRoom";

import About from "./about/About";
import Contact from "./about/Contact";
import MyMap from "./map/MyMap";

import Testimonials from "./testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedRoom></FeaturedRoom>
            <About></About>
            <Contact></Contact>
            <Testimonials></Testimonials>
            <MyMap></MyMap>                       
        </div>
    );
};

export default Home;