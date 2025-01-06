import { useEffect } from "react";
import "./Home.scss";

function Home() {
    useEffect(() => {
        document.title = "Stepan Dordiai | Home";
    }, []);

    useEffect(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            if (
                document.querySelector(".loading").style.display === "initial"
            ) {
                // setTimeout(() => {
                //     addAnimation();
                //     showText();
                // }, 3000);
                document
                    .querySelector(".loading")
                    .addEventListener("animationend", () => {
                        addAnimation();
                        showText();
                    });
            } else {
                addAnimation();
                showText();
            }
        }
    }, []);

    function addAnimation() {
        const scrollers = document.querySelectorAll(".scroller");

        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);

            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    }

    function showText() {
        const text = document.querySelector(".home-section__title");
        let textHTML = "";
        text.innerHTML.split("").forEach((char) => {
            textHTML += `<span>${char}</span>`;
        });

        text.innerHTML = textHTML;

        document
            .querySelectorAll(".home-section__title span")
            .forEach((char, index) => {
                setTimeout(() => {
                    char.style.animation = "revealChar 1s forwards";
                }, 100 * index);
            });
    }

    return (
        <section className="home">
            <div className="scroller" data-speed="slow" data-direction="left">
                <div className="scroller__inner">
                    <p className="home-section__title">
                        STEPAN DORDIAI FRONT-END DEVELOPER
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Home;
