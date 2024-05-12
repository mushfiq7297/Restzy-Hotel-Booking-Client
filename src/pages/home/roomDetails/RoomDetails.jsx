import { useLoaderData } from "react-router-dom";

const RoomDetails = () => {
  const room = useLoaderData;

  const {
    image,
    price_per_night,
    description,
    room_size,
    availability,
    special_offer,
  } = room;
  return (
    <div>
      <h2 className="text-9xl">{description}</h2>
    </div>
  );
};

export default RoomDetails;
