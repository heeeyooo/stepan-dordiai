import { useEffect } from "react";

// FIXME: Is it okay to use these names (className, animation) for parameters?
function AnimateElements(className, animation, time = 100, projects) {
    const revealElements = () => {
        document.querySelectorAll(className).forEach((element, index) => {
            // FIXME: setTimeout or setInterval?
            setTimeout(() => {
                element.style.animation = animation;
            }, time * index);
        });
    };

    useEffect(() => {
        // I check if preload is active (if it is i wait until it ends (duration 3 sec))
        if (document.querySelector(".loading").style.display === "initial") {
            // setTimeout(() => {
            // revealElements();
            // }, 3000);
            document
                .querySelector(".loading")
                .addEventListener("animationend", () => {
                    revealElements();
                });
        } else {
            revealElements();
        }
        // I use this dependency to start animation after the data r loaded
    }, [projects]);

    return <></>;
}

export default AnimateElements;
