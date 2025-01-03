import { v4 as uuidv4 } from "uuid";
import penguinVideo from "./videos/penguin.mp4";
import stepanDordiaiVideo from "./videos/stepan-dordiai.mp4";
import yagodaKarpatVideo from "./videos/yagoda-karpat.mp4";
import cloudImg from "./images/cloud.png";
import tastyBurgerImg from "./images/tasty-burger.png";

const portfolioData = [
    {
        id: uuidv4(),
        title: "penguin",
        production: "2023",
        titleDesc: "Portfolio website",
        liveSite: "https://penguin-project.netlify.app/",
        githubRepo: "https://github.com/heeeyooo/penguin",
        projectVideo: penguinVideo,
        imgNone: "none",
    },
    {
        id: uuidv4(),
        title: "Stepan Dordiai",
        production: "2024",
        titleDesk: "Portfolio website",
        githubRepo: "https://github.com/heeeyooo/stepan-dordiai",
        projectVideo: stepanDordiaiVideo,
        imgNone: "none",
        liveSiteNone: "none",
    },
    {
        id: uuidv4(),
        title: "Yagoda Karpat",
        production: "2024",
        titleDesk: "Business website",
        liveSite: "https://yagodakarpat.netlify.app/",
        githubRepo: "https://github.com/heeeyooo/yagoda-karpat",
        projectVideo: yagodaKarpatVideo,
        imgNone: "none",
    },
    {
        id: uuidv4(),
        title: "cloud",
        production: "2024",
        titleDesk: "Weather website",
        liveSite: "https://cloud-project.netlify.app/",
        githubRepo: "https://github.com/heeeyooo/cloud",
        projectImg: cloudImg,
        videoNone: "none",
    },
    {
        id: uuidv4(),
        title: "Coffeefy",
        production: "2024",
        titleDesk: "E-commerce website",
        liveSite: "https://heeeyooo.github.io/coffeefy/",
        githubRepo: "https://github.com/heeeyooo/coffeefy",
        imgNone: "none",
        videoNone: "none",
    },
    {
        id: uuidv4(),
        title: "Tasty Burger",
        production: "2024",
        titleDesk: "Special website",
        liveSite: "https://heeeyooo.github.io/tasty-burger/",
        githubRepo: "https://github.com/heeeyooo/tasty-burger",
        projectImg: tastyBurgerImg,
        videoNone: "none",
    },
];

export default portfolioData;
