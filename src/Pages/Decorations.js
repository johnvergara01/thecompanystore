import { Link } from "react-router-dom";
import PlushieImg from "../Assets/Plushie.png";
import ToiletImg from "../Assets/Toilet.png";
import ShowerImg from "../Assets/Shower.png";
import styles from "./Decorations.module.css";
import { useEffect, useState } from "react";

const Decorations = () => {
  const [decoList, setDecoList] = useState([]);

  useEffect(() => {
    let tempDecoDB = [
      { name: "Plushie", image: PlushieImg, price: 100 },
      { name: "Toilet", image: ToiletImg, price: 150 },
      { name: "Shower", image: ShowerImg, price: 180 },
    ];
    let tempArr = [];
    for (let i = 0; i < tempDecoDB.length; i++) {
      let tempDeco = tempDecoDB[i];
      tempArr.push(tempDeco);
    }
    setDecoList(tempArr);
  }, [decoList]);
  return (
    <>
      <div className={styles.banner}>
        <h1>Decorations</h1>
      </div>
      <ul>
        {decoList.length > 0 &&
          decoList.map((decoItem) => (
            <div className={styles.card}>
              <Link className={styles.cardlink} to={`/decorations/${decoItem.name}`}>
                <img
                  className={styles.decoImg}
                  src={decoItem.image}
                  alt="deco"
                ></img>
              </Link>
              <Link className={styles.cardlink} to={`/decorations/${decoItem.name}`}>
                {decoItem.name}
              </Link>
              <p className={styles.price}>{`$${decoItem.price}`}</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </div>
          ))}
      </ul>
    </>
  );
};

export default Decorations;
