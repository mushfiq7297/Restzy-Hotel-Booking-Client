import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";


const MyBookings = () => {
  const bookingRooms = useLoaderData();
  const [bookings, setBookings] = useState(bookingRooms);
 
//..........................delete...........................
  const handleDelete = (id) => {
   
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/booking/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Spot has been deleted.", "success");
              const remaining = bookings.filter((booking) => (booking._id !== id));
              setBookings(remaining);
            }
          });
      }
    });
  };



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
                <th></th>
                <th className="font-bold text-lg text-gray-600">Review</th>
              </tr>
            </thead>
            <tbody>
            {bookingRooms.map((bookingRoom) => (
                <BookingRow
                  key={bookingRoom._id}
                  bookingRoom ={bookingRoom}
                  bookings = {bookings}
                  setbookings ={setBookings}
                  handleDelete ={handleDelete}
                 
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
