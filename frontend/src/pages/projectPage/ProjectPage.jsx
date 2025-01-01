import portfolioData from "../../data/portfolioData";
import { useParams, NavLink } from "react-router-dom";
import "./ProjectPage.scss";

const ProjectPage = () => {
    const { id } = useParams();
    const project = portfolioData[id];
    const { projectImg, githubRepo, liveDemo, extraClass } = project;
    return (
        <section className="project-page">
            <NavLink className="project-page__close-btn" to="/portfolio">
                <i className="fa-solid fa-xmark"></i>
            </NavLink>
            <img className="frame" src={projectImg} alt="" />
            <a className="github-link" href={githubRepo} target="_blank">
                GitHub Repo
            </a>
            <a
                className={`livesite-link ${extraClass}`}
                href={liveDemo}
                target="_blank"
            >
                Live Site
            </a>
        </section>
    );
};

export default ProjectPage;
