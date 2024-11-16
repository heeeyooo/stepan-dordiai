import { useEffect } from "react";
import { makeCursorActive, makeCursorNormal } from "../../utils/cursorState";
import "./Skill.css";

function Skill({ icon, name }) {
    useEffect(() => {
        document
            .querySelectorAll(".skill-container")
            .forEach((skill, index) => {
                // FIXME: setTimeout or setInterval?
                setTimeout(() => {
                    skill.style.animation = "revealSkillContainer 1s forwards";
                }, 100 * index);
            });
    }, []);

    return (
        <div
            onMouseEnter={() => makeCursorActive(name)}
            onMouseLeave={makeCursorNormal}
            className="skill-container"
        >
            {icon.map((element, index) => {
                return (
                    <div className="skill" key={index}>
                        {element}
                    </div>
                );
            })}
        </div>
    );
}

export default Skill;
