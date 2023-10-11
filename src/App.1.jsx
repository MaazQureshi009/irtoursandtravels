import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

export function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
      {/* <Header/>
            <Welcome/> */}
      <Footer />
      {showButton && <ScrollToTop />}
    </>
  );
}
