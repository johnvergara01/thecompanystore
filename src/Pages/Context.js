import { createContext, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = new Map();
  return cart;
};

const addToCartToast = () =>
  toast.success("Added to cart", {
    position: "bottom-right",
    autoClose: 5000,
    closeOnClick: true,
    theme: "dark",
    transition: Bounce,
  });

const errorToast = () =>
  toast.error("This item is already in your cart", {
    position: "bottom-right",
    autoClose: 5000,
    closeOnClick: true,
    theme: "dark",
    transition: Bounce,
  });

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemID, quantity, cartFlag = false) => {
    const tempMap = new Map(cartItems);
    if (cartItems.has(itemID)) {
      tempMap.set(itemID, cartItems.get(itemID) + quantity);
    } else {
      tempMap.set(itemID, quantity);
    }
    setCartItems(tempMap);
    if (!cartFlag) {
      addToCartToast();
    }
  };

  const moonAddToCart = (itemID) => {
    if (cartItems.has(itemID)) {
      errorToast();
    } else {
      const tempMap = new Map(cartItems);
      tempMap.forEach((val, key) => {
        if (key.charAt(0) === "m") {
          tempMap.delete(key);
        }
      });
      tempMap.set(itemID, 1);
      setCartItems(tempMap);
      addToCartToast();
    }
  };

  const removeFromCart = (itemID) => {
    const tempMap = new Map(cartItems);
    tempMap.set(itemID, cartItems.get(itemID) - 1);
    if (tempMap.get(itemID) === 0) {
      tempMap.delete(itemID);
    }
    setCartItems(tempMap);
  };

  const removeAllFromCart = (itemID) => {
    const tempMap = new Map(cartItems);
    tempMap.delete(itemID);
    setCartItems(tempMap);
  };

  const updateCartItemCount = (newAmount, itemID) => {
    if (cartItems.has(itemID)) {
      errorToast();
    } else {
      const tempMap = new Map(cartItems);
      tempMap.set(itemID, newAmount);
      setCartItems(tempMap);
      addToCartToast();
    }
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
    moonAddToCart,
    removeFromCart,
    removeAllFromCart,
    updateCartItemCount,
    dropDownAddQuantity,
    resetCart,
  };

  //console.log(cartItems);

  return (
    <html>
      <ShopContext.Provider value={contextValue}>
        {props.children}
        <ToastContainer />
      </ShopContext.Provider>
    </html>
  );
};
