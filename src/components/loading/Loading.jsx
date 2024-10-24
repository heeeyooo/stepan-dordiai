import { useEffect } from "react";
import "./Loading.css";

function Loading() {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".loading-section").style.display = "none";
        }, 1500);
    }, []);

    return (
        <div className="loading-section">
            <p className="loading-title">
                STEPAN DORDIAI<span> PORTFOLIO</span>
            </p>
            <div className="loading-container">
                <p className="loading-text">LOADING...</p>
                <div className="percent-range-background">
                    <span className="percent-range"></span>
                </div>
            </div>
        </div>
    );
}

export default Loading;
