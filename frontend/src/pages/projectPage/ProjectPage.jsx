import portfolioData from "../../data/portfolioData";
import { useParams, NavLink } from "react-router-dom";
import "./ProjectPage.scss";

const ProjectPage = () => {
    const { id } = useParams();
    const project = portfolioData[id];
    return (
        <div className="new-page">
            <NavLink className="project-page__close-btn" to="/portfolio">
                <i className="fa-solid fa-xmark"></i>
            </NavLink>
            <img className="frame" src={project.projectImg} alt="" />
            <a
                className="github-link"
                href={project.githubRepo}
                target="_blank"
            >
                GitHub Repo
            </a>
            <a
                className={`livesite-link ${project.extraClass}`}
                href={project.liveDemo}
                target="_blank"
            >
                Live Site
            </a>
        </div>
    );
};

export default ProjectPage;
