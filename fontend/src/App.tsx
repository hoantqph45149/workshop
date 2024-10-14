import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClientLayout from "./components/Layouts/Client-Layout";
import HomePage from "./pages/client/Home";
import ShopPage from "./pages/client/Shop";
import ShopSinglePage from "./pages/client/ShopSingle";
import CartPage from "./pages/client/Cart";
import ContactPage from "./pages/client/Contact";
import AboutPage from "./pages/client/About";
import NotFound from "./pages/client/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shopsingle" element={<ShopSinglePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
