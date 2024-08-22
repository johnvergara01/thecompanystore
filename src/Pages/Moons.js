import { Link } from "react-router-dom";
import { ShopContext } from "./Context.js";
import { useContext } from "react";
import { MOONLIST } from "./MoonList";
import styles from "./Moons.module.css";

const Moons = () => {

  const { dropDownAddQuantity } = useContext(ShopContext);

  return (
    <html>
      <div className={styles.banner}>
        <h1>Moons</h1>
      </div>
      <ul>
        {MOONLIST.length > 0 &&
          MOONLIST.map((moonItem) => (
            <div className={styles.card}>
              <Link to={`/items/${moonItem.name}`}>
                <img
                    className={styles.productImg}
                    src={moonItem.image}
                    alt="item for sale"
                ></img>
              </Link> 
              <div>
                <Link
                  className={styles.cardlink}
                  to={`/items/${moonItem.name}`}
                >
                  {moonItem.name}
                </Link>
              </div>
              <div className={styles.price}>{`${moonItem.price}'`} </div>
              <div>
                <div>
                  <button onClick={() => dropDownAddQuantity(moonItem.id)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </ul>
    </html>
  );
};

export default Moons;