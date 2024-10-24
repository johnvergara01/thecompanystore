import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db, storage } from "../Config";
import { createContext, useEffect, useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { getBlob, ref } from "firebase/storage";

export const CatalogContext = createContext(null);

const itemType = ["Products", "Moons", "Upgrades", "Decorations"];

const loadingErrorToast = (err) => {
  const msg = "Error loading products " + err.message;
  toast.error(msg, {
    position: "bottom-right",
    autoClose: 5000,
    closeOnClick: true,
    theme: "dark",
    transition: Bounce,
  });
};

export const CatalogContextProvider = (props) => {
  const [PRODUCTS, setProducts] = useState([]);
  const [MOONS, setMoons] = useState([]);
  const [UPGRADES, setUpgrades] = useState([]);
  const [DECORATIONS, setDecorations] = useState([]);

  const [productStatus, setProductStatus] = useState(false);
  const [moonStatus, setMoonStatus] = useState(false);
  const [upgradeStatus, setUpgradeStatus] = useState(false);
  const [decorationStatus, setDecorationStatus] = useState(false);

  const loadCatalog = async () => {
    for (let h = 0; h < itemType.length; h++) {
      try {
        const snapshot = await getDocs(collection(db, itemType[h]));
        const temp = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });

        for (let i = 0; i < temp.length; i++) {
          const storageRef = ref(storage, "/" + temp[i].image);
          const blob = await getBlob(storageRef);
          const url = URL.createObjectURL(blob);
          temp[i].imageSrc = url;
        }
        console.log("Character:" , itemType[h].charAt(0));
        switch (itemType[h].charAt(0)) {
          case "P":
            setProducts(temp);
            setProductStatus(true);
            break;
          case "M":
            setMoons(temp);
            setMoonStatus(true);
            break;
          case "U":
            setUpgrades(temp);
            setUpgradeStatus(true);
            break;
          case "D":
            setDecorations(temp);
            setDecorationStatus(true);
            break;
          default:
            console.log("Error");
        }
      } 
      catch (err) {
        switch (itemType[h].charAt(0)) {
          case "P":
            console.log(err.message);
            setProductStatus(false);
            break;
          case "M":
            console.log(err.message);
            setMoonStatus(false);
            break;
          case "U":
            console.log(err.message);
            setUpgradeStatus(false);
            break;
          case "D":
            console.log(err.message);
            setDecorationStatus(false);
            break;
          default:
            console.log("Error");
        }
      }
    }
  };

  useEffect(() => {
    loadCatalog();
  }, []);

  const catalogContextValue = {
    PRODUCTS,
    MOONS,
    UPGRADES,
    DECORATIONS,
    productStatus,
    moonStatus,
    upgradeStatus,
    decorationStatus
  };

  return (
    <>
      <CatalogContext.Provider value={catalogContextValue}>
        {props.children}
        <ToastContainer />
      </CatalogContext.Provider>
    </>
  );
};