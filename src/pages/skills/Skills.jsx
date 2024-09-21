import Skill from "../../components/skill/Skill";
import SKILLSDATA from "./../../data/skillsData";
import "./Skills.css";

function Skills() {
    return (
        <>
            <div className="skills-container">
                {SKILLSDATA.map((skill) => {
                    return (
                        <Skill key={skill.id} icon={skill.icon} id={skill.id} />
                    );
                })}
            </div>
            {/*  */}
            <div className="blur-container"></div>
            <div className="bulb-container">
                <div className="bulb"></div>
            </div>
            {/*  */}
        </>
    );
}

export default Skills;
