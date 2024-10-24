import { NavLink } from "react-router-dom";
import { isTouchDevice } from "../../utils/isTouchDevice";
import { useEffect } from "react";
import "./Games.css";

const Games = () => {
    // i use useeffect to handle the condition once when load page
    useEffect(() => {
        if (!isTouchDevice()) {
            document.querySelector(".games-section").style.overflowY = "scroll";
        } else {
            document.querySelector(".games-section").style.overflowY = "hidden";
        }
    }, []);

    useEffect(() => {
        document
            .querySelector(".games-section")
            .addEventListener("scroll", () => {
                if (document.querySelector(".games-section").scrollTop >= 100) {
                    document.querySelector(".pag1").classList.remove("active");
                    document.querySelector(".pag2").classList.add("active");
                } else {
                    document.querySelector(".pag1").classList.add("active");
                    document.querySelector(".pag2").classList.remove("active");
                }
            });
    }, []);

    function scrollPag1() {
        document.querySelector(".games-section").scrollTop = 0;
    }
    function scrollPag2() {
        document.querySelector(".games-section").scrollTop = 500;
    }

    function tiltEffect(event, className) {
        const rect = document.querySelector(className).getBoundingClientRect();

        const offsetX =
            (!isTouchDevice() ? event.clientX : event.touches[0].pageX) -
            rect.left -
            rect.width / 2;
        const offsetY =
            (!isTouchDevice() ? event.clientY : event.touches[0].pageY) -
            rect.top -
            rect.height / 2;

        const DEG = 15;

        const tiltX = (offsetY / rect.height) * -DEG;
        const tiltY = (offsetX / rect.width) * DEG;

        document
            .querySelector(className)
            .style.setProperty("--tiltX", `${tiltX}deg`);
        document
            .querySelector(className)
            .style.setProperty("--tiltY", `${tiltY}deg`);
    }

    function removeTiltEffect(className) {
        document.querySelector(className).style.setProperty("--tiltX", `0deg`);
        document.querySelector(className).style.setProperty("--tiltY", `0deg`);
    }

    return (
        <>
            <div className="games-section">
                <div className="games-section__pagination">
                    <span onClick={scrollPag1} className="pag1 active"></span>
                    <span onClick={scrollPag2} className="pag2"></span>
                </div>
                {/* I use className as a property */}
                <div
                    className="game-wrapper"
                    onMouseMove={() =>
                        tiltEffect(event, ".js-game-one-container")
                    }
                    onMouseLeave={() =>
                        removeTiltEffect(".js-game-one-container")
                    }
                    onTouchMove={() =>
                        tiltEffect(event, ".js-game-one-container")
                    }
                    onTouchEnd={() =>
                        removeTiltEffect(".js-game-one-container")
                    }
                >
                    <div className="game-container js-game-one-container">
                        <div className="game-container__header">
                            <div className="game-container__number">
                                <span>1</span>
                            </div>
                            <p className="game-container__title">
                                Memory Card Game
                            </p>
                        </div>
                        <NavLink
                            className="game-container__start-btn"
                            to="/memory-card-game"
                        >
                            Start
                        </NavLink>
                    </div>
                </div>
                <div
                    className="game-wrapper"
                    onMouseMove={() =>
                        tiltEffect(event, ".js-game-two-container")
                    }
                    onMouseLeave={() =>
                        removeTiltEffect(".js-game-two-container")
                    }
                    onTouchMove={() =>
                        tiltEffect(event, ".js-game-two-container")
                    }
                    onTouchEnd={() =>
                        removeTiltEffect(".js-game-two-container")
                    }
                >
                    <div className="game-container js-game-two-container">
                        <div className="game-container__header">
                            <div className="game-container__number">
                                <span>2</span>
                            </div>
                            <p className="game-container__title">
                                Comming soon...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Games;
