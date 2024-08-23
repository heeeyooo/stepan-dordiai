import { useState, useEffect, useRef } from "react";
import "./BurgerBtn.css";

function BurgerBtn() {
  const [burgerBtn, setBurgerBtn] = useState(false);

  const refBurger = useRef(null);

  useEffect(() => {
    refBurger.current.classList.toggle("active-burger-btn");
    document
      .querySelector(".nav-list-container")
      .classList.toggle("active-nav-list-container");
    document.querySelector(".nav").classList.toggle("active-nav");
  }, [burgerBtn]);

  const toggleBurgerBtn = () => {
    setBurgerBtn((currentState) => {
      return currentState === false ? true : false;
    });
  };

  return (
    <div className="burger-container">
      <p className="burger-title">MENU</p>
      <div
        ref={refBurger}
        onClick={toggleBurgerBtn}
        className="burger-btn"
      ></div>
    </div>
  );
}

export default BurgerBtn;
