import "./Header.css";
import BurgerBtn from "./../burgerBtn/BurgerBtn";

function Header() {
  // addEventListener("scroll", () => {
  //   document
  //     .querySelector(".burger-button")
  //     .classList.remove("active-burger-button");
  //   document.querySelector(".header").classList.remove("active-header");
  //   document.querySelector(".header-nav").classList.remove("active-header-nav");
  //   document
  //     .querySelector(".header-socials")
  //     .classList.remove("active-header-socials");
  // if (window.scrollY > 100) {
  //   document.querySelector(".header").classList.add("header-scroll");
  // } else {
  //   document.querySelector(".header").classList.remove("header-scroll");
  // }
  // });

  // let lastScrollTop = 0;

  // addEventListener("scroll", () => {
  //   let header = document.querySelector(".header");

  //   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //   if (scrollTop > lastScrollTop) {
  //     header.style.transform = "translateY(-120px)";
  //   } else {
  //     header.style.transform = "translateY(0px)";
  //   }
  //   lastScrollTop = scrollTop;
  // });

  // // SOLUTION FOR HEADER ON MOBILE
  // addEventListener("scroll", () => {
  //   let header = document.querySelector(".header");

  //   if (window.pageYOffset <= 0 || window.pageYOffset <= 1000) {
  //     header.style.transform = "translateY(0px)";
  //   }
  // });

  addEventListener("scroll", () => {
    const linkHome = document.querySelector(".header-link-home");
    const linkSkills = document.querySelector(".header-link-skills");
    const linkProjects = document.querySelector(".header-link-projects");
    const linkContactMe = document.querySelector(".header-link-contact-me");

    if (
      document.querySelector("#section1").getBoundingClientRect().bottom > 200
    ) {
      linkHome.classList.add("active-link");
      linkSkills.classList.remove("active-link");
      linkProjects.classList.remove("active-link");
      linkContactMe.classList.remove("active-link");
    } else if (
      document.querySelector("#section2").getBoundingClientRect().bottom > 200
    ) {
      linkHome.classList.remove("active-link");
      linkSkills.classList.add("active-link");
      linkProjects.classList.remove("active-link");
      linkContactMe.classList.remove("active-link");
    } else if (
      document.querySelector("#section3").getBoundingClientRect().bottom > 200
    ) {
      linkHome.classList.remove("active-link");
      linkSkills.classList.remove("active-link");
      linkProjects.classList.add("active-link");
      linkContactMe.classList.remove("active-link");
    } else if (
      document.querySelector("#section4").getBoundingClientRect().bottom > 200
    ) {
      linkHome.classList.remove("active-link");
      linkSkills.classList.remove("active-link");
      linkProjects.classList.remove("active-link");
      linkContactMe.classList.add("active-link");
    }
  });

  return (
    <header className="header">
      <div className="logo-btn-container">
        <a href="#section1" className="header-logo">
          {/* <img className="header-logo js-logo" src={logo} alt="heeeyooo" /> */}
          Stepan Dordiai
          <br />
          Fron end Developer
        </a>
        {/* <BurgerBtn /> */}
      </div>
    </header>
  );
}

export default Header;
