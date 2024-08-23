import { useState, useEffect, useRef } from "react";
import Resume from "./../../pdf/heeeyooo-resume.pdf";
import "./DarkMode.css";

function DarkMode() {
  const [lightMode, setLightMode] = useState("dark");

  const refBtn = useRef(null);

  useEffect(() => {
    const variables = document.querySelector(":root");

    if (lightMode === "light") {
      variables.style.setProperty("--main-background", "#faf9f6");
      variables.style.setProperty("--color", "#171717");
      variables.style.setProperty(
        "--semi-transparent-color",
        "rgba(0, 0, 0, 0.5"
      );
      variables.style.setProperty("--glass-background", "rgba(0, 0, 0, 0.25");
      refBtn.current.innerHTML = "DARK";
    } else {
      variables.style.setProperty("--main-background", "#171717");
      variables.style.setProperty("--color", "#faf9f6");
      variables.style.setProperty(
        "--semi-transparent-color",
        "rgba(255, 255, 255, 0.5"
      );
      variables.style.setProperty(
        "--glass-background",
        "rgba(255, 255, 255, 0.25"
      );
      refBtn.current.innerHTML = "LIGHT";
    }
  }, [lightMode]);

  const changeMode = () => {
    setLightMode((currentMode) => {
      return currentMode === "dark" ? "light" : "dark";
    });
  };

  return (
    <div className="dark-mode-container">
      <a href={Resume} target="_blank">
        RESUME
      </a>
      <button ref={refBtn} className="dark-mode-btn" onClick={changeMode}>
        LIGHT
      </button>
    </div>
  );
}

export default DarkMode;
