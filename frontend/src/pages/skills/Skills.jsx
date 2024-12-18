import { useEffect } from "react";
import skillsData from "./../../data/skillsData";
import Skill from "../../components/skill/Skill";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";
import "./Skills.css";

function Skills() {
    useEffect(() => {
        document.title = "Stepan Dordiai | Skills";
    }, []);

    return (
        <>
            <section className="skills-section js-skills-section">
                <div className="skills">
                    {skillsData.map((skill) => {
                        return (
                            <Skill
                                key={skill.id}
                                icon={skill.icon}
                                name={skill.name}
                            />
                        );
                    })}
                </div>
            </section>
            <ScrollBtn className={".js-skills-section"} />
        </>
    );
}

export default Skills;
