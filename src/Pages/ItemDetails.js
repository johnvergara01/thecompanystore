import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ShopContext } from "./Context.js";
import { useContext } from "react";
import { PRODUCTS } from "./Products";
import styles from "./ItemDetails.module.css";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({ name: itemId });

  const findItem = (name, array) => {
    const result = array.find((obj) => {
      return obj.name === name;
    });
    return result;
  };

  useEffect(() => {
    //fetch item name
    let product = findItem(itemId, PRODUCTS);
    console.log("itemName", itemId);
    console.log("product", product);
    setItem(product);
  }, [itemId]);

  return (
    <html>
      <div>
        <main className={styles.container}>
          <div className={styles.left}>
            <img src={item.image} alt="item" />
          </div>
          <div className={styles.right}>
            <div className="item-title">
              <h1>{item.name}</h1>
            </div>
            <div className="item-descr">
              <p>{item.name}</p>
            </div>
            <div className="item-attr"></div>
            <div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </main>
      </div>
    </html>
  );

  // return (
  //   <>
  // <main className={styles.container}>
  //   <div className={styles.left}>
  //     <img src={item.image} alt="item" />
  //   </div>
  //   <div className={styles.right}>
  //     <div className="item-title">
  //       <h1>{item.name}</h1>
  //     </div>
  //     <div className="item-descr">
  //       <p>{item.text}</p>
  //     </div>
  //     <div className="item-attr"></div>
  //     <div>
  //       <button className="add-to-cart">Add to Cart</button>
  //     </div>
  //   </div>
  // </main>
  //   </>
  // );
};

export default ItemDetails;
