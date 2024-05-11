const RoomCard = ({room}) => {
    const {image,description} = room
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
        <div className="card-body items-center text-center h-52">
          <h2 className="card-title">{description}</h2>
         
          <div className="my-2">
            <button className="btn btn-wide btn-primary hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">BOOK NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
