import "./About.css";
import { useEffect } from "react";

function About() {
    useEffect(() => {
        document.title = "Stepan Dordiai | About";
    }, []);
    return (
        <p className="about">
            Hi! My name is Stepan Dordiai and I'm a self-taught Web Developer
            with 1 year of practical experience in designing and building
            responsive web pages and applications.
            <br />
            Constantly seeking for new challenges and opportunities that will
            expand my skill set.
        </p>
    );
}

export default About;
