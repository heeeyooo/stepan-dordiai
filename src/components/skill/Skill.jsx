import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Skill.css";

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

    //
    function brightCursor() {
        document
            .querySelector("#custom-cursor")
            .classList.add("cursor--active");
        document.querySelector("#custom-cursor").textContent = id;
    }

    function lowerCursor() {
        document
            .querySelector("#custom-cursor")
            .classList.remove("cursor--active");
        document.querySelector("#custom-cursor").textContent = "";
    }
    //

    return (
        <div
            onMouseEnter={brightCursor}
            onMouseLeave={lowerCursor}
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
