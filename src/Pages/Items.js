import "./Items.css";
import { Link } from "react-router-dom";
import proflashlight from "../Assets/Pro-Flashlight.png";

const Items = () => {
  return (
    <html>
      <h1 id="pagetitle">Items</h1>

      <div>
        <Link to="/items/flashlight">Flashlight</Link>
      </div>

      <div>
        <div class="card">
          <img src={proflashlight} alt="Pro Flashlight" />
          <h1>Pro-Flashlight</h1>
          <p class="price">$19.99</p>
          <p>
            <button>Quantity</button>
            <button>Add to Cart</button>
          </p>
        </div>

        <div class="card">
          <Link class="cardlink" to="/items/flashlight">
            <img src={proflashlight} alt="Pro Flashlight" />
          </Link>
          <Link class="cardlink" to="/items/flashlight"> Pro-Flashlight </Link>
          <p class="price">$19.99</p>
          <p>
            <button>Quantity</button>
            <button>Add to Cart</button>
          </p>
        </div>
      </div>

      <div>
        <div class="card">
          <img src={proflashlight} alt="Pro Flashlight" />
          <h1>Pro-Flashlight</h1>
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
