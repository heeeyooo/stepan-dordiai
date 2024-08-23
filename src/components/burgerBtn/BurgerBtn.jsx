import "./BurgerBtn.css";

function BurgerBtn() {
  function toggleBtn() {
    document.querySelector(".burger-btn").classList.toggle("active-burger-btn");
    document
      .querySelector(".nav-list-container")
      .classList.toggle("active-nav-list-container");
    document.querySelector(".nav").classList.toggle("active-nav");
  }

  return (
    <div className="burger-container">
      <p className="burger-title">MENU</p>
      <div onClick={toggleBtn} className="burger-btn"></div>
    </div>
  );
}

export default BurgerBtn;
