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
import Game from "./pages/game/Game";
import "./App.css";
import CustomCursor from "./components/customCursor/CustomCursor";
import CustomCorners from "./components/customCorners/CustomCorners";

function App() {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".wrapper").style.display = "initial";
        }, 3000);
    }, []);

    return (
        <>
            <Router>
                <Loading />
                <div className="wrapper">
                    <CustomCursor />
                    <CustomCorners />
                    <header className="header"></header>
                    <Nav />
                    <DarkMode />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/playground" element={<Playground />} />
                        <Route path="/game" element={<Game />} />
                    </Routes>
                    <Footer />
                    {/*  */}
                    {/* <div className="bulb-container">
                        <div className="bulb"></div>
                    </div> */}
                    {/*  */}
                </div>
            </Router>
        </>
    );
}

export default App;
