import { createContext, useState } from "react";
import { PRODUCTS } from "./Products.js";
import { MOONLIST } from "./MoonList.js";
import { UPGRADES } from "./UpgradeList.js";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = new Map();
  // [ {id: 1, qty: 3}, {id:2, qty: 2}, {id: 3, qty: 2}, {id: 34, qty: 5} ];
  for (let i = 0; i < PRODUCTS.length; i++) {
    cart.set(PRODUCTS[i].id, 0);
  }

  for (let i = 0; i < MOONLIST.length; i++) {
    cart.set(MOONLIST[i].id, 0);
  }

  for (let i = 0; i < UPGRADES.length; i++) {
    cart.set(UPGRADES[i].id, 0);
  }

  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemID, quantity) => {
    // OG
    //setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + quantity }));

    //setCartItems((cart) => cart.set(itemID, cart.get(itemID) + quantity));

    const tempMap = new Map(cartItems);
    tempMap.set(itemID, cartItems.get(itemID) + quantity);
    setCartItems(tempMap);
  };

  const removeFromCart = (itemID) => {
    // OG
    // setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));

    //setCartItems((cart) => cart.set(itemID, cart.get(itemID) - 1));

    const tempMap = new Map(cartItems);
    tempMap.set(itemID, cartItems.get(itemID) - 1);
    setCartItems(tempMap);
  };

  const removeAllFromCart = (itemID) => {
    // OG
    // setCartItems((prev) => ({ ...prev, [itemID]: 0 }));

    //setCartItems((cart) => cart.set(itemID, 0));

    const tempMap = new Map(cartItems);
    tempMap.set(itemID, 0);
    setCartItems(tempMap);
  };

  const updateCartItemCount = (newAmount, itemID) => {
    // OG
    // setCartItems((prev) => ({ ...prev, [itemID]: newAmount }));

    //setCartItems((cart) => cart.set(itemID, newAmount));

    const tempMap = new Map(cartItems);
    tempMap.set(itemID, newAmount);
    setCartItems(tempMap);
  };

  const dropDownAddQuantity = (itemID) => {
    var q = Number(document.getElementById(itemID).value);
    console.log(q); // delete later

    addToCart(itemID, q);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    updateCartItemCount,

    dropDownAddQuantity,
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
