import SKILLSDATA from "./../../data/skillsData";
import Skill from "../../components/skill/Skill";
import { useEffect } from "react";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";
import "./Skills.css";

function Skills() {
    useEffect(() => {
        document.title = "Stepan Dordiai | Skills";
    }, []);

    return (
        <>
            <div className="skills-container js-skills-container">
                <p className="skills-container__title">FRONTEND</p>
                <div className="skills">
                    {SKILLSDATA.filter((skill) => {
                        return skill.info === "frontend";
                    }).map((skill) => {
                        return (
                            <Skill
                                key={skill.id}
                                icon={skill.icon}
                                name={skill.name}
                            />
                        );
                    })}
                </div>
                <p className="skills-container__title">BACKEND</p>
                <div className="skills">
                    {SKILLSDATA.filter((skill) => {
                        return skill.info === "backend";
                    }).map((skill) => {
                        return (
                            <Skill
                                key={skill.id}
                                icon={skill.icon}
                                name={skill.name}
                            />
                        );
                    })}
                </div>
                <p className="skills-container__title">UI/UX</p>
                <div className="skills">
                    {SKILLSDATA.filter((skill) => {
                        return skill.info === "ui-ux";
                    }).map((skill) => {
                        return (
                            <Skill
                                key={skill.id}
                                icon={skill.icon}
                                name={skill.name}
                            />
                        );
                    })}
                </div>
                <p className="skills-container__title">CURRENTLY LEARNING</p>
                <div className="skills">
                    {SKILLSDATA.filter((skill) => {
                        return skill.info === "currently-learning";
                    }).map((skill) => {
                        return (
                            <Skill
                                key={skill.id}
                                icon={skill.icon}
                                name={skill.name}
                            />
                        );
                    })}
                </div>
            </div>
            <ScrollBtn className={".js-skills-container"} />
        </>
    );
}

export default Skills;
