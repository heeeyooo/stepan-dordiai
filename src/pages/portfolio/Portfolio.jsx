import { useEffect } from "react";
import portfolioData from "../../data/portfolioData";
import Project from "../../components/project/Project";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";
import "./Portfolio.css";

function Portfolio() {
    useEffect(() => {
        document.title = "Stepan Dordiai | Portfolio";
    }, []);

    return (
        <>
            <div className="portfolio-container js-portfolio-container">
                {portfolioData.map((project) => {
                    return (
                        <Project
                            key={project.id}
                            id={"0" + project.id}
                            title={project.title}
                            titleName={project.titleName}
                            skills={project.skills}
                            githubRepo={project.githubRepo}
                            liveDemo={project.liveDemo}
                            extraClass={project.extraClass}
                        />
                    );
                })}
            </div>
            <ScrollBtn className={".js-portfolio-container"} />
        </>
    );
}

export default Portfolio;
