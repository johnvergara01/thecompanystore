import { Link } from "react-router-dom";

const Moons = () => {
  return (
    <>
      <h1>Moons</h1>
      <div>
        <Link to="/moons/titan">Titan</Link>
      </div>
    </>
  );
};

export default Moons;