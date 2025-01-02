import mongodbIcon from "./images/mongodb-icon.svg";
import cloudImg from "./images/cloud.png";
import yagodaKarpatVideo from "./videos/yagoda-karpat.mp4";
import tastyBurgerImg from "./images/tasty-burger.png";
import penguinVideo from "./videos/penguin.mp4";
import stepanDordiaiVideo from "./videos/stepan-dordiai.mp4";

const portfolioData = [
    {
        id: 1,
        title: "penguin",
        titleName: "Portfolio website",
        skills: [<i className="fa-brands fa-react"></i>],
        githubRepo: "https://github.com/heeeyooo/penguin",
        liveDemo: "https://penguin-project.netlify.app/",
        projectVideo: penguinVideo,
        production: "2023",
        imgClass: "link--none",
    },
    {
        id: 2,
        title: "Stepan Dordiai",
        titleName: "Portfolio website",
        skills: [
            <i className="fa-brands fa-react"></i>,
            <i className="fa-brands fa-node"></i>,
            <p style={{ height: 20, verticalAlign: "middle" }}>ex</p>,
            <img
                src={mongodbIcon}
                style={{ height: 20, verticalAlign: "middle" }}
                alt="Mongo DB"
            />,
        ],
        githubRepo: "https://github.com/heeeyooo/stepan-dordiai",
        imgClass: "link--none",
        projectVideo: stepanDordiaiVideo,
        production: "2024",
        extraClass: "link--none",
    },
    {
        id: 3,
        title: "Yagoda Karpat",
        titleName: "Business website",
        skills: [<i className="fa-brands fa-react"></i>, <span>Swiper</span>],
        githubRepo: "https://github.com/heeeyooo/yagoda-karpat",
        liveDemo: "https://yagodakarpat.netlify.app/",
        projectVideo: yagodaKarpatVideo,
        production: "2024",
        imgClass: "link--none",
    },
    {
        id: 4,
        title: "cloud",
        titleName: "Weather website",
        skills: [
            <i className="fa-brands fa-html5"></i>,
            <i className="fa-brands fa-sass"></i>,
            <i className="fa-brands fa-square-js"></i>,
            <span>BEM</span>,
            <span>Day.js</span>,
        ],
        githubRepo: "https://github.com/heeeyooo/cloud",
        liveDemo: "https://cloud-project.netlify.app/",
        projectImg: cloudImg,
        production: "2024",
        videoClass: "link--none",
    },
    {
        id: 5,
        title: "Coffeefy",
        titleName: "E-commerce website",
        skills: [
            <i className="fa-brands fa-html5"></i>,
            <i className="fa-brands fa-css3-alt"></i>,
            <i className="fa-brands fa-square-js"></i>,
            <span>BEM</span>,
            <span>Day.js</span>,
        ],
        githubRepo: "https://github.com/heeeyooo/coffeefy",
        liveDemo: "https://heeeyooo.github.io/coffeefy/",
        production: "2024",
        imgClass: "link--none",
        videoClass: "link--none",
    },
    {
        id: 6,
        title: "Tasty Burger",
        titleName: "Special website",
        skills: [
            <i className="fa-brands fa-html5"></i>,
            <i className="fa-brands fa-css3-alt"></i>,
            <i className="fa-brands fa-square-js"></i>,
            <span>BEM</span>,
        ],
        githubRepo: "https://github.com/heeeyooo/tasty-burger",
        liveDemo: "https://heeeyooo.github.io/tasty-burger/",
        projectImg: tastyBurgerImg,
        production: "2024",
        videoClass: "link--none",
    },
];

export default portfolioData;
