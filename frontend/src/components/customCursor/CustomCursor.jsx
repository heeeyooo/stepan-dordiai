import { useEffect } from "react";
import { isTouchDevice } from "../../utils/isTouchDevice";
import "./CustomCursor.css";

const CustomCursor = () => {
    // i use useeffect to handle the condition once when load page
    useEffect(() => {
        if (!isTouchDevice()) {
            document.querySelector("#custom-cursor").style.display = "flex";
        } else {
            document.querySelector("#custom-cursor").style.display = "none";
        }
    }, []);

    addEventListener("mouseover", () => {
        if (!isTouchDevice()) {
            document.querySelector("#custom-cursor").style.display = "flex";
        } else {
            document.querySelector("#custom-cursor").style.display = "none";
        }
    });

    addEventListener("mouseout", () => {
        if (!isTouchDevice()) {
            document.querySelector("#custom-cursor").style.display = "none";
        } else {
            document.querySelector("#custom-cursor").style.display = "none";
        }
    });

    // position for custom cursor
    addEventListener("mousemove", (event) => {
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        document.querySelector("#custom-cursor").style.left = mouseX + "px";
        document.querySelector("#custom-cursor").style.top = mouseY + "px";
    });

    return (
        <div id="custom-cursor">
            <div className="text">
                <p></p>
            </div>
        </div>
    );
};

export default CustomCursor;
