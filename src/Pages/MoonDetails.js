import { useParams } from "react-router-dom";
import TitanImg from "../Assets/Titan.png";
import RendImg from "../Assets/Rend.png";
import "./MoonDetails.css";
import { useEffect, useState } from "react";

const MoonDetails = () => {
  const { moonId } = useParams();
  const [moon, setMoon] = useState({ name: moonId });

  useEffect(() => {
    let tempMoonDB = [
      { name: "8-Titan", image: TitanImg, sampleText: "Titan text" },
      { name: "85-Rend", image: RendImg, sampleText: "Rend text" },
    ];
    switch (moonId) {
      case "8-Titan":
        setMoon(tempMoonDB[0]);
        break;
      case "85-Rend":
        setMoon(tempMoonDB[1]);
        break;
      default:
        console.log("no matches");
    }
  }, [moon, moonId]);

  return (
    <>
      <main className="container">
        <div className="left">
          <img src={moon.image} alt="moon" />
        </div>
        <div className="right">
          <div className="moon-title">
            <h1>{moon.name}</h1>
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
