import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/loading/Loading";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Nav from "./components/nav/Nav";
import DarkMode from "./components/darkMode/DarkMode";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".main").style.display = "initial";
    }, 4000);
  }, []);

  addEventListener("mousemove", (event) => {
    let x1 = event.clientX;
    let y1 = event.clientY;
    document.querySelector("#custom-cursor").style.left = x1 + "px";
    document.querySelector("#custom-cursor").style.top = y1 + "px";
    document.querySelector("#circle").style.left = x1 + "px";
    document.querySelector("#circle").style.top = y1 + "px";
  });

  return (
    <>
      <Loading />
      <div id="circle"></div>
      <div id="custom-cursor"></div>
      <div className="cube-top-left"></div>
      <div className="cube-top-right"></div>
      <div className="cube-bottom-right"></div>
      <div className="cube-bottom-left"></div>
      <main className="main">
        <div className="shadow-top"></div>
        <div className="shadow-bottom"></div>
        <Router>
          <Nav />
          <DarkMode />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </main>
      <div className="blur-container"></div>
      <div className="bulb-container">
        <div className="bulb"></div>
      </div>
    </>
  );
}

export default App;
