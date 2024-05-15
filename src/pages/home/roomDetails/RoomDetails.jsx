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

  const handleBppkService = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const price = form.price.value;
    const date = form.date.value;

    const booking = {
      roomName: name,
      price,
      date,
      image,
    };
    console.log(booking);

    fetch("https://hotel-booking-server-smoky.vercel.app/booking", {
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
            title: `${description}`,
            text: `Price:$${price}`,
            imageUrl: `${image}`,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
          });
        }
      });
  };
  return (
    <div className="w-10/12 pt-20 mx-auto pb-10">
      <div className=" p-4 shadow-md bg-gray-300  text-black rounded-lg">
        <div className="space-y-4">
          <a rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-3xl font-bold text-violet-600">
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
          
          <div className="flex flex-col md:flex-row lg:flex-row justify-between ">
            <div className="w-full md:w-3/5  flex flex-col md:flex-row lg:flex-row  ">
              <p className=" text-black text-xl px-10">
                <span className="text-2xl font-bold text-violet-600 mb-10"> Description</span><br></br>
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
              </div>
              <div className="w-full px-10  md:w-2/5">
                <h2 className="text-2xl font-bold text-violet-600"> Booking Information</h2>
                <form onSubmit={handleBppkService}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-lg">Name</span>
                    </label>
                    <input
                      type="name"
                      placeholder=""
                      name="name"
                      defaultValue={description}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-lg">
                        Price($)
                      </span>
                    </label>
                    <input
                      type="number"
                      name="price"
                      defaultValue={price_per_night}
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-lg">Date</span>
                    </label>
                    <input
                      type="date"
                      placeholder="Date"
                      name="date"
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
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
