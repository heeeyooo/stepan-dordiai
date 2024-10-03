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
import CustomCursor from "./components/customCursor/CustomCursor";

function App() {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".main").style.display = "initial";
        }, 3000);
    }, []);

    return (
        <>
            <Router>
                <Loading />
                <CustomCursor />
                <main className="main">
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
                </main>
            </Router>
        </>
    );
}

export default App;
