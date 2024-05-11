import FeaturedRoom from "./FeaturedRoom";
import Newsletter from "./Newsletter";
import About from "./about/About";
import Contact from "./about/Contact";


const Home = () => {
    return (
        <div>
            <h2>This is home</h2>
            <FeaturedRoom></FeaturedRoom>
            <About></About>
            <Contact></Contact>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;