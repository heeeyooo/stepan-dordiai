import Project from "../../components/project/Project";
import projectSet from "../../data/projectsData";
import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <div className="portfolio-container">
        {projectSet.map((project) => {
          return (
            <Project
              key={project.id}
              id={"0" + project.id}
              title={project.title}
              titleName={project.titleName}
              skills={project.skills}
              // skill2={project.skill2}
              // skill3={project.skill3}
              // skill4={project.skill4}
              link={project.link}
              gitHubLink={project.gitHubLink}
            />
          );
        })}
      </div>
      <div className="blur-container"></div>
      <div className="bulb-container">
        <div className="bulb"></div>
      </div>
    </>
  );
}

export default Portfolio;
