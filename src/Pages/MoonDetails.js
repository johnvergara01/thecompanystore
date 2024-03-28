import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MoonDetails = () => {
  const { moonId } = useParams();

  useEffect(() => {
    //fetch id
  }, [moonId]);

  return <h1>{moonId}</h1>;
};

export default MoonDetails;
