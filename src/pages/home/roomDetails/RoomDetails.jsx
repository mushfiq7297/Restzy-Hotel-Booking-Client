import { useLoaderData, useParams } from "react-router-dom";


const RoomDetails = () => {
    const rooms = useLoaderData;
    const { id } = useParams();
    const room = rooms.find((room) => room._id == id);
    const {image, price_per_night, description, room_size,availability, special_offer} = room;
    return (
        <div>
            <h2 className="text-9xl">{image}</h2>
        </div>
    );
};

export default RoomDetails;