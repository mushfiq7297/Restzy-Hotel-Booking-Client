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
        <div className="w-10/12 mx-auto">
            <div className="flex justify-center">
            <h2 className="text-5xl font-bold my-10 w-48 border-b-4 text-center border-blue-500">Rooms</h2>
            </div>
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