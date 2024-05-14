import Banner from "./Banner";
import FeaturedRoom from "./FeaturedRoom";
import Newsletter from "./Newsletter";

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
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
