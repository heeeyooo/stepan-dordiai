import Project from "../../components/project/Project";
import projectSet from "../../data/projectsData";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-container">
      {projectSet.map((project, index) => {
        return (
          <Project
            // BETTER TO USE UNIQUE KEY
            key={index}
            number={"0" + (index + 1)}
            title={project.title}
            titleName={project.titleName}
            link={project.link}
            gitHubLink={project.gitHubLink}
          />
        );
      })}
    </div>
  );
}

export default Portfolio;
