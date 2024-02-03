import "./App.css";
import Header from "./Components/Header/Header";
import LandingPage from "./Components/LandingPage/LandingPage";
import Cart from "./Components/Cart/Cart";
import Order from "./Components/Order/Order";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <LandingPage />
              <Order />
              <Footer />
            </div>
          }
        />
        <Route
          path="/cart"
          element={
            <div>
              <Cart />
              <Footer />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
