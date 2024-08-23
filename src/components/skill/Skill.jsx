import "./Skill.css";

function Skill() {
  const skillSet = [
    {
      icon: "fa-brands fa-python",
      title: "PYTHON",
      percent: "python-background-range",
    },
    {
      icon: "fa-brands fa-html5",
      title: "HTML",
      percent: "html-background-range",
    },
    {
      icon: "fa-brands fa-css3-alt",
      title: "CSS",
      percent: "css-background-range",
    },
    {
      icon: "fa-brands fa-square-js",
      title: "JAVASCRIPT",
      percent: "js-background-range",
    },
    {
      icon: "fa-brands fa-git-alt",
      title: "GIT",
      percent: "git-background-range",
    },
    {
      icon: "fa-brands fa-github",
      title: "GITHUB",
      percent: "github-background-range",
    },
    {
      icon: "fa-brands fa-sass",
      title: "SASS",
      percent: "sass-background-range",
    },
    {
      icon: "fa-brands fa-figma",
      title: "FIGMA",
      percent: "figma-background-range",
    },
    {
      icon: "fa-brands fa-react",
      title: "REACT",
      percent: "react-background-range",
    },
  ];
  return (
    <>
      {skillSet.map((skill) => {
        return (
          <div className="skill-container">
            <div className="skill-icon-container">
              <i className={skill.icon}></i>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
              <span className="line4"></span>
            </div>
            <div className="skill-info-container">
              <p>{skill.title}</p>
              <div className="skill-range">
                <span className={skill.percent}></span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Skill;
