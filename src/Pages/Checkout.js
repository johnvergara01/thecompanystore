import { useContext } from "react";
import { ShopContext } from "./Context";
import { PRODUCTS } from "./Products";
import { CartItem } from "./CartItem";

const Checkout = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <>
      <div>
        <div>
          <h1>Checkout</h1>
        </div>
        <div classname="checkout">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>

        
      </div>
    </>
  )
};

export default Checkout;
