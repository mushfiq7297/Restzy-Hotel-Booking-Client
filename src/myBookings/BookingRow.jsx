import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BookingRow = ({ bookingRoom, bookings, setBookings, handleDelete }) => {
  const { image, roomName, price, date, _id } = bookingRoom;

  //..........................update..........................

  const handleUpdateDate = (event) => {
    event.preventDefault();

    const form = event.target;

    const date = form.date.value;

    const updateDate = {
      date,
    };
    console.log(updateDate);

    // //sending data to the server
    fetch(`http://localhost:5000/booking/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateDate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Date has Updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
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
        <form onSubmit={handleUpdateDate} className="flex gap-2">
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
          <button type="submit" className="btn btn-square btn-outline">
            <GiCheckMark />
          </button>
        </form>
      </th>
      <th></th>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-square btn-outline"
        >
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
      <th></th>
      <th>
        <Link to={`/reviews/${_id}`}>
        <button className="btn btn-square btn-outline w-20">
         Review
        </button>
        </Link>
      </th>
    </tr>
  );
};

export default BookingRow;
