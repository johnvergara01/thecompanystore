import { Link } from "react-router-dom";
import TitanImg from "../Assets/Titan.png";
import RendImg from "../Assets/Rend.png";
import ExpImg from "../Assets/Experimentation.png";
import styles from "./Moons.module.css";
import { useEffect, useState } from "react";

const Moons = () => {
  const [moonList, setMoonList] = useState([]);

  useEffect(() => {
    let tempMoonDB = [
      { name: "8-Titan", image: TitanImg, status: "Stormy", price: 700 },
      { name: "85-Rend", image: RendImg, status: "Eclipsed", price: 500 },
      { name: "41-Experimentation", image: ExpImg, status: "Normal", price: 0 },
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
      <div className={styles.banner}>
        <h1>Moons</h1>
      </div>
      <ul>
        {moonList.length > 0 &&
          moonList.map((moonItem) => (
            <div className={styles.card}>
              <Link className={styles.cardlink} to={`/moons/${moonItem.name}`}>
                <img
                  className={styles.moonImg}
                  src={moonItem.image}
                  alt="moon"
                ></img>
              </Link>
              <Link className={styles.cardlink} to={`/moons/${moonItem.name}`}>
                {moonItem.name}
              </Link>
              <p className={styles.price}>{`$${moonItem.price}`}</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </div>
          ))}
      </ul>
    </>
  );
};

export default Moons;
