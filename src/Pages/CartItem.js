import React, { useContext } from "react";
import { ShopContext } from "./Context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, removeAllFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <>
      <div>
        <img src={productImage} alt="product" />
        <div>{productName}</div>;<div>${price}</div>
        <div>Total: ${price * cartItems[id]}</div>
        <div>
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          ></input>
          <button onClick={() => addToCart(id, 1)}>+</button>
          <button onClick={() => removeAllFromCart(id)}>Remove All</button>
        </div>
      </div>
    </>
  );
};
