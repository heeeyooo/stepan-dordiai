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
