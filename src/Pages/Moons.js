import { Link } from "react-router-dom";
import { ShopContext } from "./Context.js";
import { useContext } from "react";
import styles from "./Moons.module.css";
import { CatalogContext } from "./Catalog.js";

const Moons = () => {
  const { moonAddToCart } = useContext(ShopContext);
  const { MOONS, moonStatus} = useContext(CatalogContext);

  return (
    <html>
      <div className={styles.banner}>
        <h1>Moons</h1>
      </div>
      <ul>
        <div className={styles.gridcontainer}>
          {moonStatus &&
            MOONS.map((moonItem) => (
              <div className={styles.card}>
                <Link to={`/moons/${moonItem.name}`}>
                  <img
                    className={styles.moonImg}
                    src={moonItem.imageSrc}
                    alt="item for sale"
                  ></img>
                </Link>
                <div>
                  <Link
                    className={styles.cardlink}
                    to={`/moons/${moonItem.name}`}
                  >
                    {moonItem.name}
                  </Link>
                </div>
                <div className={styles.price}>{`${moonItem.price}'`} </div>
                <div>
                  <div>
                    <button onClick={() => moonAddToCart(moonItem.id)}>
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

export default Moons;
