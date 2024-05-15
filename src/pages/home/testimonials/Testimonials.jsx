import SingleTestimonial from "./SingleTestimonial";
import { useEffect, useState } from "react";
import React from "react";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://hotel-booking-server-smoky.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="">
      <div className="flex justify-center">
        <h2 className="text-5xl font-bold my-10 pt-20 w-72 text-center border-b-2 border-blue-500">
          Testimonials
        </h2>
      </div>
      <div className="bg- dark:bg-gray-50 h-96 flex items-center">
        <Marquee>
          {reviews.map((onereview) => (
            <SingleTestimonial
              key={onereview._id}
              onereview={onereview}
            ></SingleTestimonial>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonials;
