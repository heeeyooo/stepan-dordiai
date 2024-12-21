import { useEffect } from "react";
// import axios from "axios";
import projects from "./../../data/pgData.json";
import AnimateElements from "../../utils/AnimateElements";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";
import "./Playground.css";

const Playground = () => {
    useEffect(() => {
        document.title = "Stepan Dordiai | Playground";
    }, []);

    // const [projects, setProjects] = useState([]);

    // useEffect(() => {
    //     const awaiting = document.createElement("p");
    //     awaiting.classList.add("awaiting");
    //     awaiting.textContent =
    //         "Loading data...(it may take some time (30-60sec) due the inactivity of the server (like 30min), after it loads immediately)";
    //     document.querySelector(".js-pg-section").appendChild(awaiting);
    //     let isError = false;
    //     axios
    //         .get("https://stepan-dordiai-backend.onrender.com")
    //         .then((projects) => setProjects(projects.data))
    //         .catch((error) => {
    //             // TODO: Write custom error
    //             awaiting.textContent = error.message;
    //             awaiting.style.animation = "none";
    //             isError = true;
    //         })
    //         .finally(() => {
    //             if (!isError) {
    //                 awaiting.remove();
    //             } else {
    //                 isError = false;
    //                 return;
    //             }
    //         });
    // }, []);

    AnimateElements(
        ".pg-project",
        "revealPgProject 1s forwards",
        100,
        projects
    );

    return (
        <>
            <section className="pg-section js-pg-section">
                {projects
                    // MongoDB shuffle my json objects so i use sort() method to sort objects by id
                    // .sort((a, b) => a.id - b.id)
                    .map(
                        ({
                            id,
                            title,
                            liveSite,
                            githubRepo,
                            telegramBot,
                            extraClass,
                        }) => {
                            return (
                                <div className="pg-project" key={id}>
                                    <div className="pg-project__left-side">
                                        <p className="pg-project__number">
                                            {"00" + id}
                                        </p>
                                    </div>
                                    <div className="pg-project__right-side">
                                        <p className="pg-project__title">
                                            {title}
                                        </p>
                                        <ul className="pg-project__links-list">
                                            <li>
                                                <a
                                                    className="pg-project__link"
                                                    href={liveSite}
                                                    target="_blank"
                                                    title="Live Site"
                                                >
                                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="pg-project__link"
                                                    href={githubRepo}
                                                    target="_blank"
                                                    title="GitHub Repo"
                                                >
                                                    <i className="fa-brands fa-github"></i>
                                                </a>
                                            </li>
                                            <li className={extraClass}>
                                                <a
                                                    className="pg-project__link"
                                                    href={telegramBot}
                                                    target="_blank"
                                                    title="Telegram Bot"
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
            </section>
            <ScrollBtn className={".js-pg-section"} />
        </>
    );
};

export default Playground;
