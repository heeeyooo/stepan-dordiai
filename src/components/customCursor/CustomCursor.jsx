import { useEffect } from "react";
import { isTouchDevice } from "../../utils/isTouchDevice";
import "./CustomCursor.css";

const CustomCursor = () => {
    // i use useeffect to handle the condition once when load page
    useEffect(() => {
        if (!isTouchDevice()) {
            document.querySelector("#custom-cursor").style.display = "flex";
            document.querySelector("#circle").style.display = "flex";
        } else {
            document.querySelector("#custom-cursor").style.display = "none";
            document.querySelector("#circle").style.display = "none";
        }
    }, []);

    addEventListener("mouseover", () => {
        if (!isTouchDevice()) {
            document.querySelector("#custom-cursor").style.display = "flex";
            document.querySelector("#circle").style.display = "flex";
        } else {
            document.querySelector("#custom-cursor").style.display = "none";
            document.querySelector("#circle").style.display = "none";
        }
    });

    addEventListener("mouseout", () => {
        if (!isTouchDevice()) {
            document.querySelector("#custom-cursor").style.display = "none";
            document.querySelector("#circle").style.display = "none";
        } else {
            document.querySelector("#custom-cursor").style.display = "none";
            document.querySelector("#circle").style.display = "none";
        }
    });

    // position for custom cursor
    addEventListener("mousemove", (event) => {
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        document.querySelector("#custom-cursor").style.left = mouseX + "px";
        document.querySelector("#custom-cursor").style.top = mouseY + "px";
        document.querySelector("#circle").style.left = mouseX + "px";
        document.querySelector("#circle").style.top = mouseY + "px";
    });

    return (
        <>
            <div id="circle"></div>
            <div id="custom-cursor"></div>
        </>
    );
};

export default CustomCursor;
