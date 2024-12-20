import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CatalogContext } from "./Catalog.js";
import { FindItemName } from "../FindItem.js";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "./Context.js";
import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import styles from "./ItemDetails.module.css";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({ name: itemId });
  const { PRODUCTS } = useContext(CatalogContext);
  const nav = useNavigate();

  useEffect(() => {
    let temp = FindItemName(itemId, PRODUCTS);
    setItem(temp);
  }, [itemId, PRODUCTS]);

  const { dropDownAddQuantity } = useContext(ShopContext);

  return (
    <html>
      <div>
        <button className={styles.backButton} onClick={() => nav(-1)}>
          Back
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={item.imageSrc} alt="item" />
        </div>
        <div className={styles.right}>
          <div>
            <h1>{item.name}</h1>
          </div>
          <div>
            <h2>{item.price}'</h2>
          </div>
          <div>
            <p>{item.desc}</p>
          </div>
          <div>
            <h3>Quantity</h3>
            <script src="Context.js"></script>
            <label for="amt"></label>
            <div class="dropdown">
              <select name="amt" id={item.id}>
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
          </div>
          <div>
            <button
              onClick={() => {
                dropDownAddQuantity(item.id);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </html>
  );
};

export default ItemDetails;
