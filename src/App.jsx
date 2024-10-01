import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/loading/Loading";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Playground from "./pages/playground/Playground";
import Nav from "./components/nav/Nav";
import DarkMode from "./components/darkMode/DarkMode";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".main").style.display = "initial";
        }, 3000);
    }, []);

    // function will return true if touch device and false if mouse device
    const isTouchDevice = () => {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    };

    // i use useeffect to handle the condition once when load page
    useEffect(() => {
        if (!isTouchDevice()) {
            document.querySelector("#custom-cursor").style.display = "flex";
            document.querySelector("#circle").style.display = "flex";
        } else {
            document.querySelector("#custom-cursor").style.display = "none";
            document.querySelector("#circle").style.display = "none";
        }
    }, []);

    addEventListener("mouseover", () => {
        if (!isTouchDevice()) {
            document.querySelector("#custom-cursor").style.display = "flex";
            document.querySelector("#circle").style.display = "flex";
        } else {
            document.querySelector("#custom-cursor").style.display = "none";
            document.querySelector("#circle").style.display = "none";
        }
    });

    addEventListener("mouseout", () => {
        if (!isTouchDevice()) {
            document.querySelector("#custom-cursor").style.display = "none";
            document.querySelector("#circle").style.display = "none";
        } else {
            document.querySelector("#custom-cursor").style.display = "none";
            document.querySelector("#circle").style.display = "none";
        }
    });

    // position for custom cursor
    addEventListener("mousemove", (event) => {
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        document.querySelector("#custom-cursor").style.left = mouseX + "px";
        document.querySelector("#custom-cursor").style.top = mouseY + "px";
        document.querySelector("#circle").style.left = mouseX + "px";
        document.querySelector("#circle").style.top = mouseY + "px";
    });

    return (
        <>
            <Loading />
            <div id="circle"></div>
            <div id="custom-cursor"></div>
            <main className="main">
                <Router>
                    <div className="cube-top-left"></div>
                    <div className="cube-top-right"></div>
                    <div className="cube-bottom-right"></div>
                    <div className="cube-bottom-left"></div>
                    <Nav />
                    <DarkMode />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/playground" element={<Playground />} />
                    </Routes>
                    <Footer />
                    <div className="bulb-container">
                        <div className="bulb"></div>
                    </div>
                </Router>
            </main>
        </>
    );
}

export default App;
