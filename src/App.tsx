import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
};

export default App;
