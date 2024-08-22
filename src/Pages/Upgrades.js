import { Link } from "react-router-dom";
import { ShopContext } from "./Context.js";
import { useContext } from "react";
import { UPGRADES } from "./UpgradeList.js"
import styles from "./Upgrades.module.css";

const Upgrades = () => {

  const { dropDownAddQuantity } = useContext(ShopContext);

  // const [upgradeList, setUpgradeList] = useState([]);

  // useEffect(() => {
  //   let tempArr = [];
  //   for (let i = 0; i < tempUpgradeDB.length; i++) {
  //     let tempUpgrade = tempUpgradeDB[i];
  //     tempArr.push(tempUpgrade);
  //   }
  //   setUpgradeList(tempArr);
  // }, [upgradeList]);

  return (
    <html>
      <div className={styles.banner}>
        <h1>Upgrades</h1>
      </div>
      <ul>
        <div className={styles.container}>
          {UPGRADES.length > 0 &&
            UPGRADES.map((upgradeItem) => (
              <div className={styles.card}>
                <Link to={`/items/${upgradeItem.upgradeName}`}>
                  <img
                    className={styles.upgradeImg}
                    src={upgradeItem.upgradeImage}
                    alt="upgrade for sale"
                  ></img>
                </Link>
                <div>
                  <Link
                    className={styles.cardlink}
                    to={`/items/${upgradeItem.upgradeName}`}
                  >
                    {upgradeItem.upgradeName}
                  </Link>
                </div>
                <div className={styles.price}> {`${upgradeItem.price}'`} </div>
                <div>
                  <div>
                    <button onClick={() => dropDownAddQuantity(upgradeItem.id)}>
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
