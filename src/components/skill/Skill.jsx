import "./Skill.css";

function Skill({ icon, title, percent }) {
  return (
    <>
      <div className="skill-container">
        <div className="skill-icon-container">
          <i className={icon}></i>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
          <span className="line4"></span>
        </div>
        <div className="skill-info-container">
          <p>{title}</p>
          <div className="skill-range">
            <span className={percent}></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
