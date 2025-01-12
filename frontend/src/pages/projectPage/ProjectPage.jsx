import portfolioData from "../../data/portfolioData";
import { useParams, NavLink } from "react-router-dom";
import "./ProjectPage.scss";

const ProjectPage = () => {
    const { id } = useParams();
    const project = portfolioData[id];
    const {
        title,
        titleDesk,
        liveSite,
        githubRepo,
        projectVideo,
        projectImg,
        videoNone,
        imgNone,
        liveSiteNone,
    } = project;
    return (
        <section className="project-page">
            <NavLink className="project-page__back-btn" to="/portfolio">
                Back
            </NavLink>
            <video
                className={`project-page__project-video ${videoNone}`}
                autoPlay={true}
                loop={true}
                playsInline={true}
            >
                <source src={projectVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <img
                className={`project-page__project-img ${imgNone}`}
                src={projectImg}
                alt=""
            />
            <div className="project-page__info">
                <div className="project-page__links">
                    <a
                        className={`project-page__livesite-link ${liveSiteNone}`}
                        href={liveSite}
                        target="_blank"
                    >
                        Live Site{" "}
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                    <a
                        className="project-page__github-link"
                        href={githubRepo}
                        target="_blank"
                    >
                        GitHub Repo <i className="fa-brands fa-github"></i>
                    </a>
                </div>
                <div>
                    <p className="project-page__project-title-name">
                        {titleDesk}
                    </p>
                    <p className="project-page__project-title">{title}</p>
                </div>
            </div>
        </section>
    );
};

export default ProjectPage;
