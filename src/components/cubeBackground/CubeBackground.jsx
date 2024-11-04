import "./CubeBackground.css";

const CubeBackground = () => {
    return (
        <div className="reveal-cube-container">
            <div className="cube-container">
                <div className="cube">
                    <div className="side side-front"></div>
                    <div className="side side-back"></div>
                    <div className="side side-top"></div>
                    <div className="side side-bottom"></div>
                    <div className="side side-left"></div>
                    <div className="side side-right"></div>
                </div>
            </div>
            <div className="cube-shadow"></div>
        </div>
    );
};

export default CubeBackground;
