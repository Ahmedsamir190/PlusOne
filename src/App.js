import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Loading from "./components/loading-animation/Loading-animation";
import Navbar from "./components/Navbar/Navbar";
import "./main.css";
import LandingOne from "./Pages/Landing-one/Landing-one";
import LandingTwo from "./Pages/landing-two/Landing-Two";
import Info from "./Pages/products/Info";
import Products from "./Pages/products/Products";
import Cart from "./Pages/Cart/Cart";
import About from "./Pages/about/About";

function App() {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 3000);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route
              path={"/"}
              element={
                <>
                  <Carousel /> <LandingOne /> <LandingTwo />
                </>
              }
            />
            <Route path="products" element={<Products />} />
            <Route path="/info/:ProductID" element={<Info />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="About" element={<About />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
