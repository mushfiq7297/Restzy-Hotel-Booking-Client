import Banner from "./Banner";
import FeaturedRoom from "./FeaturedRoom";
import Newsletter from "./Newsletter";
import About from "./about/About";
import Contact from "./about/Contact";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedRoom></FeaturedRoom>
            <About></About>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;