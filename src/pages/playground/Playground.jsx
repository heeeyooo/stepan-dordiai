import "./Playground.css";
import pgProjectSet from "../../data/pgProjectsData";
const Playground = () => {
  return (
    <>
      <div className="playground">
        {pgProjectSet.map(({ id, title, link }) => {
          return (
            <div className="playground-project" key={id}>
              <p className="playground-project__number">{"00" + id}</p>
              <a className="playground-project__link" href={link}>
                {title}{" "}
                <span className="material-symbols-outlined pg-project-arrow">
                  arrow_outward
                </span>
              </a>
            </div>
          );
        })}
      </div>
      <div className="blur-container"></div>
      <p className="playground__bg">PLAYGROUND</p>
    </>
  );
};

export default Playground;
