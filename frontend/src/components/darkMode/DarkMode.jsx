import { useEffect, useRef } from "react";
import { useLocalStorage } from "../../utils/UseLocalStorage";
import "./DarkMode.css";
import {
    makeCursorActive,
    makeCursorNormal,
    showText,
} from "../../utils/cursorState";
import Resume from "../resume/Resume";

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

        // I added setTimeout to change text after a function was completed
        setTimeout(() => {
            document.querySelector(".text p").textContent =
                refBtn.current.textContent;
            showText();
        }, 1);
    };

    return (
        <div className="dark-mode-container">
            <Resume />
            <button
                ref={refBtn}
                className="dark-mode-btn"
                onClick={changeMode}
                onMouseEnter={() =>
                    makeCursorActive(refBtn.current.textContent)
                }
                onMouseLeave={makeCursorNormal}
            >
                DARK
            </button>
        </div>
    );
}

export default DarkMode;
