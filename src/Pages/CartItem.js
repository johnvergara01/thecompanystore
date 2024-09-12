import React, { useContext } from "react";
import { ShopContext } from "./Context";
import styles from "./CartItem.module.css";

export const CartItem = (props) => {
  const { id, name, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, removeAllFromCart } =
    useContext(ShopContext);

  const getQty = () => {
    return cartItems.get(id);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>

        <div className={styles.cardContainerLeft}>
          <img className={styles.productImg} src={image} alt="product" />
        </div>

        <div className={styles.cardContainerRight}>
          <div className={styles.cardlink}>{name}</div>
          <div className={styles.price}>{price}' each</div>
          <div className={styles.price}>Total: {price * getQty()}' </div>
          {id.charAt(0) === "i" ? (
            <div>
              <div className={styles.quantityContainer}>
                <button onClick={() => removeFromCart(id)}>-</button>
                <input value={getQty()} readOnly={true}></input>
                <button onClick={() => addToCart(id, 1, true)}>+</button>
              </div>
              <button onClick={() => removeAllFromCart(id)}>Remove All</button>
            </div>
          ) : (
            <div>
              <button onClick={() => removeAllFromCart(id)}>Remove All</button>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
