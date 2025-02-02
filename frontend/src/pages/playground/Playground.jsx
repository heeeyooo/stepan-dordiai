import { Helmet } from "react-helmet";
// import axios from "axios";
import projects from "./../../data/pgData.json";
import AnimateElements from "../../utils/AnimateElements";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";
import "./Playground.scss";

const Playground = () => {
    const pageTitle = "Playground";

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
            <section className="pg js-pg">
                <Helmet>
                    <title>{pageTitle}</title>
                </Helmet>
                {projects
                    // MongoDB shuffle my json objects so i use sort() method to sort objects by id
                    // I use sort method to show pg-project in order from new to old
                    .sort((a, b) => b.id - a.id)
                    .map(
                        ({
                            id,
                            title,
                            liveSite,
                            githubRepo,
                            telegramBot,
                            telegramBotNone,
                        }) => {
                            return (
                                <div className="pg-project" key={id}>
                                    <p className="pg-project__number">
                                        {id < 10 ? `00${id}` : `0${id}`}
                                    </p>
                                    <div className="pg-project__right-side">
                                        <div>
                                            <p className="pg-project__title">
                                                {title}
                                            </p>
                                            <ul className="pg-project__links">
                                                <li>
                                                    <a
                                                        href={liveSite}
                                                        target="_blank"
                                                        title="Live Site"
                                                    >
                                                        Live{" "}
                                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href={githubRepo}
                                                        target="_blank"
                                                        title="GitHub Repo"
                                                    >
                                                        GitHub{" "}
                                                        <i className="fa-brands fa-github"></i>
                                                    </a>
                                                </li>
                                                {telegramBot && (
                                                    <li>
                                                        <a
                                                            href={telegramBot}
                                                            target="_blank"
                                                            title="Telegram Bot"
                                                        >
                                                            Telegram{" "}
                                                            <i className="fa-brands fa-telegram"></i>
                                                        </a>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                        <video src=""></video>
                                    </div>
                                </div>
                            );
                        }
                    )}
            </section>
            <ScrollBtn className={".js-pg"} />
        </>
    );
};

export default Playground;
