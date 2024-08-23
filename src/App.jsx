import Loading from "./components/loading/Loading";
import Home from "./pages/home/Home";
import Skills from "./pages/skills/Skills";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import "./App.css";
import "./variables.css";
import Nav from "./components/nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DarkMode from "./components/darkMode/DarkMode";
import About from "./pages/about/About";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".main").style.display = "initial";
    }, 3500);
  });

  return (
    <>
      <BrowserRouter>
        <Loading />
        {/* SHADOW */}
        <div className="shadow-top"></div>
        <div className="shadow-right"></div>
        <div className="shadow-bottom"></div>
        <div className="shadow-left"></div>
        {/* CORNERS */}
        <div className="cube-top-left"></div>
        <div className="cube-top-right"></div>
        <div className="cube-bottom-right"></div>
        <div className="cube-bottom-left"></div>
        <main className="main">
          {/* LEFT SIDE */}
          <Nav />
          {/* RIGHT SIDE */}
          <DarkMode />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {/* BOTTOM SIDE */}
          <Footer />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
