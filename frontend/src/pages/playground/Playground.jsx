import { useEffect, useState } from "react";
import axios from "axios";
// import pgData from "../../data/pgData.json";
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
        awaiting.textContent = "Loading data...";
        document.querySelector(".js-pg-container").append(awaiting);
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

    useEffect(() => {
        document.querySelectorAll(".pg-project").forEach((project, index) => {
            // FIXME: setTimeout or setInterval?
            setTimeout(() => {
                project.style.animation = "revealPgProject 1s forwards";
            }, 100 * index);
        });
    }, [projects]);

    return (
        <>
            <div className="playground js-pg-container">
                {projects.map(
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
                                                title="Live demo"
                                            >
                                                <i className="fa-solid fa-link"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="pg-project__link"
                                                href={githubRepo}
                                                target="_blank"
                                                title="Github Repo"
                                            >
                                                <i className="fa-brands fa-github"></i>
                                            </a>
                                        </li>
                                        <li className={extraClass}>
                                            <a
                                                className="pg-project__link"
                                                href={telegramBot}
                                                target="_blank"
                                                title="Telegram bot"
                                            >
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
