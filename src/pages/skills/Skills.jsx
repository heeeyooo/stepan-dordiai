import SKILLSDATA from "./../../data/skillsData";
import Skill from "../../components/skill/Skill";
import { useEffect } from "react";
import "./Skills.css";

function Skills() {
    useEffect(() => {
        document.title = "Stepan Dordiai | Skills";
    }, []);
    //
    function brightCursor(props) {
        document.querySelector("#custom-cursor").classList.add("active-cursor");
        document.querySelector("#custom-cursor").textContent = props;
    }

    function lowerCursor() {
        document
            .querySelector("#custom-cursor")
            .classList.remove("active-cursor");
        document.querySelector("#custom-cursor").textContent = "";
    }
    //

    function scrollUp() {
        document.querySelector(".skills-container").scrollTop -= 100;
    }

    function scrollDown() {
        document.querySelector(".skills-container").scrollTop += 100;
    }

    return (
        <>
            <div className="skills-container">
                <p className="skills-container__title">FRONTEND</p>
                <div className="skills">
                    {SKILLSDATA.filter((skill) => {
                        return skill.info === "frontend";
                    }).map((skill) => {
                        return (
                            <Skill
                                key={skill.id}
                                icon={skill.icon}
                                id={skill.id}
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
                                id={skill.id}
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
                                id={skill.id}
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
                                id={skill.id}
                            />
                        );
                    })}
                </div>
            </div>
            <button
                onMouseEnter={() => brightCursor("Up")}
                onMouseLeave={lowerCursor}
                onMouseDown={scrollUp}
                className="scroll__up-btn"
            >
                <i className="fa-solid fa-arrow-up-long"></i>
            </button>
            <button
                onMouseEnter={() => brightCursor("Down")}
                onMouseLeave={lowerCursor}
                onMouseDown={scrollDown}
                className="scroll__down-btn"
            >
                <i className="fa-solid fa-arrow-down-long"></i>
            </button>
        </>
    );
}

export default Skills;
