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


// export const PRODUCTS = [
//   {
//     id: "i1",
//     name: "Pro-Flashlight",
//     price: 25,
//     image: proflashlight,
//     desc: "The pro-flashlight, though slightly more expensive and heavier, is a direct upgrade to the Flashlight. It has a wider cone of light, a longer range, and is much brighter. In addition, it has over double the battery capacity.",
//   },
//   {
//     id: "i2",
//     name: "Flashlight",
//     price: 15,
//     image: flashlight,
//     desc: "The Flashlight is a cheap and semi-reliable way to navigate darker areas of the map. While not as strong as the Pro-Flashlight, it can still help with certain rooms being nearly impossible to go through without one.",
//   },
//   {
//     id: "i3",
//     name: "Shovel",
//     price: 30,
//     image: shovel,
//     desc: "It is used to attack most entities and is capable of harming fellow employees. It has the lowest weight out of all the offensive melee weapons, making it a very useful option for self-defense.",
//   },
//   {
//     id: "i4",
//     name: "Walkie Talkie",
//     price: 12,
//     image: walkietalkie,
//     desc: "The walkie-talkie is used to communicate between players over long distances. It can be very useful for information gathering and cross-map communication. It requires power and needs to be switched on to both transmit voice to other players, and receive voice.",
//   },
//   {
//     id: "i5",
//     name: "Spray Paint",
//     price: 50,
//     image: spraypaint,
//     desc: "It can be used just for fun to make art or otherwise mess around with, but it can also be used practically, such as to mark dead ends and the way back to prevent getting lost.",
//   },
//   {
//     id: "i6",
//     name: "Flash Bang",
//     price: 30,
//     image: flashbang,
//     desc: "A non-lethal explosive that will stun most entities for a short while. Once the striker lever is removed, the grenade will detonate after 3 seconds.",
//   },
// ];
