import "./Project.css";

function Project({ id, title, titleName, skills, link, gitHubLink }) {
    function brightCursor() {
        document.querySelector("#custom-cursor").classList.add("active-cursor");
        document.querySelector("#custom-cursor").textContent = `Link`;
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
                        <h5 className="project-title-name">{titleName}</h5>
                        <h4 className="project-title">{title}</h4>
                    </div>
                    <div className="project-skills">
                        {skills.map((item, index) => {
                            return <span key={index}>{item}</span>;
                        })}
                    </div>
                    <div className="project-links-container">
                        <a
                            href={link}
                            onMouseEnter={brightCursor}
                            onMouseLeave={lowerCursor}
                            target="_blank"
                        >
                            Live demo{" "}
                            <span className="material-symbols-outlined project-arrow">
                                arrow_outward
                            </span>
                        </a>
                        <a
                            href={gitHubLink}
                            onMouseEnter={brightCursor}
                            onMouseLeave={lowerCursor}
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
