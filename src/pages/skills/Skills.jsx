import Skill from "../../components/skill/Skill";
import { skillSet } from "./../../data/skillsData";
import "./Skills.css";

function Skills() {
  return (
    <>
      <p className="skills-section">{"<Skills />"}</p>
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
    </>
  );
}

export default Skills;
