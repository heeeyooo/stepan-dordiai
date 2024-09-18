import Skill from "../../components/skill/Skill";
import skillSet from "./../../data/skillsData";
import "./Skills.css";

function Skills() {
  return (
    <>
      <div className="skills-container">
        {skillSet.map((skill, index) => {
          return (
            <Skill
              // BETTER TO USE UNIQUE KEY
              key={index}
              icon={skill.icon}
              title={skill.title}
              percent={skill.percent}
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

export default Skills;
