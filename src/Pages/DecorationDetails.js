import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlushieImg from "../Assets/Plushie.png";
import ToiletImg from "../Assets/Toilet.png";
import ShowerImg from "../Assets/Shower.png";
import styles from "./DecorationDetails.module.css";

const DecorationDetails = () => {
  const { decorationId } = useParams();
  const [decoration, setDecoration] = useState({ name: decorationId });

  useEffect(() => {
    //fetch id
    let tempDecoDB = [
      { name: "Plushie", image: PlushieImg, text: "Plushie text" },
      { name: "Toilet", image: ToiletImg, text: "Toilet text" },
      { name: "Shower", image: ShowerImg, text: "Shower text" },
    ];
    switch (decorationId) {
      case "Plushie":
        setDecoration(tempDecoDB[0]);
        break;
      case "Toilet":
        setDecoration(tempDecoDB[1]);
        break;
      case "Shower":
        setDecoration(tempDecoDB[2]);
        break;
      default:
        console.log("no matches");
    }
  }, [decoration, decorationId]);

  return (
    <>
      <main className={styles.container}>
        <div className={styles.left}>
          <img src={decoration.image} alt="decoration" />
        </div>
        <div className={styles.right}>
          <div className="moon-title">
            <h1>{decoration.name}</h1>
          </div>
          <div className="moon-descr">
            <p>{decoration.text}</p>
          </div>
          <div className="moon-attr"></div>
          <div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default DecorationDetails;
