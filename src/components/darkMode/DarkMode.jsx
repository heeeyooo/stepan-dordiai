import "./DarkMode.css";
import Resume from "./../../pdf/heeeyooo-resume.pdf";

function DarkMode() {
  function changeMode() {
    const variables = document.querySelector(":root");

    if (document.querySelector(".dark-mode-btn").textContent === "LIGHT") {
      document.querySelector(".dark-mode-btn").textContent = "DARK";
      variables.style.setProperty("--main-background", "white");
      variables.style.setProperty(
        "--glass-background",
        "rgba(255,255,255, 0.5)"
      );
      variables.style.setProperty("--percent-background", "rgba(0,0,0, 0.25)");
      variables.style.setProperty("--color", "black");
      variables.style.setProperty(
        "--semi-transparent-color",
        "rgba(0, 0, 0, 0.5"
      );
    } else {
      document.querySelector(".dark-mode-btn").textContent = "LIGHT";
      variables.style.setProperty("--main-background", "black");
      variables.style.setProperty("--glass-background", "rgba(0,0,0, 0.5)");
      variables.style.setProperty(
        "--percent-background",
        "rgba(255,255,255, 0.25)"
      );
      variables.style.setProperty("--color", "white");
      variables.style.setProperty(
        "--semi-transparent-color",
        "rgba(255, 255, 255, 0.5"
      );
    }
  }

  return (
    <div className="dark-mode-container">
      <a href={Resume} target="_blank">
        RESUME
      </a>
      <button className="dark-mode-btn" onClick={changeMode}>
        LIGHT
      </button>
    </div>
  );
}

export default DarkMode;
