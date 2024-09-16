import { NavLink } from "react-router-dom";
import BurgerBtn from "../burgerBtn/BurgerBtn";
import "./Nav.css";

function Nav() {
  function brightCursor() {
    document.querySelector("#custom-cursor").classList.add("active-cursor");
  }

  function lowerCursor() {
    document.querySelector("#custom-cursor").classList.remove("active-cursor");
  }

  const activeLink = "nav__link nav__link--active";
  const inactiveLink = "nav__link";

  return (
    <nav className="nav">
      <BurgerBtn />
      <ul className="nav__list">
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? activeLink : inactiveLink;
            }}
            onMouseEnter={brightCursor}
            onMouseLeave={lowerCursor}
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? activeLink : inactiveLink;
            }}
            onMouseEnter={brightCursor}
            onMouseLeave={lowerCursor}
            to="/about"
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? activeLink : inactiveLink;
            }}
            onMouseEnter={brightCursor}
            onMouseLeave={lowerCursor}
            to="/skills"
          >
            SKILLS
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? activeLink : inactiveLink;
            }}
            onMouseEnter={brightCursor}
            onMouseLeave={lowerCursor}
            to="/portfolio"
          >
            PORTFOLIO
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? activeLink : inactiveLink;
            }}
            onMouseEnter={brightCursor}
            onMouseLeave={lowerCursor}
            to="/contact"
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
