import "./Project.css";

function Project() {
  const DATA = [
    {
      id: 1,
      link: "https://yagodakarpat.netlify.app/",
      gitHubLink: "#",
      title: "yagodakarpat",
      titleName: "Business website",
      // skills: [
      //   <i className="fa-brands fa-html5"></i>,
      //   <i className="fa-brands fa-css3-alt"></i>,
      //   <i className="fa-brands fa-square-js"></i>,
      // ],
      number: "01",
    },
    {
      id: 2,
      link: "https://heeeyooo-gray.netlify.app/",
      gitHubLink: "#",
      title: "gray",
      titleName: "Portfolio website",
      // skills: [
      //   <i className="fa-brands fa-html5"></i>,
      //   <i className="fa-brands fa-css3-alt"></i>,
      //   <i className="fa-brands fa-square-js"></i>,
      //   <i className="fa-brands fa-sass"></i>,
      // ],
      number: "02",
    },
    {
      id: 3,
      link: "https://heeeyooo-cloud.netlify.app/",
      gitHubLink: "#",
      title: "cloud",
      titleName: "Weather website",
      // skills: [
      //   <i className="fa-brands fa-html5"></i>,
      //   <i className="fa-brands fa-css3-alt"></i>,
      //   <i className="fa-brands fa-square-js"></i>,
      // ],
      number: "03",
    },
    {
      id: 4,
      link: "https://heeeyooo-fate.netlify.app/",
      gitHubLink: "#",
      title: "fate",
      titleName: "Landing website",
      // skills: [
      //   <i className="fa-brands fa-html5"></i>,
      //   <i className="fa-brands fa-css3-alt"></i>,
      //   <i className="fa-brands fa-square-js"></i>,
      // ],
      number: "04",
    },
    {
      id: 5,
      link: "https://heeeyooo-tiermaker.netlify.app/",
      gitHubLink: "#",
      title: "tiermaker",
      titleName: "Landing website",
      // skills: [
      //   <i className="fa-brands fa-html5"></i>,
      //   <i className="fa-brands fa-css3-alt"></i>,
      //   <i className="fa-brands fa-square-js"></i>,
      // ],
      number: "05",
    },
  ];

  return (
    <>
      {DATA.map((el) => {
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
                    Live demo &#129125;
                  </a>
                  <a href={el.gitHubLink} target="_blank">
                    Github code &#129125;
                  </a>
                </div>
              </div>

              {/* <div className="project-skills">{el.skills}</div> */}
            </div>
            <hr />
          </>
        );
      })}
    </>
  );
}

export default Project;
