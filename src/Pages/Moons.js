import { Link } from "react-router-dom";
import TitanImg from "../Assets/Titan.png";
import RendImg from "../Assets/Rend.png";
import "./Moons.css";
import { useEffect, useState } from "react";

const Moons = () => {
  const [moonList, setMoonList] = useState([]);

  useEffect(() => {
    let tempMoonDB = [
      { name: "8-Titan", image: TitanImg, status: "Stormy", price: 700 },
      { name: "85-Rend", image: RendImg, status: "Eclipsed", price: 500 },
    ];
    let tempArr = [];
    for (let i = 0; i < tempMoonDB.length; i++) {
      let tempMoon = tempMoonDB[i];
      tempArr.push(tempMoon);
    }
    setMoonList(tempArr);
  }, [moonList]);

  return (
    <>
      <div className="title">
        <h1>Moons</h1>
      </div>
      <ul>
        {moonList.length > 0 &&
          moonList.map((moonItem) => (
            <div className="moons-list">
              <div className="moon-listing">
                <div className="moon-listing-column-left">
                  <Link to={`/moons/${moonItem.name}`}>
                    <img
                      className="moon-image"
                      src={moonItem.image}
                      alt="moon"
                    />
                  </Link>
                </div>
                <div className="moon-listing-column-right">
                  <div className="moon-name">
                    <Link to={`/moons/${moonItem.name}`}>
                      <h2>{moonItem.name}</h2>
                    </Link>
                    <h2>${moonItem.price}</h2>
                  </div>
                  <div className="moon-status">Status: {moonItem.status}</div>
                  <div>
                    <button className="add-to-cart">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </ul>
    </>
  );
};

export default Moons;
