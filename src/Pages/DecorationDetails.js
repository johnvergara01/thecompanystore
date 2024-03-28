import { useEffect } from "react";
import { useParams } from "react-router-dom";

const DecorationDetails = () => {
  const { decorationId } = useParams();

  useEffect(() => {
    //fetch id
  }, [decorationId]);

  return <h1>{decorationId}</h1>;
};

export default DecorationDetails;
