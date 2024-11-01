import { useEffect } from "react";
import PGPROJECTSDATA from "../../data/pgProjectsData";
import "./Playground.css";
const Playground = () => {
    useEffect(() => {
        document
            .querySelectorAll(".playground-project")
            .forEach((project, index) => {
                setTimeout(() => {
                    project.style.animation = "revealProject 0.5s forwards";
                }, 100 * index);
            });
        document.title = "Stepan Dordiai | Playground";
    }, []);

    //
    function brightCursor(props) {
        document.querySelector("#custom-cursor").classList.add("active-cursor");
        document.querySelector("#custom-cursor").textContent = props;
    }

    function lowerCursor() {
        document
            .querySelector("#custom-cursor")
            .classList.remove("active-cursor");
        document.querySelector("#custom-cursor").textContent = "";
    }
    //

    function scrollUp() {
        document.querySelector(".playground").scrollTop -= 100;
    }

    function scrollDown() {
        document.querySelector(".playground").scrollTop += 100;
    }

    return (
        <>
            <div className="playground">
                {PGPROJECTSDATA.map(({ id, title, link, info }) => {
                    return (
                        <div className="playground-project" key={id}>
                            <p className="playground-project__number">
                                {"00" + id}
                            </p>
                            <div className="playground-info-container">
                                <p className="playground-project__title">
                                    {title}
                                </p>
                                <a
                                    className="playground-project__link"
                                    href={link}
                                    target="_blank"
                                >
                                    {info} <i className="fa-solid fa-link"></i>
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
            <button
                onMouseEnter={() => brightCursor("Up")}
                onMouseLeave={lowerCursor}
                onClick={scrollUp}
                className="scroll__up-btn"
            >
                <i className="fa-solid fa-arrow-up-long"></i>
            </button>
            <button
                onMouseEnter={() => brightCursor("Down")}
                onMouseLeave={lowerCursor}
                onClick={scrollDown}
                className="scroll__down-btn"
            >
                <i className="fa-solid fa-arrow-down-long"></i>
            </button>
        </>
    );
};

export default Playground;
