import { Link } from "react-router-dom";
import { ShopContext } from "./Context.js";
import { useContext, useState, useEffect } from "react";
import { PRODUCTS } from "./Products";
import styles from "./Items.module.css";

import proflashlight from "../Assets/Pro-Flashlight.png";
import flashlight from "../Assets/Flashlight.png";
import shovel from "../Assets/Shovel.png";
import walkietalkie from "../Assets/WalkieTalkie.png";

const Items = () => {

  const {
    addToCart,
    updateCartItemCount,
    cartItems,
  } = useContext(ShopContext);

  const [qty, setQty] = useState(1);

  useEffect(() => {
    setQty(qty);
  }, [qty]);


  return (
    <html>
      
      <h1 id="itembanner">Items</h1>

      <ul>
        {PRODUCTS.length > 0 && PRODUCTS.map((productItem) => (
          <div className={styles.card}>
            <Link className={styles.cardlink} to={`/items/${productItem.productName}`}>
            </Link>  
          </div>
        ))}
      </ul>


      <div>
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
      </div>
    </html>
  );
};

export default Items;
