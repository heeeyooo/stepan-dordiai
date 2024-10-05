import { useEffect } from "react";
import "./Game.css";
import { useRef } from "react";
import img1 from "./images/css3.svg";
import img2 from "./images/html5.svg";
import img3 from "./images/figma.svg";
import img4 from "./images/js.svg";
import img5 from "./images/node.svg";
import img6 from "./images/git.svg";
import img7 from "./images/sass.svg";
import img8 from "./images/react.svg";

const Game = () => {
    let playerLives = 6;

    const lives = () => {
        const livesCounts = document.querySelector(".lives-count");
        livesCounts.textContent = playerLives;
    };

    const gameData = [
        {
            imgSrc: img1,
            name: "css",
        },
        {
            imgSrc: img2,
            name: "figma",
        },
        {
            imgSrc: img3,
            name: "git",
        },
        {
            imgSrc: img4,
            name: "html",
        },
        {
            imgSrc: img5,
            name: "js",
        },
        {
            imgSrc: img6,
            name: "node",
        },
        {
            imgSrc: img7,
            name: "react",
        },
        {
            imgSrc: img8,
            name: "sass",
        },
        {
            imgSrc: img1,
            name: "css",
        },
        {
            imgSrc: img2,
            name: "figma",
        },
        {
            imgSrc: img3,
            name: "git",
        },
        {
            imgSrc: img4,
            name: "html",
        },
        {
            imgSrc: img5,
            name: "js",
        },
        {
            imgSrc: img6,
            name: "node",
        },
        {
            imgSrc: img7,
            name: "react",
        },
        {
            imgSrc: img8,
            name: "sass",
        },
    ];

    const randomize = () => {
        gameData.sort(() => Math.random() - 0.5);
        return gameData;
    };

    const section = useRef(null);

    function cardGenerator() {
        const cardData = randomize();
        cardData.forEach((item) => {
            const card = document.createElement("div");
            const face = document.createElement("img");
            const back = document.createElement("div");
            card.classList = "card";
            face.classList = "face";
            back.classList = "back";
            section.current.appendChild(card);
            card.appendChild(face);
            card.appendChild(back);

            face.src = item.imgSrc;
            card.setAttribute("name", item.name);
            card.addEventListener("click", (event) => {
                card.classList.toggle("toggle-card");
                const clickedCard = event.target;
                clickedCard.classList.toggle("flipped");
                checkCards();
            });
        });
        let cards = document.querySelectorAll(".card");
        cardData.forEach((item, index) => {
            setTimeout(() => {
                cards[index].classList.add("toggle-card");
            }, 1000);
            setTimeout(() => {
                cards[index].classList.remove("toggle-card");
            }, 3000);
        });
    }

    function checkCards() {
        const flippedCards = document.querySelectorAll(".flipped");
        const toggleCards = document.querySelectorAll(".toggle-card");
        if (flippedCards.length === 2) {
            if (
                flippedCards[0].getAttribute("name") ===
                flippedCards[1].getAttribute("name")
            ) {
                flippedCards.forEach((card) => {
                    card.classList.remove("flipped");
                    card.style.pointerEvents = "none";
                });
            } else {
                flippedCards.forEach((card) => {
                    card.classList.remove("flipped");
                    setTimeout(() => {
                        card.classList.remove("toggle-card");
                    }, 1000);
                });
                playerLives--;
                lives();
                if (playerLives === 0) {
                    restart("you lose");
                }
            }
        }
        if (toggleCards.length === 16) {
            restart("you win");
        }
    }

    const restart = (text) => {
        let cardData = randomize();
        let faces = document.querySelectorAll(".face");
        cards;
        section.current.style.pointerEvents = "none";
        cardData.forEach((item, index) => {
            cards[index].classList.remove("toggle-card");
            setTimeout(() => {
                cards[index].style.pointerEvents = "all";
                faces[index].src = item.imgSrc;
                cards[index].setAttribute("name", item.name);
                section.current.style.pointerEvents = "all";
            }, 1000);
        });
        playerLives = 6;
        lives();
        setTimeout(() => alert(text), 100);
    };

    useEffect(() => {
        lives();
        cardGenerator();
    }, []);

    return (
        <div className="game-container">
            <h1>
                Lives: <span className="lives-count"></span>
            </h1>
            <section ref={section}></section>
        </div>
    );
};

export default Game;
