const BookingRow = ({ bookingRoom }) => {
  const { image, roomName, price, date } = bookingRoom;
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
        <form>
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
        </form>
      </th>
      <th></th>
      <th>
        <button className="btn btn-square btn-outline">
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
