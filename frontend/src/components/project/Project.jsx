import AnimateElements from "../../utils/AnimateElements";
import { makeCursorActive, makeCursorNormal } from "../../utils/cursorState";
import "./Project.css";

function Project({
    id,
    title,
    titleName,
    skills,
    githubRepo,
    liveDemo,
    extraClass,
    projectImg,
}) {
    AnimateElements(".project-container", "revealProjectContainer 1s forwards");

    function createPage() {
        document.querySelector(".nav").style.pointerEvents = "none";
        // document.querySelector(".new-page").style.display = "initial";
        const newPage = document.createElement("div");
        const close = document.createElement("button");
        const frame = document.createElement("img");
        frame.classList = "frame";
        frame.src = projectImg;
        newPage.appendChild(frame);
        close.textContent = "Back";
        close.classList = "close-btn";
        newPage.classList = "new-page";
        document.body.appendChild(newPage);
        newPage.appendChild(close);
        // document.querySelector(".new-page").style.display = "initial";
        setTimeout(() => {
            document
                .querySelector(".new-page")
                .classList.add("new-page--active");
        }, 100);
        document.querySelector(".close-btn").addEventListener("click", () => {
            // document.querySelector(".new-page").remove();
            document.querySelector(".nav").style.pointerEvents = "all";
            document
                .querySelector(".new-page")
                .classList.remove("new-page--active");

            // document.querySelector(".close-btn").remove();
            document.querySelector(".project-container").style.pointerEvents =
                "none";
            setTimeout(() => {
                document.querySelector(".new-page").remove();
                document.querySelector(
                    ".project-container"
                ).style.pointerEvents = "all";
                // document.querySelector(".new-page").style.display = "none";
            }, 500);
        });
        const gitHubLink = document.createElement("a");
        gitHubLink.href = githubRepo;
        gitHubLink.target = "_blank";
        gitHubLink.textContent = `GitHub Repo`;
        newPage.appendChild(gitHubLink);
        gitHubLink.classList = "github-link";
        const liveSiteLink = document.createElement("a");
        liveSiteLink.href = liveDemo;
        liveSiteLink.target = "_blank";
        liveSiteLink.innerHTML = "GitHub Repo";
        newPage.appendChild(liveSiteLink);
        liveSiteLink.classList = `livesite-link ${extraClass}`;
    }

    return (
        <>
            <div
                className="project-container"
                onClick={createPage}
                onMouseEnter={() => makeCursorActive(title)}
                onMouseLeave={makeCursorNormal}
            >
                {/* <div className="project-left-side"> */}
                <p className="project-number">{id}</p>
                <p className="project-production">2024</p>

                <div className="project-right-section">
                    {/* </div> */}
                    <h5 className="project-title-name">{titleName}</h5>
                    <h4 className="project-title">{title}</h4>
                    {/* <div className="project-skills">
                    {skills.map((skill, index) => {
                        return <div key={index}>{skill}</div>;
                    })}
                </div> */}
                    {/* <ul className="project-links__list">
                    <li className={extraClass}>
                        <a href={liveDemo} target="_blank">
                            Live site
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href={githubRepo} target="_blank">
                            GitHub Repo<i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                </ul> */}
                </div>
            </div>
            {/* <div className="new-page">
                <button className="close-btn"></button>
                <ul className="project-links__list">
                    <li>
                        <a href={liveDemo} target="_blank">
                            Live site
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href={githubRepo} target="_blank">
                            GitHub Repo<i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                </ul>
            </div> */}
        </>
    );
}

export default Project;
