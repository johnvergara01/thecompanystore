import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FindItemName } from "../FindItem";
import styles from "./ItemDetails.module.css";
import { ShopContext } from "./Context";
import { useNavigate } from "react-router-dom";
import { CatalogContext } from "./Catalog";

const DecorationDetails = () => {
  const { updateCartItemCount } = useContext(ShopContext);
  const { decorationId } = useParams();
  const [decoration, setDecoration] = useState({ name: decorationId });
  const { DECORATIONS } = useContext(CatalogContext);
  const nav = useNavigate();

  useEffect(() => {
    let temp = FindItemName(decorationId, DECORATIONS);
    setDecoration(temp);
  }, [decorationId]);

  return (
    <>
      <div>
        <button className={styles.backButton} onClick={() => nav(-1)}>
          Back
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={decoration.imageSrc} alt="item" />
        </div>
        <div className={styles.right}>
          <div>
            <h1>{decoration.name}</h1>
          </div>
          <div>
            <h2>{decoration.price}'</h2>
          </div>
          <div>
            <p>{decoration.desc}</p>
          </div>
          <div>
            <button
              onClick={() => updateCartItemCount(1, decoration.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DecorationDetails;
