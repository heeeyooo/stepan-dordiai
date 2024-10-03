import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Skill.css";

function Skill({ icon, id }) {
    //
    function brightCursor() {
        document.querySelector("#custom-cursor").classList.add("active-cursor");
        document.querySelector("#custom-cursor").textContent = id;
    }

    function lowerCursor() {
        document
            .querySelector("#custom-cursor")
            .classList.remove("active-cursor");
        document.querySelector("#custom-cursor").textContent = "";
    }
    //
    // useLocation for rendering data when navigate
    // what is pathname?
    const { pathname } = useLocation();

    useEffect(() => {
        document.querySelectorAll(".skill").forEach((skill, index) => {
            setInterval(() => {
                skill.style.animation = "revealSkill 0.5s forwards";
            }, 100 * index);
        });
    }, [pathname]);
    return (
        <div
            onMouseEnter={brightCursor}
            onMouseLeave={lowerCursor}
            className="skill"
        >
            <i className={icon}></i>
        </div>
    );
}

export default Skill;
