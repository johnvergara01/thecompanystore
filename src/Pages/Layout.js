import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import logo from "../Assets/companylogo_nobg.png";

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
          <li class="navbar">
            <Link class="navlink" to="/checkout">Checkout</Link>
          </li>
          <li class="navbar">
            <Link class="navlink" to="/decorations">Decorations</Link>
          </li>
          <li class="navbar">
            <Link class="navlink" to="/upgrades">Upgrades</Link>
          </li>
          <li class="navbar">
            <Link class="navlink" to="/items">Items</Link>
          </li>
          <li class="navbar">
            <Link class="navlink" to="/moons">Moons</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
