import "./Project.css";

function Project({
    id,
    title,
    titleName,
    skills,
    githubLink,
    liveDemo,
    extraClass,
}) {
    function brightCursor(text) {
        document.querySelector("#custom-cursor").classList.add("active-cursor");
        document.querySelector("#custom-cursor").textContent = text;
    }

    function lowerCursor() {
        document
            .querySelector("#custom-cursor")
            .classList.remove("active-cursor");
        document.querySelector("#custom-cursor").textContent = ``;
    }

    return (
        <>
            <div className="project-container">
                <p className="project-number">{id}</p>
                <div className="project-info-container">
                    <div className="project-title-container">
                        <h5 className="project-title">{titleName}</h5>
                        <h4 className="project-title-name">{title}</h4>
                    </div>
                    <div className="project-skills">
                        {skills.map((skill, index) => {
                            return <div key={index}>{skill}</div>;
                        })}
                    </div>
                    <div className="project-links">
                        <a
                            onMouseEnter={() => brightCursor("Live")}
                            onMouseLeave={lowerCursor}
                            className={extraClass}
                            href={liveDemo}
                            target="_blank"
                        >
                            Live demo{" "}
                            <span className="material-symbols-outlined project-arrow">
                                arrow_outward
                            </span>
                        </a>
                        <a
                            onMouseEnter={() => brightCursor("Github")}
                            onMouseLeave={lowerCursor}
                            href={githubLink}
                            target="_blank"
                        >
                            Github code{" "}
                            <span className="material-symbols-outlined project-arrow">
                                arrow_outward
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;
