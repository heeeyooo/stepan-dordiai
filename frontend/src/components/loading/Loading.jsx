import { useEffect } from "react";
import "./Loading.css";

function Loading() {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".loading").style.display = "none";
        }, 3000);
    }, []);

    return (
        // I wrote inline style to check display in order to start animate elements
        <p className="loading" style={{ display: "initial" }}>
            STEPAN DORDIAI<span> PORTFOLIO</span>
        </p>
    );
}

export default Loading;
