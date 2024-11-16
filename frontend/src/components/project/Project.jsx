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
            <p className="project-number">{id}</p>
            <div className="project-right-section">
                {/* <div className="project-title-container"> */}
                <h4 className="project-title">{title}</h4>
                <h5 className="project-title-name">{titleName}</h5>
                {/* </div> */}
                <div className="project-skills">
                    {skills.map((skill, index) => {
                        return <div key={index}>{skill}</div>;
                    })}
                </div>
                <ul className="project-links__list">
                    <li className={extraClass}>
                        <a href={liveDemo} target="_blank">
                            <i className="fa-solid fa-link"></i> Live demo
                        </a>
                    </li>
                    <li>
                        <a href={githubRepo} target="_blank">
                            <i className="fa-brands fa-github"></i> Github Repo
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Project;
