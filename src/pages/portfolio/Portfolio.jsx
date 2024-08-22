import Project from "../../components/project/Project";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-section">
      <div className="portfolio-container">
        <Project />
      </div>
      <div className="playground-container">
        {/* PLAYGROUND */}
        <span className="playground-title">PLAYGROUND</span>
        <div className="corner-container">
          <span className="corner-top-left"></span>
          <span className="corner-top-right"></span>
          <span className="corner-bottom-right"></span>
          <span className="corner-bottom-left"></span>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
