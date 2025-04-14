import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="pt-16">
        <Toaster position="top-center" />
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
};

export default App;
