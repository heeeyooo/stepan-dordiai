import "./Loading.css";

function Loading() {
  setTimeout(() => {
    document.querySelector(".loading-container").style.display = "none";
  }, 3000);

  return (
    <div className="loading-container">
      <p className="loading-title">
        STEPAN DORDIAI<span> PORTFOLIO</span>
      </p>
      <div className="percent-range-background">
        <span className="percent-range"></span>
      </div>
    </div>
  );
}

export default Loading;
