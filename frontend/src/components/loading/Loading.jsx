import { useEffect } from "react";
import "./Loading.css";

function Loading() {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".loading").style.display = "none";
        }, 3000);
    }, []);

    return (
        <p className="loading">
            STEPAN DORDIAI<span> PORTFOLIO</span>
        </p>
    );
}

export default Loading;
