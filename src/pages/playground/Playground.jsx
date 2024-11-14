import { useEffect } from "react";
import pgData from "../../data/pgData.json";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";
import "./Playground.css";

const Playground = () => {
    useEffect(() => {
        document.title = "Stepan Dordiai | Playground";
    }, []);
    return (
        <>
            <div className="playground js-pg-container">
                {pgData.map(
                    ({
                        id,
                        title,
                        liveDemo,
                        githubRepo,
                        telegramBot,
                        extraClass,
                    }) => {
                        return (
                            <div className="playground-project" key={id}>
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
