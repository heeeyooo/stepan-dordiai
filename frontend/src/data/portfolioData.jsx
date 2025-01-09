import penguinVideo from "./videos/penguin.mp4";
import stepanDordiaiVideo from "./videos/stepan-dordiai.mp4";
import yagodaKarpatVideo from "./videos/yagoda-karpat.mp4";
import cloudImg from "./images/cloud.png";
import tastyBurgerImg from "./images/tasty-burger.png";

const portfolioData = [
    {
        id: 6,
        title: "Tasty Burger",
        production: "2024",
        titleDesk: "Special website",
        liveSite: "https://heeeyooo.github.io/tasty-burger/",
        githubRepo: "https://github.com/heeeyooo/tasty-burger",
        projectImg: tastyBurgerImg,
        videoNone: "none",
    },
    {
        id: 5,
        title: "Coffeefy",
        production: "2024",
        titleDesk: "E-commerce website",
        liveSite: "https://heeeyooo.github.io/coffeefy/",
        githubRepo: "https://github.com/heeeyooo/coffeefy",
        imgNone: "none",
        videoNone: "none",
    },
    {
        id: 4,
        title: "cloud.",
        production: "2024",
        titleDesk: "Weather website",
        liveSite: "https://cloud-project.netlify.app/",
        githubRepo: "https://github.com/heeeyooo/cloud",
        projectImg: cloudImg,
        videoNone: "none",
    },
    {
        id: 3,
        title: "Yagoda Karpat",
        production: "2024",
        titleDesk: "Business website",
        liveSite: "https://yagodakarpat.netlify.app/",
        githubRepo: "https://github.com/heeeyooo/yagoda-karpat",
        projectVideo: yagodaKarpatVideo,
        imgNone: "none",
    },
    {
        id: 2,
        title: "Stepan Dordiai",
        production: "2024",
        titleDesk: "Portfolio website",
        githubRepo: "https://github.com/heeeyooo/stepan-dordiai",
        projectVideo: stepanDordiaiVideo,
        imgNone: "none",
        liveSiteNone: "none",
    },
    {
        id: 1,
        title: "penguin",
        production: "2023",
        titleDesc: "Portfolio website",
        liveSite: "https://penguin-project.netlify.app/",
        githubRepo: "https://github.com/heeeyooo/penguin",
        projectVideo: penguinVideo,
        imgNone: "none",
    },
];

export default portfolioData;
