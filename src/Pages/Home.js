import "./Home.css";
import moon from "../Assets/Titan.png";
import item from "../Assets/Pro-Flashlight.png";
import upgrade from "../Assets/Teleporter.png";
import decoration from "../Assets/Plushie.png";
import { Link } from "react-router-dom";

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
      <div id="banner">
        <h1> Welcome to the Company Store. </h1>
        <h1> It is {day} my dude!! </h1>
      </div>

      <span class="backgrounds cell"></span>
      <span class="backgrounds cell"></span>
      <span class="backgrounds cell"></span>
      <span class="backgrounds cell"></span>

      <Link to="/moons" class="sectionname cell2">
        Moons
      </Link>
      <Link to="/items" class="sectionname cell3">
        Items
      </Link>
      <Link to="/upgrades" class="sectionname cell4">
        Upgrades
      </Link>
      <Link to="/decorations" class="sectionname cell5">
        Decorations
      </Link>

      <img class="images moon" src={moon} alt="the moon" />
      <img class="images item" src={item} alt="flashlight" />
      <img class="images upgrade" src={upgrade} alt="teleporter" />
      <img class="images decoration" src={decoration} alt="plushie" />
    </html>
  );
};

export default Home;
