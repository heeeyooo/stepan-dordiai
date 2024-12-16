import { useEffect } from "react";
import "./Home.css";
import "./../../global/textLineReveal.css";
import AnimateElements from "../../utils/AnimateElements";
import { NavLink } from "react-router-dom";

function Home() {
    useEffect(() => {
        document.title = "Stepan Dordiai | Home";
    }, []);

    AnimateElements(".text-line", "revealTextLine 1s forwards");

    return (
        <section className="home-section">
            <div className="text-line-container">
                <div className="text-line">
                    <div className="home-section__btn-container">
                        <i class="fa-solid fa-arrow-right"></i>
                        <NavLink
                            to="/contact"
                            className="home-section__hire-me"
                        >
                            Hire me
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="text-line-container">
                <div className="text-line">
                    <h2 className="home-section__title">Front-end developer</h2>
                </div>
            </div>
            <div className="text-line-container">
                <div className="text-line">
                    <h1 className="home-section__title-name">STEPAN DORDIAI</h1>
                </div>
            </div>
        </section>
    );
}

export default Home;
