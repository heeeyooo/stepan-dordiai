import { NavLink } from "react-router-dom";
import BurgerBtn from "../burgerBtn/BurgerBtn";
import "./Nav.css";

function Nav() {
    const activeLink = "nav__link nav__link--active";
    const inactiveLink = "nav__link";

    return (
        <nav className="nav">
            <div className="nav__header">
                <h1 className="nav__logo-title">
                    STEPAN DORDIAI <span>PORTFOLIO</span>
                </h1>
            </div>
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
                        to="/games"
                    >
                        <span className="game-link-font">GAMES</span>
                    </NavLink>
                </li>
            </ul>
            <div className="nav__footer">
                <ul className="nav__footer-list">
                    <li>
                        <a
                            href="https://github.com/heeeyooo"
                            target="_blank"
                            title="GitHub"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://t.me/heeeyooo"
                            target="_blank"
                            title="Telegram"
                        >
                            <i class="fa-brands fa-telegram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
