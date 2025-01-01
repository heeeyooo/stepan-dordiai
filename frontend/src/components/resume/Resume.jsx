import resume from "../../pdf/stepan-dordiai-cv-v2.2.1.pdf";
import "./Resume.scss";

const Resume = () => {
    return (
        <a className="resume-link" href={resume} target="_blank">
            RESUME
        </a>
    );
};

export default Resume;
