import AnimateElements from "../../utils/AnimateElements";
import { makeCursorActive, makeCursorNormal } from "../../utils/cursorState";
import { NavLink } from "react-router-dom";
import "./Project.scss";

function Project({ id, title, production, index }) {
    AnimateElements(".project", "revealProject 1s forwards");

    return (
        <div
            className="project"
            onMouseEnter={() => makeCursorActive(title)}
            onMouseLeave={makeCursorNormal}
        >
            <NavLink
                onClick={makeCursorNormal}
                className="project__link"
                to={`/project-page/${index}`}
            ></NavLink>
            <p className="project__number">{id < 10 ? `0${id}` : id}</p>
            <div>
                <h3 className="project__title">{title}</h3>
                <p className="project__production">{production}</p>
            </div>
        </div>
    );
}

export default Project;
