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
        let cardData = randomize();
        cardData.forEach((item) => {
            const topLeftCorner = document.createElement("div");
            const topRightCorner = document.createElement("div");
            const bottomRightCorner = document.createElement("div");
            const bottomLeftCorner = document.createElement("div");
            const card = document.createElement("div");
            const face = document.createElement("img");
            const back = document.createElement("div");

            topLeftCorner.classList = "card-top-left-corner";
            topRightCorner.classList = "card-top-right-corner";
            bottomRightCorner.classList = "card-bottom-right-corner";
            bottomLeftCorner.classList = "card-bottom-left-corner";

            card.classList = "card";
            face.classList = "face";
            back.classList = "back";

            back.appendChild(topLeftCorner);
            back.appendChild(topRightCorner);
            back.appendChild(bottomRightCorner);
            back.appendChild(bottomLeftCorner);

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
        section.current.style.pointerEvents = "none";
    }

    function startGame() {
        section.current.style.pointerEvents = "all";
        const cards = document.querySelectorAll(".card");
        cards.forEach((item) => {
            item.style.pointerEvents = "all";

            item.classList.add("toggle-card");
            setTimeout(() => {
                item.classList.remove("toggle-card");
            }, 3000);
        });
        document.querySelector(".game__play-btn").classList.add("inactive-btn");
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
        console.log(toggleCards.length);
        if (toggleCards.length === 16) {
            restart("you win");
        }
    }

    function restart(text) {
        let cardData = randomize();
        let faces = document.querySelectorAll(".face");
        const cards = document.querySelectorAll(".card");
        cardData.forEach((item, index) => {
            cards[index].style.pointerEvents = "none";
            cards[index].classList.remove("toggle-card");
            setTimeout(() => {
                faces[index].src = item.imgSrc;
                cards[index].setAttribute("name", item.name);
                // section.current.style.pointerEvents = "all";
            }, 1000);
        });
        playerLives = 6;
        lives();
        setTimeout(() => alert(text), 100);
        section.current.style.pointerEvents = "none";
        document
            .querySelector(".game__play-btn")
            .classList.remove("inactive-btn");
    }

    useEffect(() => {
        lives();
        cardGenerator();
    }, []);

    return (
        <div className="game">
            <p className="game__lives">
                Lives: <span className="lives-count"></span>
            </p>
            <section ref={section}></section>
            <button className="game__play-btn" onClick={startGame}>
                Play
            </button>
        </div>
    );
};

export default Game;
