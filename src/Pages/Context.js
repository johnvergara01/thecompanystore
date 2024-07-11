import { createContext, useState } from "react";
import { PRODUCTS } from "./Products.js";


export const ShopContext = createContext(null);

var quantity = 0;

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const incItemQuantity = () => {   
    quantity++;
  }

  const decItemQuantity = () => {
    quantity--;
  }

  const returnQuantity = () => {
    return quantity; 
  }

  const addToCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + quantity}));
  };

  const removeFromCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1}));
  };

  const updateCartItemCount = (newAmount, itemID) => {
    setCartItems((prev) => ({...prev, [itemID]: newAmount}))
  }

  const contextValue = {
    cartItems,
    incItemQuantity,
    decItemQuantity,
    returnQuantity,
    addToCart,
    removeFromCart,
    updateCartItemCount
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
