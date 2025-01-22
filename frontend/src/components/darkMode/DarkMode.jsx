import { useLocalStorage } from "../../utils/UseLocalStorage";
import { useEffect, useRef } from "react";
import {
    makeCursorActive,
    makeCursorNormal,
    showText,
} from "../../utils/cursorState";
import Resume from "../resume/Resume";
import "./DarkMode.scss";

function DarkMode() {
    const [lightMode, setLightMode] = useLocalStorage("darkMode", "light");

    const refBtn = useRef(null);

    useEffect(() => {
        const variables = document.querySelector(":root");

        if (lightMode === "light") {
            variables.style.setProperty("--bg-color", "var(--bg-color-light)");
            variables.style.setProperty("--color", "var(--color-dark)");
            variables.style.setProperty(
                "--semi-tp-10",
                "var(--semi-tp-10-dark)"
            );
            variables.style.setProperty(
                "--semi-tp-25",
                "var(--semi-tp-25-dark)"
            );
            variables.style.setProperty(
                "--semi-tp-50",
                "var(--semi-tp-50-dark)"
            );
            variables.style.setProperty(
                "--bg-semi-tp-50",
                "var(--bg-semi-tp-50-light)"
            );
            refBtn.current.textContent = "DARK";
        } else {
            variables.style.setProperty("--bg-color", "var(--bg-color-dark)");
            variables.style.setProperty("--color", "var(--color-light)");
            variables.style.setProperty(
                "--semi-tp-10",
                "var(--semi-tp-10-light)"
            );
            variables.style.setProperty(
                "--semi-tp-25",
                "var(--semi-tp-25-light)"
            );
            variables.style.setProperty(
                "--semi-tp-50",
                "var(--semi-tp-50-light)"
            );
            variables.style.setProperty(
                "--bg-semi-tp-50",
                "var(--bg-semi-tp-50-dark)"
            );
            refBtn.current.textContent = "LIGHT";
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
        }, 0);
    };

    return (
        <div className="dark-mode">
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
