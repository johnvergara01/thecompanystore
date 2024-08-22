import { Link } from "react-router-dom";
import { ShopContext } from "./Context.js";
import { useContext } from "react";
import { PRODUCTS } from "./Products";
import styles from "./Items.module.css";

const Items = () => {
  
  const { dropDownAddQuantity } = useContext(ShopContext);

  return (
    <html>
      <div className={styles.itembanner}>
        <h1>Items</h1>
      </div>
      <ul>
        <div className={styles.container}>
          {PRODUCTS.length > 0 &&
            PRODUCTS.map((productItem) => (
              <div className={styles.card}>
                {/* <Link
                    className={styles.card}
                    to={`/items/${productItem.productName}`}
                  >
                  </Link> */}
                <Link to={`/items/${productItem.productName}`}>
                  <img
                    className={styles.productImg}
                    src={productItem.productImage}
                    alt="item for sale"
                  ></img>
                </Link>
                <div>
                  <Link
                    className={styles.cardlink}
                    to={`/items/${productItem.productName}`}
                  >
                    {productItem.productName}
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

    /* <div>
        <div class="card">
          <Link class="cardlink" to="/items/Pro-flashlight">
            <img src={proflashlight} alt="Pro Flashlight" />
          </Link>
          <Link class="cardlink" to="/items/Pro-flashlight">
            Pro-Flashlight
          </Link>
          <p class="price">$25</p>
          <p>
            <button>Quantity</button>
            <button onClick={() => setQty(qty - 1)}>-</button>
            <input
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
            ></input>
            <button onClick={() => setQty(qty + 1)}>+</button>
            <button onClick={() => addToCart('i1', qty)}>Add to Cart</button>
          </p>
        </div>
        <div class="card">
          <Link class="cardlink" to="/items/Flashlight">
            <img src={flashlight} alt="Flashlight" />
          </Link>
          <Link class="cardlink" to="/items/Flashlight">
            Flashlight
          </Link>
          <p class="price">$15</p>
          <p>
            <button>Quantity</button>
            <button onClick={() => addToCart(2)}>Add to Cart</button>
          </p>
        </div>
      </div>
      <div>
        <div class="card">
          <Link class="cardlink" to="/items/Shovel">
            <img src={shovel} alt="Shovel" />
          </Link>
          <Link class="cardlink" to="/items/Shovel">
            Shovel
          </Link>
          <p class="price">$30</p>
          <p>
            <button>Quantity</button>
            <button onClick={() => addToCart(3)}>Add to Cart</button>
          </p>
        </div>
        <div class="card">
          <Link class="cardlink" to="/items/Walkie-talkie">
            <img src={walkietalkie} alt="Walkie Talkie" />
          </Link>
          <Link class="cardlink" to="/items/Walkie-talkie">
            Walkie-Talkie
          </Link>
          <p class="price">$12</p>
          <p>
            <button>Quantity</button>
            <button onClick={() => addToCart(4)}>Add to Cart</button>
          </p>
        </div>
      </div> */
  );
};

export default Items;
