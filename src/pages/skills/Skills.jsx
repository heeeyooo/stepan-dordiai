import SKILLSDATA from "./../../data/skillsData";
import Skill from "../../components/skill/Skill";
import "./Skills.css";

function Skills() {
    //
    function brightCursor() {
        document.querySelector("#custom-cursor").classList.add("active-cursor");
        document.querySelector("#custom-cursor").textContent = "Node.js";
    }

    function lowerCursor() {
        document
            .querySelector("#custom-cursor")
            .classList.remove("active-cursor");
        document.querySelector("#custom-cursor").textContent = "";
    }
    //
    return (
        <>
            <div className="skills-container">
                <div className="skills">
                    {SKILLSDATA.map((skill) => {
                        return (
                            <Skill
                                key={skill.id}
                                icon={skill.icon}
                                id={skill.id}
                            />
                        );
                    })}
                </div>
                <p className="skills__title">Currently learning</p>
                <div className="skills">
                    <div
                        onMouseEnter={brightCursor}
                        onMouseLeave={lowerCursor}
                        className="current-skill"
                    >
                        <i className="fa-brands fa-node"></i>
                    </div>
                </div>
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
