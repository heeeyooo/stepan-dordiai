import AnimateElements from "../../utils/AnimateElements";
import { makeCursorActive, makeCursorNormal } from "../../utils/cursorState";
import "./Project.css";
import { NavLink } from "react-router-dom";

function Project({ id, title, titleName, production, index }) {
    AnimateElements(".project-container", "revealProjectContainer 1s forwards");

    return (
        <div
            className="project-container"
            onMouseEnter={() => makeCursorActive(title)}
            onMouseLeave={makeCursorNormal}
        >
            <NavLink
                onClick={makeCursorNormal}
                className="nava"
                to={`/project-page/${index}`}
            ></NavLink>
            <p className="project-number">{id < 10 ? `0${id}` : `${id}`}</p>
            <p className="project-production">{production}</p>
            <div className="project__right-side">
                <h4 className="project-title">{title}</h4>
                <p className="project-title-name">{titleName}</p>
            </div>
        </div>
    );
}

export default Project;
