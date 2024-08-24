import "./Project.css";

function Project({ title, link, gitHubLink, titleName, number }) {
  return (
    <>
      <div className="project-container">
        <p className="project-number">{number}</p>
        <div className="project-info-container">
          <div className="project-title-container">
            <h5 className="project-title-name">{titleName}</h5>
            <h4 className="project-title">{title}</h4>
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
      <hr />
    </>
  );
}

export default Project;
