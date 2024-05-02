import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProFlashlightImg from "../Assets/Pro-Flashlight.png";
import FlashlightImg from "../Assets/Flashlight.png";
import ShovelImg from "../Assets/Shovel.png";
import WalkieTalkieImg from "../Assets/WalkieTalkie.png";
import styles from "./ItemDetails.module.css";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({ name: itemId });

  useEffect(() => {
    //fetch itemId
    let tempItemDB = [
      {
        name: "Pro Flashlight",
        image: ProFlashlightImg,
        text: "Pro Flashlight text",
      },
      { name: "Flashlight", image: FlashlightImg, text: "Flashlight text" },
      { name: "Shovel", image: ShovelImg, text: "Shovel text" },
      {
        name: "Walkie Talkie",
        image: WalkieTalkieImg,
        text: "Walkie Talkie text",
      },
    ];
    switch (itemId) {
      case "Pro-flashlight":
        setItem(tempItemDB[0]);
        break;
      case "Flashlight":
        setItem(tempItemDB[1]);
        break;
      case "Shovel":
        setItem(tempItemDB[2]);
        break;
      case "Walkie-talkie":
        setItem(tempItemDB[3]);
        break;
      default:
        console.log("no matches");
    }
  }, [item, itemId]);

  return (
    <>
      <main className={styles.container}>
        <div className={styles.left}>
          <img src={item.image} alt="item" />
        </div>
        <div className={styles.right}>
          <div className="item-title">
            <h1>{item.name}</h1>
          </div>
          <div className="item-descr">
            <p>{item.text}</p>
          </div>
          <div className="item-attr"></div>
          <div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ItemDetails;
