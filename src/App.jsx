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
import Games from "./pages/games/Games";
import CustomCursor from "./components/customCursor/CustomCursor";
import CustomCorners from "./components/customCorners/CustomCorners";
import MemoryCardGame from "./pages/MemoryCardGame/MemoryCardGame";
import "./App.css";
import CubeBackground from "./components/cubeBackground/CubeBackground";

function App() {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".wrapper").style.display = "initial";
        }, 1500);
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
                        <Route path="/games" element={<Games />} />
                        <Route
                            path="/memory-card-game"
                            element={<MemoryCardGame />}
                        />
                    </Routes>
                    <Footer />
                    <CubeBackground />
                </div>
            </Router>
        </>
    );
}

export default App;
