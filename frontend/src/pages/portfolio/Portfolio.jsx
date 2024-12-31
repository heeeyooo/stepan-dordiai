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
            <section className="portfolio-section js-portfolio-section">
                {portfolioData
                    .sort((a, b) => b.id - a.id)
                    .map((project, index) => {
                        return (
                            <Project
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                titleName={project.titleName}
                                skills={project.skills}
                                githubRepo={project.githubRepo}
                                liveDemo={project.liveDemo}
                                extraClass={project.extraClass}
                                projectImg={project.projectImg}
                                production={project.production}
                                index={index}
                            />
                        );
                    })}
            </section>
            <ScrollBtn className={".js-portfolio-section"} />
        </>
    );
}

export default Portfolio;
