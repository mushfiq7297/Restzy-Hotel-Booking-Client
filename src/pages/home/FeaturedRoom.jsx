import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";


const FeaturedRoom = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/rooms')
        .then(res => res.json())
        .then(data => setRooms(data))

    },[])
    return (
        <div className="mx-auto">
            <h2 className="text-4xl text-center font-bold">Featured Room</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
               {
                rooms.map(room => <RoomCard
                key ={room._id}
                room ={room}
                ></RoomCard>)
               }
            </div>

        </div>
    );
};

export default FeaturedRoom;