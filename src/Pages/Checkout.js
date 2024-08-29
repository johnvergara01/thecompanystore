import { useContext, useEffect, useState } from "react";
import { ShopContext } from "./Context";
import { PRODUCTS } from "./Products";
import { CartItem } from "./CartItem";
import { MOONLIST } from "./MoonList";
import { UPGRADES } from "./UpgradeList";
import { DECORATIONS } from "./DecorationList";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const [tempCart, setTempCart] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [emptyCartFlag, setEmptyCartFlag] = useState(true);
  const { cartItems, resetCart } = useContext(ShopContext);

  const findItem = (id, array) => {
    const result = array.find((obj) => {
      return obj.id === id;
    });
    return result;
  };

  useEffect(() => {
    const tempArr = [];
    let product;
    let total = 0;
    for (const id of cartItems.keys()) {
      if (cartItems.get(id) > 0) {
        switch (id.charAt(0)) {
          case "i":
            product = findItem(id, PRODUCTS);
            break;
          case "m":
            product = findItem(id, MOONLIST);
            break;
          case "u":
            product = findItem(id, UPGRADES);
            break;
          case "d":
            product = findItem(id, DECORATIONS);
            break;
          default:
            product = 0;
        }
        total = total + product.price * cartItems.get(id);
        setGrandTotal(total);
        tempArr.push(product);
      }
    }
    setTempCart(tempArr);
  }, [cartItems]);

  useEffect(() => {
    let total = 0;
    for (const x of cartItems.values()) {
      total += x;
    }
    if (total > 0) {
      setEmptyCartFlag(false);
    } else {
      setEmptyCartFlag(true);
    }
  }, [cartItems, tempCart]);

  return (
    <html>
      <div>
        <div className={styles.banner}>
          <h1>Checkout</h1>
        </div>
        {emptyCartFlag ? (
          <div className={styles.banner}>Your cart is empty</div>
        ) : (
          <div className={styles.gridcontainer}>
            <div className={styles.card}>
              {tempCart.map((item) => {
                return <CartItem data={item}></CartItem>;
              })}
            </div>
            <div className={styles.card}>
              Grand Total: {grandTotal}
              <div>
                <button onClick={() => resetCart()}>Submit Order</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </html>
  );
};

export default Checkout;
