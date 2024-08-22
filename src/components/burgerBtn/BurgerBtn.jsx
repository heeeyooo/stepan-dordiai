import "./BurgerBtn.css";

function BurgerBtn() {
  function toggleBtn() {
    document
      .querySelector(".burger-button")
      .classList.toggle("active-burger-button");
    document.querySelector(".header-nav").classList.toggle("active-header");
  }

  return (
    <>
      <div className="burger-container">
        <p className="menu-info">MENU</p>
        <div onClick={toggleBtn} className="burger-button"></div>
      </div>
    </>
  );
}

export default BurgerBtn;
