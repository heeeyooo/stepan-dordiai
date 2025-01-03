import { useEffect } from "react";
import portfolioData from "../../data/portfolioData";
import Project from "../../components/project/Project";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";
import "./Portfolio.scss";

function Portfolio() {
    useEffect(() => {
        document.title = "Stepan Dordiai | Portfolio";
    }, []);

    return (
        <>
            <section className="portfolio js-portfolio">
                {portfolioData.map((project, index) => {
                    return (
                        <Project
                            key={project.id}
                            title={project.title}
                            production={project.production}
                            index={index}
                        />
                    );
                })}
            </section>
            <ScrollBtn className={".js-portfolio"} />
        </>
    );
}

export default Portfolio;
