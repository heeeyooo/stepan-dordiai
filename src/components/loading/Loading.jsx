import { useEffect } from "react";
import "./Loading.css";

function Loading() {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".loading-section").style.display = "none";
        }, 3000);
    }, []);

    // I'm using self-executing anonymous function (IIFE)
    (() => {
        let percent = 0;
        let customInterval = setInterval(closure, 18);
        function closure() {
            if (percent === 100) {
                clearInterval(customInterval);
            } else {
                percent++;
                document.querySelector(".loading span").innerHTML = percent;
            }
        }
    })();

    return (
        <div className="loading-section">
            <p className="loading-title">
                STEPAN DORDIAI<span> PORTFOLIO</span>
            </p>
            <div className="loading-container">
                <p className="loading">
                    <span>0</span>%
                </p>
            </div>
        </div>
    );
}

export default Loading;
