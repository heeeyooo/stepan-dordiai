import Project from "../../components/project/Project";
import projectSet from "../../data/projectsData";
import "./Portfolio.css";

function Portfolio() {
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
        document.querySelector(".portfolio-container").scrollTop -= 100;
    }
    function scrollDown() {
        document.querySelector(".portfolio-container").scrollTop += 100;
    }
    return (
        <>
            <div className="portfolio-container">
                {projectSet.map((project) => {
                    return (
                        <Project
                            key={project.id}
                            id={"0" + project.id}
                            title={project.title}
                            titleName={project.titleName}
                            skills={project.skills}
                            link={project.link}
                            gitHubLink={project.gitHubLink}
                        />
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
            <div className="blur-container"></div>
            <div className="bulb-container">
                <div className="bulb"></div>
            </div>
        </>
    );
}

export default Portfolio;
