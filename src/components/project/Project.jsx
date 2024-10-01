import { useEffect } from "react";
import "./Project.css";

function Project({ id, title, titleName, skills, links }) {
    function brightCursor(info) {
        document.querySelector("#custom-cursor").classList.add("active-cursor");
        document.querySelector("#custom-cursor").textContent = info;
        console.log(info);
    }

    function lowerCursor() {
        document
            .querySelector("#custom-cursor")
            .classList.remove("active-cursor");
        document.querySelector("#custom-cursor").textContent = ``;
    }

    useEffect(() => {
        document
            .querySelectorAll(".project-container")
            .forEach((project, index) => {
                setInterval(() => {
                    project.style.animation =
                        "revealProjectContainer 0.5s forwards";
                }, 100 * index);
            });
    }, []);
    return (
        <>
            <div className="project-container">
                <p className="project-number">{id}</p>
                <div className="project-info-container">
                    <div className="project-title-container">
                        <h5 className="project-title-name">{titleName}</h5>
                        <h4 className="project-title">{title}</h4>
                    </div>
                    <div className="project-skills">
                        {skills.map((skill, index) => {
                            return <span key={index}>{skill}</span>;
                        })}
                    </div>
                    <div className="project-links">
                        {links.map(({ link, info }) => {
                            return (
                                <span
                                    key={info}
                                    onMouseEnter={() => brightCursor(info)}
                                    onMouseLeave={lowerCursor}
                                >
                                    {link}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;
