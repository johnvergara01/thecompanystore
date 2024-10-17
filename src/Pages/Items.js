import { Link } from "react-router-dom";
import { ShopContext } from "./Context.js";
import { useContext } from "react";
import styles from "./Items.module.css";
import { CatalogContext } from "./Catalog.js";
import { storage } from "../Config.js";
import { getBlob, getDownloadURL, ref } from "firebase/storage";

const Items = () => {
  const { dropDownAddQuantity } = useContext(ShopContext);
  const { PRODUCTS, productStatus } = useContext(CatalogContext);

  return (
    <html>
      <div className={styles.banner}>
        <h1>Items</h1>
      </div>
      <ul>
        <div className={styles.gridcontainer}>
          {productStatus &&
            PRODUCTS.map((productItem) => (
              <div className={styles.card}>
                <Link to={`/items/${productItem.name}`}>
                  <img
                    className={styles.productImg}
                    src={productItem.imageSrc}
                    alt="item for sale"
                  ></img>
                </Link>
                <div>
                  <Link
                    className={styles.cardlink}
                    to={`/items/${productItem.name}`}
                  >
                    {productItem.name}
                  </Link>
                </div>
                <div className={styles.price}>{`${productItem.price}'`} </div>
                <div>
                  <p>Quantity</p>
                  <script src="Context.js"></script>
                  <label for="amt"></label>
                  <div class="dropdown">
                    <select name="amt" id={`${productItem.id}`}>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                    </select>
                  </div>
                  <div>
                    <button onClick={() => dropDownAddQuantity(productItem.id)}>
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

export default Items;
