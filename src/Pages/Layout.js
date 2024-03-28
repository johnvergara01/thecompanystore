import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import logo from "../Assets/companylogo_nobg.png";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li class="navbar">
            <Link to="/">
              <img id="logo" src={logo} alt="logo" />
            </Link>
          </li>
          <li class="navbar">
            <Link to="/items">Items</Link>
          </li>
          <li class="navbar">
            <Link to="/moons">Moons</Link>
          </li>
          <li class="navbar">
            <Link to="/decorations">Decorations</Link>
          </li>
          <li class="navbar">
            <Link to="/upgrades">Upgrades</Link>
          </li>
          <li class="navbar">
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
