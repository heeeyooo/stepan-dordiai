import { useEffect } from "react";
import AnimateElements from "../../utils/AnimateElements";
import "./../../global/textLineReveal.scss";
import "./About.scss";

function About() {
    useEffect(() => {
        document.title = "Stepan Dordiai | About";
    }, []);

    AnimateElements(".text-line", "revealTextLine 1s forwards", 50);

    return (
        <section className="about">
            {`Self-taught Web developer with more than 2 years of diverse experience in designing and building responsive web pages and applications. Constantly seeking for new challenges and opportunities that will expand my skill set`
                .split(` `)
                .map((word, index) => {
                    return (
                        <div key={index} className="text-line-container">
                            <div className="text-line">
                                <p style={{ marginLeft: "5px" }}>{word}</p>
                            </div>
                        </div>
                    );
                })}
        </section>
    );
}

export default About;
