import { useEffect } from "react";
import "./Home.css";
import "./../../global/textLineReveal.css";
import AnimateElements from "../../utils/AnimateElements";
import { NavLink } from "react-router-dom";

function Home() {
    useEffect(() => {
        document.title = "Stepan Dordiai | Home";
    }, []);

    AnimateElements(".text-line", "revealTextLine 1s forwards", 20);

    return (
        <section className="home-section">
            <div>
                {"Front-end developer".split(` `).map((word, index) => {
                    return (
                        <div key={index} className="text-line-container">
                            <div className="text-line">
                                <h2
                                    style={{
                                        marginLeft: "5px",
                                    }}
                                    className="home-section__title"
                                >
                                    {word}
                                </h2>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div>
                {"STEPAN DORDIAI".split(` `).map((word, index) => {
                    return (
                        <div key={index} className="text-line-container">
                            <div className="text-line">
                                <h1
                                    style={{ marginLeft: "10px" }}
                                    className="home-section__title-name"
                                >
                                    {word}
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Home;
