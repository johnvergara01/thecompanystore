import { Link } from "react-router-dom";
import { ShopContext } from "./Context.js";
import { useContext } from "react";
import styles from "./Decorations.module.css";
import { CatalogContext } from "./Catalog.js";

const Decorations = () => {
  const { updateCartItemCount } = useContext(ShopContext);
  const { DECORATIONS, decorationStatus } = useContext(CatalogContext);

  return (
    <html>
      <div className={styles.banner}>
        <h1>Decorations</h1>
      </div>
      <ul>
        <div className={styles.gridcontainer}>
          {decorationStatus > 0 &&
            DECORATIONS.map((decoItem) => (
              <div className={styles.card}>
                <Link to={`/decorations/${decoItem.name}`}>
                  <img
                    className={styles.decoImg}
                    src={decoItem.imageSrc}
                    alt="decorations for sale"
                  ></img>
                </Link>
                <div>
                  <Link
                    className={styles.cardlink}
                    to={`/decorations/${decoItem.name}`}
                  >
                    {decoItem.name}
                  </Link>
                </div>
                <div className={styles.price}> {`${decoItem.price}'`} </div>
                <div>
                  <div>
                    <button onClick={() => updateCartItemCount(1, decoItem.id)}>
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

export default Decorations;
