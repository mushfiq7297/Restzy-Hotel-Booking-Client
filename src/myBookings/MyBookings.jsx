import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingRow from "./BookingRow";

const MyBookings = () => {
  const bookingRooms = useLoaderData();
  const [bookings, setBookings] = useState(bookingRooms);
  return (
    <div className="min-h-screen mb-40">
      <div className="flex justify-center">
        <h2 className="text-4xl font-bold my-10 w-60 border-b-4 text-center border-blue-500">
          My Bookings
        </h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="font-bold text-lg text-gray-600">Booking Room</th>
                <th className="font-bold text-lg text-gray-600">Update(Date)</th>
                <th></th>
                <th className="font-bold text-lg text-gray-600">Cancel</th>
                
              </tr>
            </thead>
            <tbody>
            {bookingRooms.map((bookingRoom) => (
                <BookingRow
                  key={bookingRoom._id}
                  bookingRoom ={bookingRoom}
                  bookings = {bookings}
                  setbookings ={setBookings}
                ></BookingRow>
              ))}
             
            </tbody>
           
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
