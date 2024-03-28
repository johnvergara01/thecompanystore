import { Link } from "react-router-dom";

const Items = () => {
  return (
    <>
      <h1>Items</h1>
      <div>
        <Link to="/items/flashlight">Flashlight</Link>
      </div>
    </>
  );
};

export default Items;