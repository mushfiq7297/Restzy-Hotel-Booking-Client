import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";


const SingleTestimonial = ({onereview}) => {
    const {name, ratings, review} = onereview
    return (
      
      
            <div className="container mx-auto">
            <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
             
              <blockquote className="max-w-lg text-lg italic font-medium text-center">
                {review}
              </blockquote>
              <div className="text-center dark:text-gray-600">
                <p>{name}</p>
                <p>CEO of Company Co.</p>
              </div>
            </div>
          </div>
          
   
      
        
    );
};

export default SingleTestimonial;