import "./Project.css";

function Project() {
  const projectSet = [
    {
      id: 1,
      link: "https://stepandordiai.netlify.app/",
      gitHubLink: "https://github.com/heeeyooo/stepan-dordiai",
      title: "Stepan Dordiai",
      titleName: "Portfolio website",
      number: "01",
    },
    {
      id: 2,
      link: "#",
      gitHubLink: "#",
      title: "yagodakarpat",
      titleName: "Business website",
      number: "02",
    },
    {
      id: 3,
      link: "#",
      gitHubLink: "#",
      title: "cloud",
      titleName: "Weather website",
      number: "03",
    },
  ];

  return (
    <>
      {projectSet.map((el) => {
        return (
          <>
            <div className="project-container" key={el.id}>
              <p className="project-number">{el.number}</p>
              <div className="project-info-container">
                <div className="project-title-container">
                  <h5 className="project-title-name">{el.titleName}</h5>
                  <h4 className="project-title">{el.title}</h4>
                </div>
                <div className="project-links-container">
                  <a href={el.link} target="_blank">
                    Live demo{" "}
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  <a href={el.gitHubLink} target="_blank">
                    Github code{" "}
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>
            <hr />
          </>
        );
      })}
    </>
  );
}

export default Project;
