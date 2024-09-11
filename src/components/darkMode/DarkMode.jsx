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
        "rgba(0, 0, 0, 0.5)"
      );

      variables.style.setProperty("--glass-background", "rgba(0, 0, 0, 0.25");
      //
      variables.style.setProperty("--background", "#faf9f632");
      // variables.style.setProperty("--animation-background", "#faf9f6");
      //
      refBtn.current.innerHTML = "DARK";
    } else {
      variables.style.setProperty("--main-background", "#171717");
      variables.style.setProperty("--color", "#faf9f6");
      variables.style.setProperty(
        "--semi-transparent-color",
        "rgba(255, 255, 255, 0.5)"
      );
      variables.style.setProperty(
        "--glass-background",
        "rgba(255, 255, 255, 0.25)"
      );
      variables.style.setProperty("--background", "#17171732");
      // variables.style.setProperty("--animation-background", "#171717");
      refBtn.current.innerHTML = "LIGHT";
    }
  }, [lightMode]);

  const changeMode = () => {
    setLightMode((currentMode) => {
      return currentMode === "dark" ? "light" : "dark";
    });
  };

  function brightCursor() {
    document.querySelector("#custom-cursor").classList.add("active-cursor");
  }

  function lowerCursor() {
    document.querySelector("#custom-cursor").classList.remove("active-cursor");
  }

  return (
    <div className="dark-mode-container">
      <a
        href={Resume}
        onMouseEnter={brightCursor}
        onMouseLeave={lowerCursor}
        target="_blank"
      >
        RESUME
      </a>
      <button
        ref={refBtn}
        className="dark-mode-btn target-link"
        onClick={changeMode}
        onMouseEnter={brightCursor}
        onMouseLeave={lowerCursor}
      >
        LIGHT
      </button>
    </div>
  );
}

export default DarkMode;
