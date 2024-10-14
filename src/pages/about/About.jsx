import "./About.css";
import { useEffect } from "react";

function About() {
    useEffect(() => {
        document.title = "Stepan Dordiai | About";
    }, []);
    return (
        <p className="about">
            Hi! My name is Stepan Dordiai and I am a Junior Frontend Developer
            currently based in Ukraine.
            <br />I specialize in building pixel perfect minimalistic projects
            that will charm the viewer with their interactivity and ease of use.
            Gym enjoyer
        </p>
    );
}

export default About;
