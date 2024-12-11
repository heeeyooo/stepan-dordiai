import { useEffect } from "react";
import "./About.css";
import AnimateElements from "../../utils/AnimateElements";
import "./../../global/textLineReveal.css";

function About() {
    useEffect(() => {
        document.title = "Stepan Dordiai | About";
    }, []);

    AnimateElements(".text-line", "revealTextLine 1s forwards");

    return (
        <section className="about-section">
            <div className="text-line-container">
                <div className="text-line">
                    <p>Self-taught Web developer</p>
                </div>
            </div>
            <div className="text-line-container">
                <div className="text-line">
                    <p>with more than 1 year of diverse</p>
                </div>
            </div>
            <div className="text-line-container">
                <div className="text-line">
                    <p>experience in designing and building</p>
                </div>
            </div>
            <div className="text-line-container">
                <div className="text-line">
                    <p>responsive web pages and applications.</p>
                </div>
            </div>
            <div className="text-line-container">
                <div className="text-line">
                    <p>Constantly seeking for</p>
                </div>
            </div>
            <div className="text-line-container">
                <div className="text-line">
                    <p>new challenges and opportunities</p>
                </div>
            </div>
            <div className="text-line-container">
                <div className="text-line">
                    <p>that will expand my skill set</p>
                </div>
            </div>
        </section>
    );
}

export default About;
