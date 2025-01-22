import { useEffect } from "react";
import "./Loading.scss";

function Loading() {
    useEffect(() => {
        document
            .querySelector(".loading")
            .addEventListener("animationend", () => {
                document.querySelector(".loading").style.display = "none";
            });
    }, []);

    return (
        // I wrote inline style to check display in order to start animate elements
        <h1 className="loading" style={{ display: "initial" }}>
            STEPAN DORDIAI
        </h1>
    );
}

export default Loading;
