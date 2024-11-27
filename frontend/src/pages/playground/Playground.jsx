import { useEffect, useState } from "react";
import axios from "axios";
import AnimateElements from "../../utils/AnimateElements";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";
import "./Playground.css";

const Playground = () => {
    useEffect(() => {
        document.title = "Stepan Dordiai | Playground";
    }, []);

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const awaiting = document.createElement("p");
        awaiting.classList.add("awaiting");
        awaiting.textContent =
            "Loading data...(it may take some time (30-60sec) due the inactivity of the server (like 30min), after it loads immediately)";
        document.querySelector(".js-pg-container").appendChild(awaiting);
        let isError = false;
        axios
            .get("https://stepan-dordiai-backend.onrender.com")
            .then((projects) => setProjects(projects.data))
            .catch((error) => {
                // TODO: Write custom error
                awaiting.textContent = error.message;
                awaiting.style.animation = "none";
                isError = true;
            })
            .finally(() => {
                if (!isError) {
                    awaiting.remove();
                } else {
                    isError = false;
                    return;
                }
            });
    }, []);

    AnimateElements(".pg-project", "revealPgProject 1s forwards", projects);

    return (
        <>
            <div className="playground js-pg-container">
                {projects
                    // MongoDB shuffle my json objects so i use sort() method to sort objects by id
                    .sort((a, b) => a.id - b.id)
                    .map(
                        ({
                            id,
                            title,
                            liveDemo,
                            githubRepo,
                            telegramBot,
                            extraClass,
                        }) => {
                            return (
                                <div className="pg-project" key={id}>
                                    <p className="playground-project__number">
                                        {"00" + id}
                                    </p>
                                    <div className="playground-info-container">
                                        <p className="playground-project__title">
                                            {title}
                                        </p>
                                        <ul className="pg-project__links-list">
                                            <li>
                                                <a
                                                    className="pg-project__link"
                                                    href={liveDemo}
                                                    target="_blank"
                                                >
                                                    <div className="link__title-container">
                                                        <p>Live demo</p>
                                                    </div>
                                                    <div className="link-arrow">
                                                        <div className="link-arrow-center"></div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="pg-project__link"
                                                    href={githubRepo}
                                                    target="_blank"
                                                >
                                                    <div className="link__title-container">
                                                        <p>GitHub Repo</p>
                                                    </div>
                                                    <i className="fa-brands fa-github"></i>
                                                </a>
                                            </li>
                                            <li className={extraClass}>
                                                <a
                                                    className="pg-project__link"
                                                    href={telegramBot}
                                                    target="_blank"
                                                >
                                                    <div className="link__title-container">
                                                        <p>Telegram Bot</p>
                                                    </div>
                                                    <i className="fa-brands fa-telegram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            );
                        }
                    )}
            </div>
            <ScrollBtn className={".js-pg-container"} />
        </>
    );
};

export default Playground;
