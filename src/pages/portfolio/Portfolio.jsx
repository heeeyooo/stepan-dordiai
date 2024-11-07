import { useEffect } from "react";
import Project from "../../components/project/Project";
import PROJECTSDATA from "../../data/projectsData";
import "./Portfolio.css";

function Portfolio() {
    useEffect(() => {
        document.title = "Stepan Dordiai | Portfolio";
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
        document.querySelector(".portfolio-container").scrollTop -= 125;
    }
    function scrollDown() {
        document.querySelector(".portfolio-container").scrollTop += 125;
    }
    return (
        <>
            <div className="portfolio-container">
                {PROJECTSDATA.map((project) => {
                    return (
                        <Project
                            key={project.id}
                            id={"0" + project.id}
                            title={project.title}
                            titleName={project.titleName}
                            skills={project.skills}
                            githubRepo={project.githubRepo}
                            liveDemo={project.liveDemo}
                            extraClass={project.extraClass}
                        />
                    );
                })}
            </div>
            <button
                onMouseEnter={() => brightCursor("Up")}
                onMouseLeave={lowerCursor}
                onMouseDown={scrollUp}
                className="scroll__up-btn"
            >
                <i className="fa-solid fa-arrow-up-long"></i>
            </button>
            <button
                onMouseEnter={() => brightCursor("Down")}
                onMouseLeave={lowerCursor}
                onMouseDown={scrollDown}
                className="scroll__down-btn"
            >
                <i className="fa-solid fa-arrow-down-long"></i>
            </button>
        </>
    );
}

export default Portfolio;
