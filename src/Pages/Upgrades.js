import { Link } from "react-router-dom";
import { ShopContext } from "./Context.js";
import { useContext } from "react";
import styles from "./Upgrades.module.css";
import { CatalogContext } from "./Catalog.js";

const Upgrades = () => {
  const { updateCartItemCount } = useContext(ShopContext);
  const { UPGRADES, upgradeStatus } = useContext(CatalogContext);

  return (
    <html>
      <div className={styles.banner}>
        <h1>Upgrades</h1>
      </div>
      <ul>
        <div className={styles.gridcontainer}>
          {upgradeStatus > 0 &&
            UPGRADES.map((upgradeItem) => (
              <div className={styles.card}>
                <Link to={`/upgrades/${upgradeItem.name}`}>
                  <img
                    className={styles.upgradeImg}
                    src={upgradeItem.imageSrc}
                    alt="upgrade for sale"
                  ></img>
                </Link>
                <div>
                  <Link
                    className={styles.cardlink}
                    to={`/upgrades/${upgradeItem.name}`}
                  >
                    {upgradeItem.name}
                  </Link>
                </div>
                <div className={styles.price}> {`${upgradeItem.price}'`} </div>
                <div>
                  <div>
                    <button
                      onClick={() => updateCartItemCount(1, upgradeItem.id)}
                    >
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
