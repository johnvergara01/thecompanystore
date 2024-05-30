import { createContext, useState } from "react";
import { PRODUCTS } from "./Products.js";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  };

  const removeFromCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };

  const contextValue = {
    addToCart,
    removeFromCart,
  };

  console.log(cartItems);

  return (
    <html>
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
    </html>
  );
};
