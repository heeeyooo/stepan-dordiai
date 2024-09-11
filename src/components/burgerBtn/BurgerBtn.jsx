import { useState, useEffect, useRef } from "react";
import "./BurgerBtn.css";

function BurgerBtn() {
  const [burgerBtn, setBurgerBtn] = useState(false);

  const refBurger = useRef(null);

  useEffect(() => {
    if (burgerBtn === true) {
      refBurger.current.classList.add("active-burger-btn");
      document
        .querySelector(".nav-list-container")
        .classList.add("active-nav-list-container");
      document.querySelector(".nav").classList.add("active-nav");
    } else {
      refBurger.current.classList.remove("active-burger-btn");
      document
        .querySelector(".nav-list-container")
        .classList.remove("active-nav-list-container");
      document.querySelector(".nav").classList.remove("active-nav");
    }
  }, [burgerBtn]);

  const toggleBurgerBtn = () => {
    setBurgerBtn((currentState) => {
      return currentState === false ? true : false;
    });
  };

  function brightCursor() {
    document.querySelector("#custom-cursor").classList.add("active-cursor");
  }

  function lowerCursor() {
    document.querySelector("#custom-cursor").classList.remove("active-cursor");
  }

  return (
    <div className="burger-container">
      <p className="burger-title">MENU</p>
      <div
        ref={refBurger}
        onClick={toggleBurgerBtn}
        onMouseEnter={brightCursor}
        onMouseLeave={lowerCursor}
        className="burger-btn"
      ></div>
    </div>
  );
}

export default BurgerBtn;
