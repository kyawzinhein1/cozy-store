import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Collective from "./pages/Collective";
import Contact from "./pages/Contact";
import Designer from "./pages/Designer";
import CartPage from "./pages/CartPage";
import PersonalInfo from "./pages/PersonalInfo";
import OrderInformation from "./pages/OrderInformation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/collective",
        element: <Collective />,
      },
      {
        path: "/designer",
        element: <Designer />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/personal-info",
        element: <PersonalInfo />,
      },
      {
        path: "/order-information",
        element: <OrderInformation />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
