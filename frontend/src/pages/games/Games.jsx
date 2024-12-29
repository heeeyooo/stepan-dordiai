import { NavLink } from "react-router-dom";
import { isTouchDevice } from "../../utils/isTouchDevice";
import { useEffect } from "react";
import "./Games.css";

const Games = () => {
    useEffect(() => {
        document.title = "Stepan Dordiai | Games";
    }, []);

    // I use useEffect to remove scroll to see the tilt effect on touch devices
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

    useEffect(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }
    }, []);

    function addAnimation() {
        const scrollers = document.querySelectorAll(".scroller");

        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);

            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    }

    function scrollPag1() {
        document.querySelector(".games-section").scrollTop = 0;
    }

    function scrollPag2() {
        document.querySelector(".games-section").scrollTop = 500;
    }

    //FIXME: className as a property?
    function addTiltEffect(event, className) {
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
            <section className="games-section">
                <div
                    className="game-wrapper"
                    onMouseMove={() =>
                        addTiltEffect(event, ".js-game-one-container")
                    }
                    onMouseLeave={() =>
                        removeTiltEffect(".js-game-one-container")
                    }
                    onTouchMove={() =>
                        addTiltEffect(event, ".js-game-one-container")
                    }
                    onTouchEnd={() =>
                        removeTiltEffect(".js-game-one-container")
                    }
                >
                    <div className="game-container js-game-one-container">
                        <div className="game-container__header">
                            <p className="game-container__number">1</p>
                            <div
                                className="scroller"
                                data-speed="fast"
                                data-direction="left"
                            >
                                <div className="scroller__inner">
                                    <p className="game-container__title">
                                        Memory Card Game
                                    </p>
                                </div>
                            </div>
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
                        addTiltEffect(event, ".js-game-two-container")
                    }
                    onMouseLeave={() =>
                        removeTiltEffect(".js-game-two-container")
                    }
                    onTouchMove={() =>
                        addTiltEffect(event, ".js-game-two-container")
                    }
                    onTouchEnd={() =>
                        removeTiltEffect(".js-game-two-container")
                    }
                >
                    <div className="game-container js-game-two-container">
                        <div className="game-container__header">
                            <p className="game-container__number">2</p>
                            <div
                                className="scroller"
                                data-speed="fast"
                                data-direction="left"
                            >
                                <div className="scroller__inner">
                                    <p className="game-container__title">
                                        Space Invaders Game
                                    </p>
                                </div>
                            </div>
                        </div>
                        <NavLink
                            className="game-container__start-btn"
                            to="/invaders-game"
                        >
                            Start
                        </NavLink>
                    </div>
                </div>
            </section>
            <div className="games-section__pagination">
                <span onClick={scrollPag1} className="pag1 active"></span>
                <span onClick={scrollPag2} className="pag2"></span>
            </div>
        </>
    );
};

export default Games;
