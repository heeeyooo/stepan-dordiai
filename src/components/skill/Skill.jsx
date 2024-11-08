import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Skill.css";
import { makeCursorActive, makeCursorNormal } from "../../utils/cursorState";

function Skill({ icon, id }) {
    // useLocation for rendering data when navigate
    // what is pathname?
    const { pathname } = useLocation();

    useEffect(() => {
        document
            .querySelectorAll(".skill-container")
            .forEach((skill, index) => {
                // setTimeout or setInterval?
                setTimeout(() => {
                    skill.style.animation =
                        "revealSkillContainer 0.5s forwards";
                }, 100 * index);
            });
    }, [pathname]);

    return (
        <div
            onMouseEnter={() => makeCursorActive(id)}
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
