import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Reviews = () => {
  const { user } = useContext(AuthContext);



  const handleAddReview = (event) => {
    event.preventDefault();

    const form = event.target;

    const ratings = form.ratings.value;
    const name = form.name.value;
    const review = form.review.value;
   

    const addReview = {
        name,
      review,
      ratings
      
    };
    console.log(addReview);

    // //sending data to the server
    fetch(`https://hotel-booking-server-smoky.vercel.app/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            
            text: "Thanks For your valuable opinion!",
            icon: "success",
            confirmButtonText: "Cool",
          });
         
        }
      });
  };
  return (
    <div className="flex justify-center my-3 pt-20">
      <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-900 text-gray-100">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-semibold text-center">Add a review</h2>
          <div className="flex flex-col items-center py-6 space-y-3">
            <span className="text-center">How was your experience?<br /> Give your ratings from 1 to 5!</span>
          </div>
          <div className="flex flex-col w-full">
            <form onSubmit={handleAddReview} className="flex flex-col gap-2" >
            
            <div className="form-control">
                <input
                  type="number"
                  name="ratings"
                  placeholder="Ratings"
                  className="input input-bordered  bg-gray-900 border-2 border-gray-800"
                  required
                />
              </div>
              
              <div className="form-control">
                <input
                  type="name"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered  bg-gray-900 border-2 border-gray-800"
                  required
                />
              </div>

              <textarea
                placeholder="Massege"
                name="review"
                className="textarea  textarea-lg w-full max-w-xs bg-gray-900 border-2 border-gray-800"
              ></textarea>
              <div className="my-5">
                <button type="submit" className="btn btn-block btn-primary" type="submit">
                  Leave Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-center">
         
        </div>
      </div>
    </div>
  );
};

export default Reviews;
