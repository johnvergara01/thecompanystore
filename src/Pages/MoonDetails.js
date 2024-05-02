import { useParams } from "react-router-dom";
import TitanImg from "../Assets/Titan.png";
import RendImg from "../Assets/Rend.png";
import ExpImg from "../Assets/Experimentation.png";
import styles from "./MoonDetails.module.css";
import { useEffect, useState } from "react";

const MoonDetails = () => {
  const { moonId } = useParams();
  const [moon, setMoon] = useState({ name: moonId });

  useEffect(() => {
    let tempMoonDB = [
      { name: "8-Titan", image: TitanImg, text: "Titan text" },
      { name: "85-Rend", image: RendImg, text: "Rend text" },
      {
        name: "41-Experimentation",
        image: ExpImg,
        text: "Experimentation text",
      },
    ];
    switch (moonId) {
      case "8-Titan":
        setMoon(tempMoonDB[0]);
        break;
      case "85-Rend":
        setMoon(tempMoonDB[1]);
        break;
      case "41-Experimentation":
        setMoon(tempMoonDB[2]);
        break;
      default:
        console.log("no matches");
    }
  }, [moon, moonId]);

  return (
    <>
      <main className={styles.container}>
        <div className={styles.left}>
          <img src={moon.image} alt="moon" />
        </div>
        <div className={styles.right}>
          <div className="moon-title">
            <h1>{moon.name}</h1>
          </div>
          <div className="moon-descr">
            <p>{moon.text}</p>
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
