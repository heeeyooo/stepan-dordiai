import { useEffect } from "react";
import "./Home.css";
import AnimateElements from "../../utils/AnimateElements";

function Home() {
    useEffect(() => {
        document.title = "Stepan Dordiai | Home";
    }, []);

    AnimateElements(".text-line-container div", "revealTextLine 1s forwards");

    return (
        <div className="home-container">
            <div className="text-line-container">
                <div>
                    <h2 className="home-container__title">
                        Front-end developer
                    </h2>
                </div>
            </div>
            <div className="text-line-container">
                <div>
                    <h1 className="home-container__title-name">
                        STEPAN DORDIAI
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Home;
