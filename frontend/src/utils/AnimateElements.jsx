import { useEffect } from "react";
import { useLocalStorage } from "./UseLocalStorage";

// FIXME: Is it okay to use these names (className, animation) for parameters?
function AnimateElements(className, animation, param) {
    const [active, setActive] = useLocalStorage("animateElements", false);

    useEffect(() => {
        setTimeout(() => {
            setActive((current) => (current = true));
        }, 3000);
    }, []);

    useEffect(() => {
        if (active) {
            document.querySelectorAll(className).forEach((skill, index) => {
                // FIXME: setTimeout or setInterval?
                setTimeout(() => {
                    skill.style.animation = animation;
                }, 100 * index);
            });
        }
    }, [active, param]);

    // Reset to false on refresh
    window.onbeforeunload = () => {
        localStorage.setItem("animateElements", false);
    };
    return <></>;
}

export default AnimateElements;
