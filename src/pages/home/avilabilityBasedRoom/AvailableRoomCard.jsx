import { Link } from "react-router-dom";


const AvailableRoomCard = ({room}) => {
    const {image,description, _id,price_per_night} = room
  return (
    <div>
      <div className="card w-96 bg-base-100 hover:scale-95 hover:-translate-y-1 duration-300 hover:shadow-xl ">
        <figure className="relative px-10 pt-10">
        <Link to={`/roomDetails/${_id}`}>
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl object-cover h-52"
           
          />
        </Link>  
          <h2 className=" absolute bg-green-600 text-white rounded-lg p-2 top-12 left-12 font-bold">Available</h2>
          <h2 className=" absolute bg-violet-600 text-white rounded-lg p-2 top-12 right-12 font-bold">${price_per_night}</h2>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className=" text-lg font-bold">{description}</h2>
          <p>
          As our smallest budget rooms, the Compact bedrooms are suited for single occupancy or short-stay double occupancy as they have limited space and storage.
          </p>
         
          <div className="my-2">
            <Link to={`/roomDetails/${_id}`}>
            <button className="btn btn-wide btn-primary hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">BOOK NOW</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableRoomCard;