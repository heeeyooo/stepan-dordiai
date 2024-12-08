import { useEffect } from "react";
import "./Home.css";
import "./../../global/textLineReveal.css";
import AnimateElements from "../../utils/AnimateElements";

function Home() {
    useEffect(() => {
        document.title = "Stepan Dordiai | Home";
    }, []);

    AnimateElements(".text-line", "revealTextLine 1s forwards");

    return (
        <div className="home-container">
            <div className="text-line-container">
                <div className="text-line">
                    <h2 className="home-container__title">
                        Front-end developer
                    </h2>
                </div>
            </div>
            <div className="text-line-container">
                <div className="text-line">
                    <h1 className="home-container__title-name">
                        STEPAN DORDIAI
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Home;
