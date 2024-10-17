import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./Pages/Context";
import { CatalogContextProvider } from "./Pages/Catalog";
import Layout from "./Pages/Navbar";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import Items from "./Pages/Items";
import Moons from "./Pages/Moons";
import Decorations from "./Pages/Decorations";
import Checkout from "./Pages/Checkout";
import ItemDetails from "./Pages/ItemDetails";
import Upgrades from "./Pages/Upgrades";
import UpgradeDetails from "./Pages/UpgradeDetails";
import MoonDetails from "./Pages/MoonDetails";
import DecorationDetails from "./Pages/DecorationDetails";
import Confirmation from "./Pages/Confirmation";

export default function App() {
  return (
    <ShopContextProvider>
      <CatalogContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="Items" element={<Items />} />
              <Route path="items/:itemId" element={<ItemDetails />} />
              <Route path="Moons" element={<Moons />} />
              <Route path="Moons/:moonId" element={<MoonDetails />} />
              <Route path="Decorations" element={<Decorations />} />
              <Route
                path="Decorations/:decorationId"
                element={<DecorationDetails />}
              />
              <Route path="Upgrades" element={<Upgrades />} />
              <Route path="Upgrades/:upgradeId" element={<UpgradeDetails />} />
              <Route path="Checkout" element={<Checkout />} />
              <Route path="Confirmation" element={<Confirmation />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CatalogContextProvider>
    </ShopContextProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
