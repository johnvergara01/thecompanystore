import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FindItemName } from "../FindItem";
import { UPGRADES } from "./UpgradeList";
import styles from "./ItemDetails.module.css";
import { ShopContext } from "./Context";
import { useNavigate } from "react-router-dom";

const UpgradeDetails = () => {
  const { updateCartItemCount } = useContext(ShopContext);
  const { upgradeId } = useParams();
  const [upgrade, setUpgrade] = useState({ name: upgradeId });
  const nav = useNavigate();

  useEffect(() => {
    let temp = FindItemName(upgradeId, UPGRADES);
    setUpgrade(temp);
  }, [upgradeId]);

  return (
    <>
      <div>
        <button className={styles.backButton} onClick={() => nav(-1)}>
          Back
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={upgrade.image} alt="item" />
        </div>
        <div className={styles.right}>
          <div>
            <h1>{upgrade.name}</h1>
          </div>
          <div>
            <h2>{upgrade.price}'</h2>
          </div>
          <div>
            <p>{upgrade.desc}</p>
          </div>
          <div>
            <button
              onClick={() => updateCartItemCount(1, upgrade.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpgradeDetails;
