import { useEffect } from "react";
import skillsData from "./../../data/skillsData";
import Skill from "../../components/skill/Skill";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";
import "./Skills.scss";

function Skills() {
    useEffect(() => {
        document.title = "Stepan Dordiai | Skills";
    }, []);

    return (
        <>
            <section className="skills js-skills">
                {/* <div className="skills-container"> */}
                <div className="grid-container">
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

                {/* </div> */}
                {/* <div className="right-line"></div>
                <div className="line-1"></div>
                <div className="left-line"></div>
                <div className="skills-container tree-level2">
                    {skillsData.slice(1, 4).map((skill) => {
                        return (
                            <Skill
                                key={skill.id}
                                icon={skill.icon}
                                name={skill.name}
                            />
                        );
                    })}
                </div>
                <div className="right-line"></div>
                <div className="line-2"></div>
                <div className="left-line-2"></div>
                <div className="skills-container tree-level3">
                    {skillsData.slice(4, 6).map((skill) => {
                        return (
                            <Skill
                                key={skill.id}
                                icon={skill.icon}
                                name={skill.name}
                            />
                        );
                    })}
                </div>
                <div className="right-line-2"></div>
                <div className="line-2 extra-line"></div>
                <div className="left-line-2"></div>
                <div className="skills-container tree-level4">
                    {skillsData.slice(6, 8).map((skill) => {
                        return (
                            <Skill
                                key={skill.id}
                                icon={skill.icon}
                                name={skill.name}
                            />
                        );
                    })}
                </div>
                <div className="right-line-2"></div>
                <div className="line-3"></div>
                <div className="left-line"></div>
                <div className="skills-container tree-level5">
                    {skillsData.slice(8, 9).map((skill) => {
                        return (
                            <Skill
                                key={skill.id}
                                icon={skill.icon}
                                name={skill.name}
                            />
                        );
                    })}
                </div>
                <div className="right-line"></div>
                <div className="line-1"></div>
                <div className="left-line-2"></div>
                <div className="skills-container tree-level6">
                    {skillsData.slice(9, 11).map((skill) => {
                        return (
                            <Skill
                                key={skill.id}
                                icon={skill.icon}
                                name={skill.name}
                            />
                        );
                    })}
                </div>
                <div className="right-line-2"></div>
                <div className="line-2"></div>
                <div className="left-line"></div>
                <div className="skills-container tree-level7">
                    {skillsData.slice(11, 14).map((skill) => {
                        return (
                            <Skill
                                key={skill.id}
                                icon={skill.icon}
                                name={skill.name}
                            />
                        );
                    })}
                </div> */}
            </section>
            <ScrollBtn className={".js-skills"} />
        </>
    );
}

export default Skills;
