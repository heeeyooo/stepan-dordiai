import { useState, useEffect, useRef } from "react";
import "./BurgerBtn.css";

function BurgerBtn() {
    const [burgerBtn, setBurgerBtn] = useState(false);

    const refBurger = useRef(null);

    useEffect(() => {
        if (burgerBtn) {
            refBurger.current.classList.add("active-burger-btn");
            document.querySelector(".nav").classList.add("nav--active");
        } else {
            refBurger.current.classList.remove("active-burger-btn");
            document.querySelector(".nav").classList.remove("nav--active");
        }
    }, [burgerBtn]);

    const toggleBurgerBtn = () => {
        setBurgerBtn((currentState) => {
            return currentState === false ? true : false;
        });
    };

    // close menu when page resize
    addEventListener("resize", () => {
        document.querySelector(".nav").classList.remove("nav--active");
        document
            .querySelector(".burger-btn")
            .classList.remove("active-burger-btn");
    });

    return (
        <div onClick={toggleBurgerBtn} className="burger-container">
            <p className="burger-title">MENU</p>
            <div ref={refBurger} className="burger-btn js-burger-btn"></div>
        </div>
    );
}

export default BurgerBtn;
