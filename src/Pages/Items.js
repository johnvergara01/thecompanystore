import "./Items.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import proflashlight from "../Assets/Pro-Flashlight.png";

const Items = () => {
  var itemTotal = 0;
  let [total, setTotal] = useState([]);

  const updateTotal = () => {
    itemTotal++;
    setTotal(itemTotal);
    localStorage.setItem("Total", total);
  };

  console.log("hello");
  var newTotal = localStorage.getItem("Total");
  console.log(localStorage.getItem("Total"));

  // const removeTotal = () => {
  //   localStorage.removeItem(total);
  // };

  return (
    <html>
      <h1 id="itembanner">Items</h1>
      <h1>
        Total : <span id="Total"></span>
      </h1>

      <div>
        <div class="card">
          <Link class="cardlink" to="/items/flashlight">
            <img src={proflashlight} alt="Pro Flashlight" />
          </Link>
          <Link class="cardlink" to="/items/flashlight">
            Pro-Flashlight
          </Link>
          <p class="price">$19.99</p>
          <p>
            <button>Quantity</button>
            <button onClick={updateTotal}>Add to Cart</button>
          </p>
        </div>
        <div class="card">
          <Link class="cardlink" to="/items/flashlight">
            <img src={proflashlight} alt="Pro Flashlight" />
          </Link>
          <Link class="cardlink" to="/items/flashlight">
            Pro-Flashlight
          </Link>
          <p class="price">$19.99</p>
          <p>
            <button>Quantity</button>
            <button>Add to Cart</button>
          </p>
        </div>
      </div>

      <div>
        <div class="card">
          <Link class="cardlink" to="/items/flashlight">
            <img src={proflashlight} alt="Pro Flashlight" />
          </Link>
          <Link class="cardlink" to="/items/flashlight">
            Pro-Flashlight
          </Link>
          <p class="price">$19.99</p>
          <p>
            <button>Quantity</button>
            <button>Add to Cart</button>
          </p>
        </div>
        <div class="card">
          <img src={proflashlight} alt="Pro Flashlight" />
          <h1>Pro-Flashlight</h1>
          <p class="price">$19.99</p>
          <p>
            <button>Quantity</button>
            <button>Add to Cart</button>
          </p>
        </div>
      </div>
    </html>
  );
};

export default Items;
