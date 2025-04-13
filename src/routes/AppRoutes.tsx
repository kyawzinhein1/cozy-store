import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import CartPage from "../pages/CartPage";
import NotFound from "../pages/NotFound";
import PersonalInfo from "../pages/PersonalInfo";
import OrderInformation from "../pages/OrderInformation";
import Shop from "../pages/Shop";
import Collective from "../pages/Collective";
import Designer from "../pages/Designer";
import About from "../pages/About";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/personal-info" element={<PersonalInfo />} />
      <Route path="/order-information" element={<OrderInformation />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/collective" element={<Collective />} />
      <Route path="/designer" element={<Designer />} />
      <Route path="about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
