import AnimateElements from "../../utils/AnimateElements";
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
    AnimateElements(".project-container", "revealProjectContainer 1s forwards");

    return (
        <div className="project-container">
            <div className="project-left-side">
                <p className="project-number">{id}</p>
                <p className="project-production">2024</p>
            </div>
            <div className="project-right-section">
                <h4 className="project-title">{title}</h4>
                <h5 className="project-title-name">{titleName}</h5>
                <div className="project-skills">
                    {skills.map((skill, index) => {
                        return <div key={index}>{skill}</div>;
                    })}
                </div>
                <ul className="project-links__list">
                    <li className={extraClass}>
                        <a href={liveDemo} target="_blank">
                            Live site
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href={githubRepo} target="_blank">
                            GitHub Repo<i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Project;
