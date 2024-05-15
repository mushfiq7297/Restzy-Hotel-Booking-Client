import { useEffect, useState } from "react";
import AvailableRoomCard from "./AvailableRoomCard";
import "animate.css"


const Availableroom = () => {
    const [hotelData, setHotelData] = useState([]);

    useEffect(()=>{
        fetch("https://hotel-booking-server-smoky.vercel.app/rooms")
        .then(res => res.json())
        .then(data => setHotelData(data))
    },[])

   const availeableRoom = hotelData.filter(room => room.availability ==true)
    return (
        <div className="animate__animated animate__slideInUp animate">
            <div className="flex justify-center">
            <h2 className="text-5xl font-bold my-10 pt-20 w-40 border-b-2 text-center border-blue-500">Rooms</h2>
            </div>
        <div className="my-10 w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                availeableRoom.map(room =><AvailableRoomCard
                    key ={room._id}
                    room ={room}
                    ></AvailableRoomCard>)
            }
        </div>
        </div>
    );
};

export default Availableroom;
