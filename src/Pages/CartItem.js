import React from "react";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  return (
    <>
      <img src={productImage} alt="product" />
      <div>{productName}</div>;<div>${price}</div>
    </>
  );
};
