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
  return (
    <nav className="nav">
      <BurgerBtn />
      <ul className="nav-list-container">
        <li>
          <NavLink
            className="link-home target-link"
            onMouseEnter={brightCursor}
            onMouseLeave={lowerCursor}
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            className="link-about target-link"
            onMouseEnter={brightCursor}
            onMouseLeave={lowerCursor}
            to="/about"
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            className="link-skills target-link"
            onMouseEnter={brightCursor}
            onMouseLeave={lowerCursor}
            to="/skills"
          >
            SKILLS
          </NavLink>
        </li>
        <li>
          <NavLink
            className="link-portfolio target-link"
            onMouseEnter={brightCursor}
            onMouseLeave={lowerCursor}
            to="/portfolio"
          >
            PORTFOLIO
          </NavLink>
        </li>
        <li>
          <NavLink
            className="link-contact target-link"
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
