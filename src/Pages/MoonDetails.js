import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FindItemName } from "../FindItem";
import { MOONLIST } from "./MoonList";
import styles from "./ItemDetails.module.css";
import { ShopContext } from "./Context";
import { useNavigate } from "react-router-dom";

const MoonDetails = () => {
  const { moonAddToCart } = useContext(ShopContext);
  const { moonId } = useParams();
  const [moon, setMoon] = useState({ name: moonId });
  const nav = useNavigate();

  useEffect(() => {
    let temp = FindItemName(moonId, MOONLIST);
    setMoon(temp);
  }, [moonId]);

  return (
    <>
      <div>
        <button className={styles.backButton} onClick={() => nav(-1)}>
          Back
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={moon.image} alt="item" />
        </div>
        <div className={styles.right}>
          <div>
            <h1>{moon.name}</h1>
          </div>
          <div>
            <h2>{moon.price}'</h2>
          </div>
          <div>
            <p>{moon.desc}</p>
          </div>
          <div>
            <button onClick={() => moonAddToCart(moon.id)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoonDetails;
