import { GiCheckMark } from "react-icons/gi";
import Swal from "sweetalert2";

const BookingRow = ({ bookingRoom, bookings, setBookings }) => {
  const { image, roomName, price, date ,_id} = bookingRoom;
  const handleDelete = (_id) => {
    console.log(_id);
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
        fetch(`http://localhost:5000/booking/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Spot has been deleted.", "success");
              const remaining = bookings.filter((booking) => (booking._id = _id));
              setBookings(remaining);
            }
          });
      }
    });
  };
  return (
    <tr className="shadow-md gap-3">
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-32 h-32">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold text-xl">{roomName}</div>
            <div className="text-lg opacity-50 font-bold">${price}</div>
            <div className="text-lg opacity-50 font-bold text-purple-700">
              {date}
            </div>
          </div>
        </div>
      </td>
      <th>
        <form className="flex gap-2">
          <div className="form-control">
            <input
              type="date"
              placeholder="Date"
              name="date"
              defaultValue={date}
              className="input input-bordered"
              required
            />
          </div>
          <button className="btn btn-square btn-outline">
          <GiCheckMark />
          </button>
        </form>
      </th>
      <th></th>
      <th>
        <button onClick={() => handleDelete(_id)}  className="btn btn-square btn-outline" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
    </tr>
  );
};

export default BookingRow;
