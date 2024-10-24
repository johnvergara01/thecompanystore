import { useContext, useEffect, useState } from "react";
import { ShopContext } from "./Context";
import { CatalogContext } from "./Catalog";
import { CartItem } from "./CartItem";
import styles from "./Checkout.module.css";
import { FindItemId } from "../FindItem";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [tempCart, setTempCart] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [emptyCartFlag, setEmptyCartFlag] = useState(true);
  const { cartItems, resetCart } = useContext(ShopContext);
  const { PRODUCTS, MOONS, UPGRADES, DECORATIONS } = useContext(CatalogContext);

  useEffect(() => {
    const tempArr = [];
    let product;
    let total = 0;
    for (const id of cartItems.keys()) {
      if (cartItems.get(id) > 0) {
        switch (id.charAt(0)) {
          case "i":
            product = FindItemId(id, PRODUCTS);
            break;
          case "m":
            product = FindItemId(id, MOONS);
            break;
          case "u":
            product = FindItemId(id, UPGRADES);
            break;
          case "d":
            product = FindItemId(id, DECORATIONS);
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
  }, [cartItems, PRODUCTS]);

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
          <div className={styles.flexcontainer}>
            <div className={styles.left}>
              <h2> Your Items </h2>
              <div className={styles.items}>
                {tempCart.map((item) => {
                  return <CartItem data={item}></CartItem>;
                })}
              </div>
            </div>
            <div className={styles.right}>
              <h2> Grand Total: {grandTotal}' </h2>
              <Link to="/confirmation">
                <button onClick={() => resetCart()}>Submit Order</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </html>
  );
};

export default Checkout;
