import { createContext, useState } from "react";
import { PRODUCTS } from "./Products.js";
import { MOONLIST } from "./MoonList.js";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = new Map();
  for (let i = 0; i < PRODUCTS.length; i++) {
    cart.set(PRODUCTS[i].id, 0);

    // [ {id: 1, qty: 3}, {id:2, qty: 2}, {id: 3, qty: 2}, {id: 34, qty: 5} ];
  }

  for (let i = 0; i < MOONLIST.length; i++) {
    cart.set(MOONLIST[i].id, 0);
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemID, quantity) => {
    // OG
    //setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + quantity }));
    console.log(cartItems);
    setCartItems((cart) => cart.set(itemID, cart.get(itemID) + quantity));
    console.log(cartItems);
  };

  const removeFromCart = (itemID) => {
    // OG
    // setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));

    setCartItems((cart) => cart.set(itemID, cart.get(itemID) - 1));
    console.log(cartItems);
  };

  const removeAllFromCart = (itemID) => {
    // OG
    // setCartItems((prev) => ({ ...prev, [itemID]: 0 }));

    setCartItems((cart) => cart.set(itemID, 0));
  };

  const updateCartItemCount = (newAmount, itemID) => {
    // OG
    // setCartItems((prev) => ({ ...prev, [itemID]: newAmount }));

    setCartItems((cart) => cart.set(itemID, newAmount));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    updateCartItemCount,
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
