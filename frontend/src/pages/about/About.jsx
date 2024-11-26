import "./About.css";
import { useEffect } from "react";

function About() {
    useEffect(() => {
        document.title = "Stepan Dordiai | About";
    }, []);
    return (
        <p className="about">
            Self-taught Web developer with more than 1 year of diverse
            experience in designing and building responsive web pages and
            applications.
            <br />
            Constantly seeking for new challenges and opportunities that will
            expand my skill set
        </p>
    );
}

export default About;
