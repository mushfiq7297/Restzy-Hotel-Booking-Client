import { Link } from "react-router-dom";

const RoomCard = ({room}) => {
    const {image,description, _id} = room
  return (
    <div>
      <div className="card w-96 bg-base-100 hover:scale-95 hover:-translate-y-1 duration-300 hover:shadow-xl ">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl object-cover h-52"
          />
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

export default RoomCard;
