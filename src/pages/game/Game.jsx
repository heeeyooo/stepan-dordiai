import { useEffect } from "react";
import { useRef } from "react";
import img1 from "./images/css3.svg";
import img2 from "./images/html5.svg";
import img3 from "./images/figma.svg";
import img4 from "./images/js.svg";
import img5 from "./images/node.svg";
import img6 from "./images/git.svg";
import img7 from "./images/sass.svg";
import img8 from "./images/react.svg";
import "./Game.css";

const Game = () => {
    const section = useRef(null);

    useEffect(() => {
        lives();
        cardGenerator();
        document.title = "Stepan Dordiai | Game";
        if (
            (window.innerWidth > 1000 && window.innerHeight < 650) ||
            (window.innerWidth < 1000 && window.innerHeight < 600)
        ) {
            document.querySelector(".game").classList.add("none");
            document
                .querySelector(".rotate-container")
                .classList.remove("none");
        } else {
            document.querySelector(".game").classList.remove("none");
            document.querySelector(".rotate-container").classList.add("none");
        }
    }, []);

    let playerLives = ["❤", "❤", "❤", "❤", "❤", "❤"];

    const lives = () => {
        const livesCounts = document.querySelector(".js-lives-count");
        livesCounts.textContent = playerLives.join(" ");
    };

    const cardData = [
        {
            imgSrc: img1,
            name: "css",
        },
        {
            imgSrc: img2,
            name: "html",
        },
        {
            imgSrc: img3,
            name: "figma",
        },
        {
            imgSrc: img4,
            name: "js",
        },
        {
            imgSrc: img5,
            name: "node",
        },
        {
            imgSrc: img6,
            name: "git",
        },
        {
            imgSrc: img7,
            name: "sass",
        },
        {
            imgSrc: img8,
            name: "react",
        },
        {
            imgSrc: img1,
            name: "css",
        },
        {
            imgSrc: img2,
            name: "html",
        },
        {
            imgSrc: img3,
            name: "figma",
        },
        {
            imgSrc: img4,
            name: "js",
        },
        {
            imgSrc: img5,
            name: "node",
        },
        {
            imgSrc: img6,
            name: "git",
        },
        {
            imgSrc: img7,
            name: "sass",
        },
        {
            imgSrc: img8,
            name: "react",
        },
    ];

    const randomize = () => {
        return cardData.sort(() => Math.random() - 0.5);
    };

    function cardGenerator() {
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

    function startGame(text) {
        document.querySelector(".js-game__title-result").textContent = text;
        playerLives = ["❤", "❤", "❤", "❤", "❤", "❤"];
        lives();
        const randomCardData = randomize();
        const faces = document.querySelectorAll(".face");
        const cards = document.querySelectorAll(".card");
        randomCardData.forEach((item, index) => {
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
        });
        cards.forEach((item) => {
            item.style.pointerEvents = "none";
            item.classList.add("toggle-card");
            setTimeout(() => {
                item.style.pointerEvents = "all";
                item.classList.remove("toggle-card");
            }, 3000);
        });
        document
            .querySelector(".js-inactive-btn")
            .classList.add("game__btn--inactive");
        section.current.style.pointerEvents = "all";
    }

    function stopGame(text) {
        document.querySelector(".js-game__title-result").textContent = text;
        playerLives = ["❤", "❤", "❤", "❤", "❤", "❤"];
        lives();
        const cards = document.querySelectorAll(".card");
        cards.forEach((item) => {
            item.style.pointerEvents = "none";
            item.classList.remove("toggle-card");
        });
        document
            .querySelector(".js-inactive-btn")
            .classList.remove("game__btn--inactive");
        section.current.style.pointerEvents = "none";
        document.querySelector(".js-inactive-btn").textContent = "Play";
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
                playerLives.pop();
                lives();
                if (playerLives.length === 0) {
                    gameResult("You lose!");
                }
            }
        }
        if (toggleCards.length === 16) {
            gameResult("You win!");
        }
    }

    function gameResult(text) {
        document.querySelector(".js-game__title-result").textContent = text;
        const cards = document.querySelectorAll(".card");
        cards.forEach((item) => {
            item.style.pointerEvents = "none";
        });
        document
            .querySelector(".js-inactive-btn")
            .classList.remove("game__btn--inactive");
        section.current.style.pointerEvents = "none";
        document.querySelector(".js-inactive-btn").textContent = "Play again";
    }

    addEventListener("resize", () => {
        if (
            (window.innerWidth > 1000 && window.innerHeight < 650) ||
            (window.innerWidth < 1000 && window.innerHeight < 600)
        ) {
            document.querySelector(".game").classList.add("none");
            document
                .querySelector(".rotate-container")
                .classList.remove("none");
        } else {
            document.querySelector(".game").classList.remove("none");
            document.querySelector(".rotate-container").classList.add("none");
        }
    });

    return (
        <>
            <div className="game">
                <p className="game__title-result js-game__title-result">
                    Memory Card Game
                </p>
                <p className="game__lives">
                    Lives: <span className="js-lives-count"></span>
                </p>
                <div>
                    <section ref={section}></section>
                    <div className="game__btn-container">
                        <button
                            className="game__btn"
                            onClick={() => stopGame("Memory Card Game")}
                        >
                            Stop
                        </button>
                        <button
                            className="game__btn js-inactive-btn"
                            onClick={() => startGame("Memory Card Game")}
                        >
                            Play
                        </button>
                    </div>
                </div>
            </div>
            <div className="rotate-container none">
                <p className="rotate-font-img">
                    <i className="fa-solid fa-rotate"></i>
                </p>
                <p className="rotate-title">
                    Please rotate your device for better experience!
                </p>
            </div>
        </>
    );
};

export default Game;
