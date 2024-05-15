import { useEffect, useState } from "react";
import UnavailableRoomCard from "./UnavailableRoomCard";


const Unavailableroom = () => {
    const [hotelData, setHotelData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/rooms")
        .then(res => res.json())
        .then(data => setHotelData(data))
    },[])

   const unavaileableRoom = hotelData.filter(room => room.availability ==false)
    return (
        <div className="mx-auto w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                unavaileableRoom.map(room =><UnavailableRoomCard
                    key ={room._id}
                    room ={room}
                    ></UnavailableRoomCard>)
            }
        </div>
    );
};

export default Unavailableroom;
