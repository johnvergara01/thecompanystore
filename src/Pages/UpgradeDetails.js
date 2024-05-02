import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeleporterImg from "../Assets/Teleporter.png";
import InvTeleporterImg from "../Assets/Inv Teleporter.png";
import LoudHornImg from "../Assets/Loud Horn.png";
import styles from "./UpgradeDetails.module.css";

const UpgradeDetails = () => {
  const { upgradeId } = useParams();
  const [upgrade, setUpgrade] = useState({ name: upgradeId });

  useEffect(() => {
    //fetch id
    let tempUpgradeDB = [
      { name: "Teleporter", image: TeleporterImg, text: "Teleporter text" },
      {
        name: "Inverse Teleporter",
        image: InvTeleporterImg,
        text: "Inverse Teleporter text",
      },
      { name: "LoudHorn", image: LoudHornImg, text: "LoudHorn text" },
    ];
    switch (upgradeId) {
      case "Teleporter":
        setUpgrade(tempUpgradeDB[0]);
        break;
      case "Inverse Teleporter":
        setUpgrade(tempUpgradeDB[1]);
        break;
      case "Loud Horn":
        setUpgrade(tempUpgradeDB[2]);
        break;
      default:
        console.log("no matches");
    }
  }, [upgrade, upgradeId]);

  return (
    <>
      <main className={styles.container}>
        <div className={styles.left}>
          <img src={upgrade.image} alt="moon" />
        </div>
        <div className={styles.right}>
          <div className="moon-title">
            <h1>{upgrade.name}</h1>
          </div>
          <div className="moon-descr">
            <p>{upgrade.text}</p>
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

export default UpgradeDetails;
