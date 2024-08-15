import { useContext, useEffect, useState } from "react";
import { ShopContext } from "./Context";
import { PRODUCTS } from "./Products";
import { CartItem } from "./CartItem";
import { MOONLIST } from "./MoonList";

const Checkout = () => {
  const [tempCart, setTempCart] = useState([]);

  useEffect(() => {
    cartItems.forEach((qty, id) => {
      if (qty > 0) {
        const product = findItem(id, PRODUCTS);
        setTempCart(prevState => {
          return {...prevState, product}
        })
      }
    });
  }, []);

  const { cartItems } = useContext(ShopContext);
  const findItem = (id, array) => {
    const result = array.find((obj) => {
      return obj.id === id;
    });
    return result;
  };

  return (
    <>
      <div>
        <div>
          <h1>Checkout</h1>
        </div>
        <div>Items</div>

        <div>
          {tempCart.map((product) => {
            return <CartItem data={product}></CartItem>;
          })}
        </div>

        <div>Moons</div>
      </div>
    </>
  );
};

export default Checkout;
