import React, { useContext } from "react";
import { ShopContext } from "./Context";
import styles from "./CartItem.module.css";

export const CartItem = (props) => {
  const { id, name, price, image } = props.data;
  const {
    cartItems,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    updateCartItemCount,
  } = useContext(ShopContext);

  const getQty = () => {
    return cartItems.get(id);
  };

  return (
    <div>
      <img className={styles.image} src={image} alt="product" />
      <div>{name}</div>
      <div>${price}</div>
      <div>Total: ${price * getQty()}</div>
      {id.charAt(0) === "i" ? (
        <div>
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={getQty()}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          ></input>
          <button onClick={() => addToCart(id, 1)}>+</button>
          <button onClick={() => removeAllFromCart(id)}>Remove All</button>
        </div>
      ) : (
        <div>
          <button onClick={() => removeAllFromCart(id)}>Remove All</button>
        </div>
      )}
    </div>
  );
};
