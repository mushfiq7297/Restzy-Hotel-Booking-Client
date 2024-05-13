import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const RoomDetails = () => {
  const room = useLoaderData();


  const {
    image,
    price_per_night,
    description,
    room_size,
    availability,
    special_offer,
  } = room;

  const handleBppkService = event =>{
    event.preventDefault()

    const form = event.target;

    const name = form.name.value;
    const price = form.price.value;
    const date = form.date.value;

    const booking ={
      roomName: name,
      price,
      date,
      image,
    }
    console.log(booking);

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Tourists spot added successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
       
      }
    });

  }
  return (
    <div className="my-10">
      <div className=" p-4 shadow-md bg-gray-300  text-black rounded-lg">
        <div className="space-y-4">
          <a rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-xl font-semibold text-violet-600">
              {description}
            </h3>
          </a>
          <div className="space-y-2">
            <img
              src={image}
              alt=""
              className="block object-cover object-center w-full  h-96 rounded-md  bg-gray-500"
            />
            <div className="flex items-center text-lg justify-between text-white">
              <h2 className="font-bold bg-gray-500 p-3 rounded-lg">
                Room Size:<span> {room_size}</span>
              </h2>
              <h2 className="font-bold bg-gray-500 p-3 rounded-lg">
                Price:<span> ${price_per_night}</span>
              </h2>
            </div>
          </div>
          <a rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-xl px-10 font-semibold text-violet-600">
              Description
            </h3>
          </a>
          <div className="space-y-2 flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2 flex flex-col space-y-2">
              <p className=" text-black  px-10">
                The 4-star Park Central Hotel offers comfort and convenience
                whether you’re on business or holiday in New York (NY).
                Featuring a complete list of amenities, guests will find their
                stay at the property a comfortable one. Service-minded staff
                will welcome and guide you at the Park Central Hotel. Air
                conditioning, heating, desk, alarm clock, iPod docking station
                can be found in selected guestrooms. The hotel offers various
                recreational opportunities. Park Central Hotel combines warm
                hospitality with a lovely ambiance to make your stay in New York
                (NY) unforgettable.
              </p>
             <div className="px-10">
             <form onSubmit={handleBppkService}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-xl">Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder=""
                    name= "name"
                    defaultValue={description}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-xl">Price($)</span>
                  </label>
                  <input
                    type="number"
                    name ="price"                    
                    defaultValue={price_per_night}
                    className="input input-bordered"
                    required
                  />
                </div>
                

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-xl">Date</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Date"
                    name ="date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="my-5">
                  <button className="btn btn-block btn-primary" type="submit">
                    BOOK NOW
                  </button>
                </div>
              </form>
             </div>
            </div>

            <div className="flex w-full md:w-1/2">
              <div className="flex flex-col mx-auto shadow-sm rounded-xl lg:p-12 bg-gray-600 text-gray-100 ">
                <div className="flex flex-col items-center w-full">
                  <h2 className="text-3xl font-semibold text-center">
                    Add a review
                  </h2>
                  <div className="flex flex-col items-center py-6 space-y-3">
                    <span className="text-center">
                      How was your experience?
                    </span>
                    <div className="flex space-x-3">
                      <button
                        type="button"
                        title="Rate 1 stars"
                        aria-label="Rate 1 stars"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-10 h-10 text-yellow-500"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        title="Rate 2 stars"
                        aria-label="Rate 2 stars"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-10 h-10 text-yellow-500"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        title="Rate 3 stars"
                        aria-label="Rate 3 stars"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-10 h-10 text-yellow-500"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        title="Rate 4 stars"
                        aria-label="Rate 4 stars"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-10 h-10 text-yellow-500"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        title="Rate 5 stars"
                        aria-label="Rate 5 stars"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-10 h-10 text-gray-800"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <textarea
                      rows="3"
                      placeholder="Message..."
                      className="p-4 rounded-md resize-none text-gray-100 bg-gray-600 border-2"
                    ></textarea>
                    <button
                      type="button"
                      className="py-4 my-8 font-semibold rounded-md text-gray-600 bg-violet-400"
                    >
                      Leave feedback
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-sm text-gray-400"
                  >
                    Maybe later
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
