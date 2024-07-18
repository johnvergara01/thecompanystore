import { Link } from "react-router-dom";
import { MOONLIST } from "./MoonList";
import styles from "./Moons.module.css";

const Moons = () => {
  return (
    <>
      <div className={styles.banner}>
        <h1>Moons</h1>
      </div>
      <ul>
        {MOONLIST.length > 0 &&
          MOONLIST.map((moonItem) => (
            <div className={styles.card}>
              <Link className={styles.cardlink} to={`/moons/${moonItem.name}`}>
                <img
                  className={styles.moonImg}
                  src={moonItem.image}
                  alt="moon"
                ></img>
              </Link>
              <Link className={styles.cardlink} to={`/moons/${moonItem.name}`}>
                {moonItem.name}
              </Link>
              <p className={styles.price}>{`$${moonItem.price}`}</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </div>
          ))}
      </ul>
    </>
  );
};

export default Moons;
