import { createContext, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = new Map();
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemID, quantity) => {
    const tempMap = new Map(cartItems);
    if (cartItems.has(itemID)) {
      tempMap.set(itemID, cartItems.get(itemID) + quantity);
    } else {
      tempMap.set(itemID, quantity);
    }
    setCartItems(tempMap);
  };

  const removeFromCart = (itemID) => {
    const tempMap = new Map(cartItems);
    tempMap.set(itemID, cartItems.get(itemID) - 1);
    setCartItems(tempMap);
  };

  const removeAllFromCart = (itemID) => {
    const tempMap = new Map(cartItems);
    tempMap.set(itemID, 0);
    setCartItems(tempMap);
  };

  const updateCartItemCount = (newAmount, itemID) => {
    const tempMap = new Map(cartItems);
    tempMap.set(itemID, newAmount);
    setCartItems(tempMap);
  };

  const dropDownAddQuantity = (itemID) => {
    var q = Number(document.getElementById(itemID).value);
    addToCart(itemID, q);
  };

  const resetCart = () => {
    const tempMap = new Map(getDefaultCart());
    setCartItems(tempMap);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    updateCartItemCount,
    dropDownAddQuantity,
    resetCart,
  };

  return (
    <html>
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
    </html>
  );
};
