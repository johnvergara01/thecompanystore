import moon from "../Assets/Titan.png";
import item from "../Assets/Pro-Flashlight.png";
import upgrade from "../Assets/Teleporter.png";
import decoration from "../Assets/Plushie.png";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const d = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = weekday[d.getDay()];

  return (
    <html>
      <div className={styles.banner}>
        <h1> Welcome to the Company Store. </h1>
        <h1> It is {day} my dude!! </h1>
      </div>

      <div class={styles.row}>

        <div class={styles.column}>
          <Link to="/items" class={styles.link}>
            <div class={styles.card}>
              <img
                class={styles.img}
                src={item}
                alt="flashlight"
              />
              <h3>Items</h3>
            </div>
          </Link>
        </div>

        <div class={styles.column}>
          <Link to="/moons" class={styles.link}>
            <div class={styles.card}>
              <img
                class={styles.img}
                src={moon}
                alt="the moon"
              />
              <h3>Moons</h3>
            </div>
          </Link>
        </div>

        <div class={styles.column}>
          <Link to="/upgrades" class={styles.link}>
            <div class={styles.card}>
              <img
                class={styles.img}
                src={upgrade}
                alt="teleporter"
              />
              <h3>Upgrades</h3>     
            </div>
          </Link>
        </div>

        <div class={styles.column}>
          <Link to="/decorations" class={styles.link}>
            <div class={styles.card}>
              <img
                class={styles.img}
                src={decoration}
                alt="plushie"
              />
              <h3>Decorations</h3> 
            </div>
          </Link>
        </div>

      </div>

{/* 
      {/* <span className={`${styles.backgrounds} ${styles.cell}`}></span>
      <span className={`${styles.backgrounds} ${styles.cell}`}></span>
      <span className={`${styles.backgrounds} ${styles.cell}`}></span>
      <span className={`${styles.backgrounds} ${styles.cell}`}></span>

      <Link to="/moons" className={`${styles.sectionname} ${styles.cell2}`}>
        Moons
      </Link>
      <Link to="/items" className={`${styles.sectionname} ${styles.cell3}`}>
        Items
      </Link>
      <Link to="/upgrades" className={`${styles.sectionname} ${styles.cell4}`}>
        Upgrades
      </Link>
      <Link
        to="/decorations"
        className={`${styles.sectionname} ${styles.cell5}`}
      >
        Decorations
      </Link>

      <Link to="/moons">
        <img
          className={`${styles.images} ${styles.moon}`}
          src={moon}
          alt="the moon"
        />
      </Link>
      <Link to="/items">
        <img
          className={`${styles.images} ${styles.item}`}
          src={item}
          alt="flashlight"
        />
      </Link>
      <Link to="/upgrades">
        <img
          className={`${styles.images} ${styles.upgrade}`}
          src={upgrade}
          alt="teleporter"
        />
      </Link>
      <Link to="/decorations">
        <img
          className={`${styles.images} ${styles.decoration}`}
          src={decoration}
          alt="plushie"
        />
      </Link> */ }
    </html>
  );
};

export default Home;
