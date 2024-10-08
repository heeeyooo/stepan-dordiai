import { NavLink } from "react-router-dom";
import BurgerBtn from "../burgerBtn/BurgerBtn";
import "./Nav.css";

function Nav() {
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
                        to="/"
                    >
                        <span>HOME</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => {
                            return isActive ? activeLink : inactiveLink;
                        }}
                        to="/about"
                    >
                        <span>ABOUT</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => {
                            return isActive ? activeLink : inactiveLink;
                        }}
                        to="/skills"
                    >
                        <span>SKILLS</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => {
                            return isActive ? activeLink : inactiveLink;
                        }}
                        to="/portfolio"
                    >
                        <span>PORTFOLIO</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => {
                            return isActive ? activeLink : inactiveLink;
                        }}
                        to="/contact"
                    >
                        <span>CONTACT</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => {
                            return isActive ? activeLink : inactiveLink;
                        }}
                        to="/playground"
                    >
                        <span>PLAYGROUND</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => {
                            return isActive ? activeLink : inactiveLink;
                        }}
                        to="/game"
                    >
                        <span className="game-font">GAME</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
