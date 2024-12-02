import { useEffect } from "react";
import "./About.css";
import AnimateElements from "../../utils/AnimateElements";

function About() {
    useEffect(() => {
        document.title = "Stepan Dordiai | About";
    }, []);

    AnimateElements(".text-line-container span", "revealTextLine 1s forwards");

    return (
        <div className="about">
            <div className="text-line-container">
                <span>Self-taught Web developer</span>
            </div>
            <div className="text-line-container">
                <span>with more than 1 year of diverse experience</span>
            </div>
            <div className="text-line-container">
                <span>in designing and building</span>
            </div>
            <div className="text-line-container">
                <span>responsive web pages and applications.</span>
            </div>
            <div className="text-line-container">
                <span>Constantly seeking for</span>
            </div>
            <div className="text-line-container">
                <span>new challenges and opportunities</span>
            </div>
            <div className="text-line-container">
                <span>that will expand my skill set</span>
            </div>
        </div>
    );
}

export default About;
