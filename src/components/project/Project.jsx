import "./Project.css";

function Project({ id, title, titleName, skill, skill2, link, gitHubLink }) {
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
            <i className={skill}></i>
            <span>{skill2}</span>
          </div>
          <div className="project-links-container">
            <a href={link} target="_blank">
              Live demo{" "}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <a href={gitHubLink} target="_blank">
              Github code{" "}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
