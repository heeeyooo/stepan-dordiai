import AnimateElements from "../../utils/AnimateElements";
import { makeCursorActive, makeCursorNormal } from "../../utils/cursorState";
import { NavLink } from "react-router-dom";
import "./Project.css";

function Project({ id, title, production, index }) {
    AnimateElements(".project-container", "revealProjectContainer 1s forwards");

    return (
        <div
            className="project-container"
            onMouseEnter={() => makeCursorActive(title)}
            onMouseLeave={makeCursorNormal}
        >
            <NavLink
                onClick={makeCursorNormal}
                className="project-link"
                to={`/project-page/${index}`}
            ></NavLink>
            <p className="project-number">{id < 10 ? `0${id}` : id}</p>
            <p className="project-production">{production}</p>
            <h3 className="project-title">{title}</h3>
        </div>
    );
}

export default Project;
