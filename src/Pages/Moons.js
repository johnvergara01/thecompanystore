import { Link } from "react-router-dom";
import { ShopContext } from "./Context.js";
import { useContext, useState, useEffect } from "react";
import { MOONLIST } from "./MoonList";
import styles from "./Moons.module.css";

const Moons = () => {

  const { dropDownAddQuantity } = useContext(ShopContext);

  return (
    <>
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
                <p>Quantity</p>
                <script src="Context.js"></script>
                <label for="amt"></label>
                <div class="dropdown">
                  <select name="amt" id={`${moonItem.id}`}>
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
                  <button onClick={() => dropDownAddQuantity(moonItem.id)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </ul>
    </>
  );
};

export default Moons;




            // <div className={styles.card}>
            //   <Link className={styles.cardlink} to={`/moons/${moonItem.name}`}>
            //     <img
            //       className={styles.moonImg}
            //       src={moonItem.image}
            //       alt="moon"
            //     ></img>
            //   </Link>
            //   <Link className={styles.cardlink} to={`/moons/${moonItem.name}`}>
            //     {moonItem.name}
            //   </Link>
            //   <p className={styles.price}>{`$${moonItem.price}`}</p>
            //   <p>
            //     <button>Add to Cart</button>
            //   </p>
            // </div>