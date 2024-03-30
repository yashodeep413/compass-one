import Compass from "./assets/compass.svg";
import CompassCenter from "./assets/compass_center.svg";

function App() {
  return (
    <div className='bg-black relative h-screen' style={{ backgroundColor: "black" }}>
      <img src={Compass} height={400} width={400} className="animate-spin-slow rotate-360" style={{ marginLeft: "70vh" }} />
      <div className="absolute flex items-center top-0 bottom-0 right-0 left-24 mx-20"  >
        <img src={CompassCenter} height={40} width={40} className="compass-center" style={{ marginTop: '-70px' }} />
      </div>
    </div>
  );
}

export default App;
