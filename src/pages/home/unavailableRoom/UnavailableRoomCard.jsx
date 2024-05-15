


const UnavailableRoomCard = ({room}) => {
    const {image,description} = room
  return (
    <div>
      <div className="card w-96 bg-base-100 hover:scale-95 hover:-translate-y-1 duration-300 hover:shadow-xl ">
        <figure className="relative px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl object-cover h-52"
            
          />
          <h2 className=" absolute bg-red-600 text-white rounded-lg p-2 top-12 left-12 font-bold">Booked</h2>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className=" text-lg font-bold">{description}</h2>
          <p>
          As our smallest budget rooms, the Compact bedrooms are suited for single occupancy or short-stay double occupancy as they have limited space and storage.
          </p>
         
          <div className="my-2">
            
            <button className="btn-active btn btn-wide btn-primary cursor-auto ">BOOK NOW</button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnavailableRoomCard;