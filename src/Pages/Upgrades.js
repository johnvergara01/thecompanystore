import { Link } from "react-router-dom";
import { ShopContext } from "./Context.js";
import { useContext } from "react";
import { UPGRADES } from "./UpgradeList.js"
import styles from "./Upgrades.module.css";

const Upgrades = () => {

  const { updateCartItemCount } = useContext(ShopContext);

  return (
    <html>
      <div className={styles.banner}>
        <h1>Upgrades</h1>
      </div>
      <ul>
        <div className={styles.gridcontainer}>
          {UPGRADES.length > 0 &&
            UPGRADES.map((upgradeItem) => (
              <div className={styles.card}>
                <Link to={`/items/${upgradeItem.name}`}>
                  <img
                    className={styles.upgradeImg}
                    src={upgradeItem.image}
                    alt="upgrade for sale"
                  ></img>
                </Link>
                <div>
                  <Link
                    className={styles.cardlink}
                    to={`/items/${upgradeItem.name}`}
                  >
                    {upgradeItem.name}
                  </Link>
                </div>
                <div className={styles.price}> {`${upgradeItem.price}'`} </div>
                <div>
                  <div>
                    <button onClick={() => updateCartItemCount(1, upgradeItem.id)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </ul>
    </html>
  );
};

export default Upgrades;
