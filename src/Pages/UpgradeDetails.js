import { useEffect } from "react";
import { useParams } from "react-router-dom";

const UpgradeDetails = () => {
  const { upgradeId } = useParams();

  useEffect(() => {
    //fetch id
  }, [upgradeId]);

  return <h1>{upgradeId}</h1>;
};

export default UpgradeDetails;
