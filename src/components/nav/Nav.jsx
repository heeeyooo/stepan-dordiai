import "./Nav.css";
import Resume from "./../../pdf/heeeyooo-resume.pdf";
import { NavLink } from "react-router-dom";
import BurgerBtn from "../burgerBtn/BurgerBtn";

function Nav() {
  return (
    <>
      <nav className="nav">
        <BurgerBtn />
        <ul className="header-nav">
          <li>
            <NavLink className="link-home" to="/">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink className="link-about" to="/about">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink className="link-skills" to="/skills">
              SKILLS
            </NavLink>
          </li>
          <li>
            <NavLink className="link-portfolio" to="/portfolio">
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink className="link-contact" to="/contact">
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
