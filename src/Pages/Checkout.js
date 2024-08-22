import { useContext, useEffect, useState } from "react";
import { ShopContext } from "./Context";
import { PRODUCTS } from "./Products";
import { CartItem } from "./CartItem";
import { MOONLIST } from "./MoonList";
import { UPGRADES } from "./UpgradeList";

const Checkout = () => {
  const [tempCart, setTempCart] = useState([]);
  const { cartItems } = useContext(ShopContext);

  const findItem = (id, array) => {
    const result = array.find((obj) => {
      return obj.id === id;
    });
    return result;
  };

  useEffect(() => {
    const tempArr = [];
    for (const id of cartItems.keys()) {
      if (cartItems.get(id) > 0) {
        const product = findItem(id, PRODUCTS);
        tempArr.push(product);
      }
    }
    setTempCart(tempArr);
  }, [cartItems]);

  return (
    <html>
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
    </html>
  );
};

export default Checkout;
