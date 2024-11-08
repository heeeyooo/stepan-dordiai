import { useEffect } from "react";
import Project from "../../components/project/Project";
import PROJECTSDATA from "../../data/projectsData";
import "./Portfolio.css";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";

function Portfolio() {
    useEffect(() => {
        document.title = "Stepan Dordiai | Portfolio";
    }, []);

    return (
        <>
            <div className="portfolio-container js-portfolio-container">
                {PROJECTSDATA.map((project) => {
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
