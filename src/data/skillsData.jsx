import tsIcon from "./img/icons/ts-icon.svg";
import { v4 as uuidv4 } from "uuid";

// I'm using uuid external library for unique id
const SKILLSDATA = [
    {
        id: uuidv4(),
        name: "Python",
        icon: [<i className="fa-brands fa-python"></i>],
        info: "backend",
    },
    {
        id: uuidv4(),
        name: "HTML",
        icon: [<i className="fa-brands fa-html5"></i>],
        info: "frontend",
    },
    {
        id: uuidv4(),
        name: "CSS",
        icon: [<i className="fa-brands fa-css3-alt"></i>],
        info: "frontend",
    },
    {
        id: uuidv4(),
        name: "JavaScript",
        icon: [<i className="fa-brands fa-square-js"></i>],
        info: "frontend",
    },
    {
        id: uuidv4(),
        name: "Git",
        icon: [<i className="fa-brands fa-git-alt"></i>],
        info: "ui-ux",
    },
    {
        id: uuidv4(),
        name: "Github",
        icon: [<i className="fa-brands fa-github"></i>],
        info: "ui-ux",
    },
    {
        id: uuidv4(),
        name: "SASS",
        icon: [<i className="fa-brands fa-sass"></i>],
        info: "frontend",
    },
    {
        id: uuidv4(),
        name: "Figma",
        icon: [<i className="fa-brands fa-figma"></i>],
        info: "ui-ux",
    },
    {
        id: uuidv4(),
        name: "React.js",
        icon: [<i className="fa-brands fa-react"></i>],
        info: "frontend",
    },
    {
        id: uuidv4(),
        name: "Node.js",
        icon: [<i className="fa-brands fa-node"></i>],
        info: "currently-learning",
    },
    {
        id: uuidv4(),
        name: "Bootstrap",
        icon: [<i className="fa-brands fa-bootstrap"></i>],
        info: "frontend",
    },
    {
        id: uuidv4(),
        name: "TypeScript",
        icon: [<img className="img-icon" src={tsIcon} alt="TypeScript" />],
        info: "currently-learning",
    },
];

export default SKILLSDATA;
