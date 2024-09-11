import "./Project.css";

function Project({
  id,
  title,
  titleName,
  skill,
  skill2,
  skill3,
  skill4,
  link,
  gitHubLink,
}) {
  function brightCursor() {
    document.querySelector("#custom-cursor").classList.add("active-cursor");
  }

  function lowerCursor() {
    document.querySelector("#custom-cursor").classList.remove("active-cursor");
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
            <i className={skill}></i>
            <span>{skill2}</span>
            <i className={skill3}></i>
            <i className={skill4}></i>
          </div>
          <div className="project-links-container">
            <a
              href={link}
              onMouseEnter={brightCursor}
              onMouseLeave={lowerCursor}
              target="_blank"
            >
              Live demo{" "}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <a
              href={gitHubLink}
              onMouseEnter={brightCursor}
              onMouseLeave={lowerCursor}
              target="_blank"
            >
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
