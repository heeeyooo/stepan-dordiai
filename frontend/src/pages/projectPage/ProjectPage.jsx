import portfolioData from "../../data/portfolioData";
import { useParams, NavLink } from "react-router-dom";
import "./ProjectPage.scss";

const ProjectPage = () => {
    const { id } = useParams();
    const project = portfolioData[id];
    const {
        title,
        titleDesc,
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
            <div className="project-page__details">
                <div className="project-page__links">
                    {liveSite && (
                        <a href={liveSite} target="_blank">
                            Live Site{" "}
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    )}

                    <a href={githubRepo} target="_blank">
                        GitHub Repo <i className="fa-brands fa-github"></i>
                    </a>
                </div>
                <div>
                    <p className="project-page__title-desc">{titleDesc}</p>
                    <p className="project-page__title">{title}</p>
                </div>
            </div>
            {/* If there is a video tag, the img tag will not be displayed and vice versa */}
            <video
                className={`project-page__video ${videoNone}`}
                autoPlay={true}
                loop={true}
                playsInline={true}
                muted={true}
            >
                <source src={projectVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* <img
                className={`project-page__img ${imgNone}`}
                src={projectImg}
                alt={title}
                loading="lazy"
            /> */}
        </section>
    );
};

export default ProjectPage;
