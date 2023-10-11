import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact';
import Services from './components/Services';
import ScrollTop from './components/ScrollToTop/ScrollTop';

function App() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<><Header/></>} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    {/* <Header/>
    <Welcome/> */}
    <Footer/>
    { showButton && <ScrollTop/>}
    </BrowserRouter>
    </>
  )
}

export default App
