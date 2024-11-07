import "./Project.css";

function Project({
    id,
    title,
    titleName,
    skills,
    githubRepo,
    liveDemo,
    extraClass,
}) {
    function brightCursor(text) {
        document
            .querySelector("#custom-cursor")
            .classList.add("cursor--active");
        document.querySelector("#custom-cursor").textContent = text;
    }

    function lowerCursor() {
        document
            .querySelector("#custom-cursor")
            .classList.remove("cursor--active");
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
                    <ul className="project-links__list">
                        <li className={extraClass}>
                            <a
                                onMouseEnter={() => brightCursor("Live")}
                                onMouseLeave={lowerCursor}
                                href={liveDemo}
                                target="_blank"
                            >
                                <i className="fa-solid fa-link"></i> Live demo
                            </a>
                        </li>
                        <li>
                            <a
                                onMouseEnter={() => brightCursor("Github")}
                                onMouseLeave={lowerCursor}
                                href={githubRepo}
                                target="_blank"
                            >
                                <i className="fa-brands fa-github"></i> Github
                                Repo
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Project;
