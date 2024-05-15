import { useState } from "react";
import Banner from "./Banner";
import FeaturedRoom from "./FeaturedRoom";
import Newsletter from "./Newsletter";

import About from "./about/About";
import Contact from "./about/Contact";
import MyMap from "./map/MyMap";

import Testimonials from "./testimonials/Testimonials";
import SpecialOfferModal from "./specialOfferModal/SpecialOfferModal";

const Home = () => {
  const [showModal, setShowModal] = useState(true);
  const handleCloseModal = () => {
    setShowModal(false);
  }
  return (
    <div>
      
      {showModal && <SpecialOfferModal onClose={handleCloseModal} />}
      {/* Your other website content */}
    
   
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
