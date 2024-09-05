import { Outlet, Link } from "react-router-dom";
import logo from "../Assets/companylogo_nobg.png";
import styles from "./Navbar.module.css";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img id="logo" src={logo} alt="logo" />
            </Link>
          </li>
          <li className={styles.navbar}>
            <Link className={styles.navlink} to="/checkout">
              Checkout
            </Link>
          </li>
          <li className={styles.navbar}>
            <Link className={styles.navlink} to="/decorations">
              Decorations
            </Link>
          </li>
          <li className={styles.navbar}>
            <Link className={styles.navlink} to="/upgrades">
              Upgrades
            </Link>
          </li>
          <li className={styles.navbar}>
            <Link className={styles.navlink} to="/items">
              Items
            </Link>
          </li>
          <li className={styles.navbar}>
            <Link className={styles.navlink} to="/moons">
              Moons
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
