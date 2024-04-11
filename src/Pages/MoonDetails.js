import { useParams } from "react-router-dom";
import moon from "../Assets/Titan.png";
import "./MoonDetails.css";

const MoonDetails = () => {
  const { moonId } = useParams();

  return (
    <>
      <main className="container">
        <div className="left">
          <img src={moon} alt="moon" />
        </div>
        <div className="right">
          <div className="moon-title">
            <h1>{moonId}</h1>
            <h2>$700</h2>
          </div>
          <div className="moon-descr">
            <p>
              It looks like this moon was mined for resources. It's easy to get
              lost within the giant industrial complex. There are many entrances
              to it littered about the landscape
            </p>
          </div>
          <div className="moon-attr">
            <div>Risk Level: S+</div>
            <div>Difficulty: Hard</div>
            <div>Map-Layout: Facility</div>
          </div>
          <div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default MoonDetails;
