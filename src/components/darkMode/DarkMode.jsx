import { useEffect, useRef } from "react";
import { useLocalStorage } from "../../utils/UseLocalStorage";
import resume from "./../../pdf/resume-v1.0.pdf";
import "./DarkMode.css";

function DarkMode() {
    const [lightMode, setLightMode] = useLocalStorage("darkMode", "light");

    const refBtn = useRef(null);

    useEffect(() => {
        const variables = document.querySelector(":root");

        if (lightMode === "dark") {
            variables.style.setProperty("--bg-color", "#000000");
            variables.style.setProperty("--color", "#ffffff");
            variables.style.setProperty(
                "--semi-transparent-10",
                "rgba(255, 255, 255, 0.1)"
            );
            variables.style.setProperty(
                "--semi-transparent-25",
                "rgba(255, 255, 255, 0.25)"
            );
            variables.style.setProperty(
                "--semi-transparent-50",
                "rgba(255, 255, 255, 0.5)"
            );
            variables.style.setProperty(
                "--bg-semi-transparent-50",
                "rgba(0, 0, 0, 0.5)"
            );
            refBtn.current.textContent = "LIGHT";
        } else {
            variables.style.setProperty("--bg-color", "#ffffff");
            variables.style.setProperty("--color", "#000000");
            variables.style.setProperty(
                "--semi-transparent-10",
                "rgba(0, 0, 0, 0.1)"
            );
            variables.style.setProperty(
                "--semi-transparent-25",
                "rgba(0, 0, 0, 0.25"
            );
            variables.style.setProperty(
                "--semi-transparent-50",
                "rgba(0, 0, 0, 0.5)"
            );
            variables.style.setProperty(
                "--bg-semi-transparent-50",
                "rgba(255, 255, 255, 0.5)"
            );
            refBtn.current.textContent = "DARK";
        }
    }, [lightMode]);

    const changeMode = () => {
        setLightMode((currentMode) => {
            return currentMode === "light" ? "dark" : "light";
        });
    };

    function brightCursor() {
        document.querySelector("#custom-cursor").classList.add("active-cursor");
        document.querySelector("#custom-cursor").textContent =
            refBtn.current.textContent;
    }

    function lowerCursor() {
        document
            .querySelector("#custom-cursor")
            .classList.remove("active-cursor");
        document.querySelector("#custom-cursor").textContent = "";
    }

    return (
        <div className="dark-mode-container">
            <a href={resume} target="_blank">
                RESUME
            </a>
            <button
                ref={refBtn}
                className="dark-mode-btn target-link"
                onClick={changeMode}
                onMouseEnter={brightCursor}
                onMouseLeave={lowerCursor}
            >
                DARK
            </button>
        </div>
    );
}

export default DarkMode;
