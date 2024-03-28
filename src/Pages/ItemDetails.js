import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const { itemId } = useParams();

  useEffect(() => {
    //fetch itemId
  }, [itemId]);

  return <h1>{itemId}</h1>;
};

export default ItemDetails;
