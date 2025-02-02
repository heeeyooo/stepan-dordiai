import { Helmet } from "react-helmet";
import { useEffect } from "react";
import shipPng from "./img/ship.png";
import alienPng from "./img/alien.png";
import "./InvadersGame.scss";

const InvadersGame = () => {
    const pageTitle = "Invaders Game";

    // board
    let tileSize;
    let rows;
    let columns;

    // useEffect(() => {
    if (window.innerWidth < 600) {
        tileSize = 24;
        rows = 12;
        columns = 12;
    } else {
        tileSize = 32;
        rows = 16;
        columns = 16;
    }
    // }, []);

    let board;
    let boardWidth = tileSize * columns; // 32* 16
    let boardHeight = tileSize * rows;
    let context;

    // ship
    let shipWidth = tileSize * 2;
    let shipHeight = tileSize;
    let shipX = tileSize * (columns / 2) - tileSize;
    let shipY = tileSize * rows - tileSize * 2;

    let ship = {
        x: shipX,
        y: shipY,
        width: shipWidth,
        height: shipHeight,
    };

    let shipImg;
    let shipVelocityX = tileSize; //ship moving speed

    // aliens
    let alienArray = [];
    let alienWidth = tileSize * 2;
    let alienHeight = tileSize;
    let alienX = tileSize;
    let alienY = tileSize;
    let alienImg;

    let alienRows = 2;
    let alienColumns = 3;
    let alienCount = 0; // number of aliens to defeat
    let alienVelocityX = 1;

    // bullets
    let bulletArray = [];
    let bulletVelocityY = -10; //bullet moving speed

    // score
    let score = 0;
    let gameOver = false;

    // window.onload = function () {
    useEffect(() => {
        board = document.getElementById("board");
        board.width = boardWidth;
        board.height = boardHeight;
        board.fillRect = "black";
        context = board.getContext("2d");

        // draw initial ship
        // context.fillStyle = "green";
        // context.fillRect(ship.x, ship.y, ship.width, ship.height);
        shipImg = new Image();
        shipImg.src = shipPng;
        shipImg.onload = function () {
            context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
        };

        alienImg = new Image();
        alienImg.src = alienPng;
        createAliens();

        requestAnimationFrame(update);
        document.addEventListener("keydown", moveShip);
        document.addEventListener("keyup", shoot);
        document
            .querySelector(".js-move-left-side")
            .addEventListener("click", () => {
                if (ship.x - shipVelocityX >= 0) {
                    ship.x -= shipVelocityX;
                }
                shoot();
            });
        document
            .querySelector(".js-move-right-side")
            .addEventListener("click", () => {
                if (ship.x + shipVelocityX + ship.width <= board.width) {
                    ship.x += shipVelocityX;
                }
                shoot();
            });
    }, []);
    // };

    function update() {
        requestAnimationFrame(update);
        if (gameOver) {
            return;
        }

        context.clearRect(0, 0, board.width, board.height);

        // ship
        context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);

        // alien
        for (let i = 0; i < alienArray.length; i++) {
            let alien = alienArray[i];

            if (alien.alive) {
                alien.x += alienVelocityX;
                // IF ALIEN TOUCHES THE BORDERS

                if (alien.x + alien.width >= board.width || alien.x <= 0) {
                    alienVelocityX *= -1;
                    alien.x += alienVelocityX * 2;
                    // move all aliens up by one row
                    for (let j = 0; j < alienArray.length; j++) {
                        alienArray[j].y += alienHeight;
                    }
                }

                context.drawImage(
                    alienImg,
                    alien.x,
                    alien.y,
                    alien.width,
                    alien.height
                );
                if (alien.y >= ship.y) {
                    gameOver = true;
                }
            }
        }

        //bullets
        for (let i = 0; i < bulletArray.length; i++) {
            let bullet = bulletArray[i];
            bullet.y += bulletVelocityY;
            context.fillStyle = "white";
            context.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);

            //bullet collision with aliens
            for (let j = 0; j < alienArray.length; j++) {
                let alien = alienArray[j];
                if (
                    !bullet.used &&
                    alien.alive &&
                    detectCollision(bullet, alien)
                ) {
                    bullet.used = true;
                    alien.alive = false;
                    alienCount--;
                    score += 100;
                }
            }
        }

        //clear bullets
        while (
            bulletArray.length > 0 &&
            (bulletArray[0].used || bulletArray[0].y < 0)
        ) {
            bulletArray.shift(); //removes first element from the array
        }

        //next level
        if (alienCount == 0) {
            //increase the number of aliens in columns and rows by 1
            // math.min returns the smallest value
            alienColumns = Math.min(alienColumns + 1, columns / 2 - 2); //cap at 16/2 - 2 = 6
            alienRows = Math.min(alienRows + 1, rows - 4); // cap at 16 - 4 12
            alienVelocityX += 0.2; //increase the alien movement speed
            alienArray = [];
            bulletArray = [];
            createAliens();
        }

        //score
        context.fillStyle = "white";
        context.font = "16px courier";
        context.fillText(score, 5, 20);
    }

    function moveShip(e) {
        if (gameOver) {
            return;
        }
        if (e.code == "ArrowLeft" && ship.x - shipVelocityX >= 0) {
            ship.x -= shipVelocityX;
        } else if (
            e.code == "ArrowRight" &&
            ship.x + shipVelocityX + ship.width <= board.width
        ) {
            ship.x += shipVelocityX;
        }
    }

    function createAliens() {
        for (let c = 0; c < alienColumns; c++) {
            for (let r = 0; r < alienRows; r++) {
                let alien = {
                    img: alienImg,
                    x: alienX + c * alienWidth,
                    y: alienY + r * alienHeight,
                    width: alienWidth,
                    height: alienHeight,
                    alive: true,
                };
                alienArray.push(alien);
            }
        }
        alienCount = alienArray.length;
    }

    function shoot() {
        if (gameOver) {
            return;
        }
        // if (e.code == "Space") {
        // while (true) {
        //shoot
        let bullet = {
            x: ship.x + (shipWidth * 15) / 32,
            y: ship.y,
            width: tileSize / 8,
            height: tileSize / 2,
            used: false,
        };
        bulletArray.push(bullet);
        // }

        // }
    }

    function detectCollision(a, b) {
        return (
            a.x < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y
        );
    }

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <canvas id="board" className="board"></canvas>
            <div className="move-left-side js-move-left-side"></div>
            <div className="move-right-side js-move-right-side"></div>
        </>
    );
};

export default InvadersGame;
