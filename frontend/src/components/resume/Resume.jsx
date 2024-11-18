import resume from "../../pdf/stepan-dordiai-resume-v1.1.0.pdf";
import "./Resume.css";

const Resume = () => {
    return (
        <a className="resume-link" href={resume} target="_blank">
            RESUME
        </a>
    );
};

export default Resume;
