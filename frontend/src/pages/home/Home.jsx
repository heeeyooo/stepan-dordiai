import "./Home.css";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        document.title = "Stepan Dordiai | Home";
    }, []);
    return (
        <div className="home-container">
            <h2 className="home-container__title">Front-end Developer</h2>
            <h1 className="home-container__title-name">STEPAN DORDIAI</h1>
        </div>
    );
}

export default Home;
