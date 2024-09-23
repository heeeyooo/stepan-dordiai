import SKILLSDATA from "./../../data/skillsData";
import Skill from "../../components/skill/Skill";
import "./Skills.css";

function Skills() {
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
                        onMouseEnter={() => brightCursor("Node.js")}
                        onMouseLeave={lowerCursor}
                        className="current-skill"
                    >
                        <i className="fa-brands fa-node"></i>
                    </div>
                </div>
            </div>
            <button
                onMouseEnter={() => brightCursor("Up")}
                onMouseLeave={lowerCursor}
                onClick={scrollUp}
                className="scroll__up-btn"
            >
                <i className="fa-solid fa-arrow-up-long"></i>
            </button>
            <button
                onMouseEnter={() => brightCursor("Down")}
                onMouseLeave={lowerCursor}
                onClick={scrollDown}
                className="scroll__down-btn"
            >
                <i className="fa-solid fa-arrow-down-long"></i>
            </button>
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
