import penguinVideo from "./videos/penguin.mp4";
import stepanDordiaiVideo from "./videos/stepan-dordiai.mp4";
import cloudImg from "./images/cloud.png";
import tastyBurgerImg from "./images/tasty-burger.png";
import yagodaKarpatUAVideo from "./videos/yagoda-karpat-ua.mp4";

const portfolioData = [
    {
        id: 5,
        title: "Yagoda Karpat (UA)",
        production: "January | 2025",
        titleDesc: "Business website",
        liveSite: "https://yagodakarpat-ua.netlify.app/",
        githubRepo: "https://github.com/heeeyooo/yagoda-karpat-ua",
        projectVideo: yagodaKarpatUAVideo,
        imgNone: "none",
    },
    {
        id: 4,
        title: "Tasty Burger",
        production: "September | 2024",
        titleDesc: "Special website",
        liveSite: "https://heeeyooo.github.io/tasty-burger/",
        githubRepo: "https://github.com/heeeyooo/tasty-burger",
        projectImg: tastyBurgerImg,
        videoNone: "none",
    },
    {
        id: 3,
        title: "cloud.",
        production: "August | 2024",
        titleDesc: "Weather website",
        liveSite: "https://cloud-project.netlify.app/",
        githubRepo: "https://github.com/heeeyooo/cloud",
        projectImg: cloudImg,
        videoNone: "none",
    },
    {
        id: 2,
        title: "Stepan Dordiai",
        production: "July | 2024",
        titleDesc: "Portfolio website",
        githubRepo: "https://github.com/heeeyooo/stepan-dordiai",
        projectVideo: stepanDordiaiVideo,
        imgNone: "none",
        liveSiteNone: "none",
    },
    {
        id: 1,
        title: "penguin",
        production: "November | 2023",
        titleDesc: "Portfolio website",
        liveSite: "https://penguin-project.netlify.app/",
        githubRepo: "https://github.com/heeeyooo/penguin",
        projectVideo: penguinVideo,
        imgNone: "none",
    },
];

export default portfolioData;
