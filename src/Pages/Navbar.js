import { Outlet, Link } from "react-router-dom";
import logo from "../Assets/companylogo_nobg.png";
import styles from "./Navbar.module.css";

const Layout = () => {
  return (
    <html>

      <div className={styles.header}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="logo"/>
        </Link>
        <div className={styles.headerRight}>
          <Link className={styles.navlink} to="/items"> Items </Link>
          <Link className={styles.navlink} to="/moons"> Moons </Link>
          <Link className={styles.navlink} to="/upgrades"> Upgrades </Link>
          <Link className={styles.navlink} to="/decorations">  Decorations </Link> 
          <Link className={styles.navlink} to="/checkout"> Checkout </Link> 
        </div>
      </div>

      <Outlet/>

    </html>
  );
};

export default Layout;
