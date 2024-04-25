import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TeleporterImg from "../Assets/Teleporter.png";
import InvTeleporterImg from "../Assets/Inv Teleporter.png";
import LoudHornImg from "../Assets/Loud Horn.png";
import styles from "./Upgrades.module.css";

const Upgrades = () => {
  const [upgradeList, setUpgradeList] = useState([]);

  useEffect(() => {
    let tempUpgradeDB = [
      { name: "Teleporter", image: TeleporterImg, price: 375 },
      { name: "Inverse Teleporter", image: InvTeleporterImg, price: 425 },
      { name: "Loud Horn", image: LoudHornImg, price: 100 },
    ];
    let tempArr = [];
    for (let i = 0; i < tempUpgradeDB.length; i++) {
      let tempUpgrade = tempUpgradeDB[i];
      tempArr.push(tempUpgrade);
    }
    setUpgradeList(tempArr);
  }, [upgradeList]);
  return (
    <>
      <div className={styles.banner}>
        <h1>Upgrades</h1>
      </div>
      <ul>
        {upgradeList.length > 0 &&
          upgradeList.map((upgradeItem) => (
            <div className={styles.card}>
              <Link
                className={styles.cardlink}
                to={`/upgrades/${upgradeItem.name}`}
              >
                <img
                  className={styles.upgradeImg}
                  src={upgradeItem.image}
                  alt="upgrade"
                ></img>
              </Link>
              <Link
                className={styles.cardlink}
                to={`/upgrades/${upgradeItem.name}`}
              >
                {upgradeItem.name}
              </Link>
              <p className={styles.price}>{`$${upgradeItem.price}`}</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </div>
          ))}
      </ul>
    </>
  );
};

export default Upgrades;
