import "./ProjectPage.css";
import portfolioData from "../../data/portfolioData";
import { useParams, NavLink } from "react-router-dom";

const ProjectPage = () => {
    const { id } = useParams();
    const project = portfolioData[id];

    console.log(project);
    return (
        <div className="new-page">
            <NavLink className="close-btn" to="/portfolio">
                Back
            </NavLink>
            <img className="frame" src={project.projectImg} alt="" />
            <a className="github-link" href={project.githubRepo}>
                GitHub Repo
            </a>
            <a
                className={`livesite-link ${project.extraClass}`}
                href={project.liveDemo}
            >
                Live Site
            </a>
        </div>
    );
};

export default ProjectPage;
