import { Link } from "react-router-dom";
import { ShopContext } from "./Context.js";
import { useContext } from "react";
import { DECORATIONS } from "./DecorationList.js";
import styles from "./Decorations.module.css";

const Decorations = () => {

  const { updateCartItemCount } = useContext(ShopContext);

  // const [decoList, setDecoList] = useState([]);

  // useEffect(() => {
  //   let tempDecoDB = [
  //     { name: "Plushie", image: PlushieImg, price: 100 },
  //     { name: "Toilet", image: ToiletImg, price: 150 },
  //     { name: "Shower", image: ShowerImg, price: 180 },
  //   ];
  //   let tempArr = [];
  //   for (let i = 0; i < tempDecoDB.length; i++) {
  //     let tempDeco = tempDecoDB[i];
  //     tempArr.push(tempDeco);
  //   }
  //   setDecoList(tempArr);
  // }, [decoList]);

  return (
    <html>
      <div className={styles.banner}>
        <h1>Decorations</h1>
      </div>
      <ul>
        <div className={styles.gridcontainer}>
          {DECORATIONS.length > 0 &&
            DECORATIONS.map((decoItem) => (
              <div className={styles.card}>
                <Link to={`/items/${decoItem.name}`}>
                  <img
                    className={styles.decoImg}
                    src={decoItem.image}
                    alt="decorations for sale"
                  ></img>
                </Link>
                <div>
                  <Link
                    className={styles.cardlink}
                    to={`/items/${decoItem.name}`}
                  >
                    {decoItem.name}
                  </Link>
                </div>
                <div className={styles.price}> {`${decoItem.price}'`} </div>
                <div>
                  <div>
                    <button onClick={() => updateCartItemCount(1, decoItem.id)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </ul>
    </html>
  );
};

export default Decorations;
