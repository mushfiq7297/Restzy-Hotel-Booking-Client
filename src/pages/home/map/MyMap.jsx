import { Map, Marker } from "pigeon-maps";
import "animate.css"
const MyMap = () => {
  return (
    <div className="animate__animated animate__slideInRight animate__delay-2s">
      <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
        <Marker width={50} anchor={[50.879, 4.6997]} />
      </Map>
    </div>
  );
};

export default MyMap;
