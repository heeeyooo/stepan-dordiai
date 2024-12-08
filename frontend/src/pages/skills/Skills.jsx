import { useEffect } from "react";
import skillsData from "./../../data/skillsData";
import Skill from "../../components/skill/Skill";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";
import "./Skills.css";
// import "./../../global/textLineReveal.css";
// import AnimateElements from "../../utils/AnimateElements";

function Skills() {
    useEffect(() => {
        document.title = "Stepan Dordiai | Skills";
    }, []);

    // AnimateElements(".text-line", "revealTextLine 1s forwards");

    return (
        <>
            <div className="skills-container js-skills-container">
                {/* <div className="text-line-container">
                    <div className="text-line">
                        <p className="skills-container__title">FRONTEND</p>
                    </div>
                </div> */}
                <div className="skills">
                    {skillsData
                        // .filter((skill) => {
                        //     return skill.info === "frontend";
                        // })
                        .map((skill) => {
                            return (
                                <Skill
                                    key={skill.id}
                                    icon={skill.icon}
                                    name={skill.name}
                                />
                            );
                        })}
                </div>
                {/* <div className="text-line-container">
                    <div className="text-line">
                        <p className="skills-container__title">BACKEND</p>
                    </div>
                </div>
                <div className="skills">
                    {skillsData
                        .filter((skill) => {
                            return skill.info === "backend";
                        })
                        .map((skill) => {
                            return (
                                <Skill
                                    key={skill.id}
                                    icon={skill.icon}
                                    name={skill.name}
                                />
                            );
                        })}
                </div>
                <div className="text-line-container">
                    <div className="text-line">
                        <p className="skills-container__title">UI/UX</p>
                    </div>
                </div>
                <div className="skills">
                    {skillsData
                        .filter((skill) => {
                            return skill.info === "ui-ux";
                        })
                        .map((skill) => {
                            return (
                                <Skill
                                    key={skill.id}
                                    icon={skill.icon}
                                    name={skill.name}
                                />
                            );
                        })}
                </div>
                <div className="text-line-container">
                    <div className="text-line">
                        <p className="skills-container__title">
                            CURRENTLY LEARNING
                        </p>
                    </div>
                </div>
                <div className="skills">
                    {skillsData
                        .filter((skill) => {
                            return skill.info === "currently-learning";
                        })
                        .map((skill) => {
                            return (
                                <Skill
                                    key={skill.id}
                                    icon={skill.icon}
                                    name={skill.name}
                                />
                            );
                        })}
                </div> */}
            </div>
            <ScrollBtn className={".js-skills-container"} />
        </>
    );
}

export default Skills;
