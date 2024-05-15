import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import "animate.css"


const MyBookings = () => {
  // const bookingRooms = useLoaderData();
  const [bookings, setBookings] = useState([]);
const [isUpdate, setIsUpdate] =useState(true);
  useEffect(()=>{
    fetch("https://hotel-booking-server-smoky.vercel.app/booking")
    .then(res => res.json())
    .then(data => setBookings(data))
  },[isUpdate])

  const refetch = ()=>{
    setIsUpdate(!isUpdate)
  }
 
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
        fetch(`https://hotel-booking-server-smoky.vercel.app/booking/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Spot has been deleted.", "success");
              // const remaining = bookings.filter((booking) => (booking._id !== id));
              // setBookings(remaining);
              refetch()
            }
          });
      }
    });
  };



  return (
    <div className="w-10/12 min-h-screen mx-auto animate__animated animate__slideInUp animate">
      <div className="flex justify-center">
        <h2 className="text-4xl font-bold my-20 pt-10 w-60 border-b-2 text-center border-blue-500">
          My Bookings
        </h2>
      </div>
      <div className="my-10">
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
            {bookings.map((bookingRoom) => (
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
