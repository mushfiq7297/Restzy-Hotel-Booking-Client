import "animate.css";
import Availableroom from "./avilabilityBasedRoom/Availableroom";
import Unavailableroom from "./unavailableRoom/UnavailableRoom";

const FeaturedRoom = () => {
  return (
    <div className="mx-auto animate__animated animate__pulse animate__delay-2s">
      <div>
        <Availableroom></Availableroom>
      </div>
      <div>
        <Unavailableroom></Unavailableroom>
      </div>
    </div>
  );
};

export default FeaturedRoom;
