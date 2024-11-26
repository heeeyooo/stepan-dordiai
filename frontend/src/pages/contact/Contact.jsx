import { useEffect } from "react";
import AnimateElements from "../../utils/AnimateElements";
import { makeCursorActive, makeCursorNormal } from "../../utils/cursorState";
import "./Contact.css";

function Contact() {
    useEffect(() => {
        document.title = "Stepan Dordiai | Contact";
    }, []);

    function copyEmail() {
        const emailInput = document.querySelector(".email-input");
        const emailValue = emailInput.value;
        //
        navigator.clipboard.writeText(emailValue);
        //
        document.querySelector(".email-copy-btn").innerHTML = "Copied";
        setTimeout(() => {
            document.querySelector(".email-copy-btn").innerHTML = "Copy";
        }, 3000);
    }

    AnimateElements(".socials-list li", "revealSocialIcon 1s forwards");

    return (
        <>
            <div className="email-container">
                <form action="mailto:stepandordiai@gmail.com">
                    <input
                        onMouseEnter={() => makeCursorActive("Email")}
                        onMouseLeave={makeCursorNormal}
                        className="email-input"
                        type="submit"
                        value="stepandordiai@gmail.com"
                    />
                </form>
                <span>|</span>
                <button
                    className="email-copy-btn"
                    onMouseEnter={() => makeCursorActive("Copy")}
                    onMouseLeave={makeCursorNormal}
                    onClick={copyEmail}
                >
                    Copy
                </button>
            </div>
            <ul className="socials-list">
                <li>
                    <a
                        onMouseEnter={() => makeCursorActive("Github")}
                        onMouseLeave={makeCursorNormal}
                        href="https://github.com/heeeyooo"
                        target="_blank"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                </li>
                <li>
                    <a
                        onMouseEnter={() => makeCursorActive("Instagram")}
                        onMouseLeave={makeCursorNormal}
                        href="https://www.instagram.com/heeeyooo_?igsh=N2ZreTdicmF1dDlk&utm_source=qr"
                        target="_blank"
                    >
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a
                        onMouseEnter={() => makeCursorActive("Facebook")}
                        onMouseLeave={makeCursorNormal}
                        href="https://www.facebook.com/stepan.dordyay.5"
                        target="_blank"
                    >
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a
                        onMouseEnter={() => makeCursorActive("Twitter")}
                        onMouseLeave={makeCursorNormal}
                        href="https://twitter.com/Heeeyooo_"
                        target="_blank"
                    >
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                </li>
                <li>
                    <a
                        onMouseEnter={() => makeCursorActive("Twitch")}
                        onMouseLeave={makeCursorNormal}
                        href="https://www.twitch.tv/heeeyooo_"
                        target="_blank"
                    >
                        <i className="fa-brands fa-twitch"></i>
                    </a>
                </li>
                <li>
                    <a
                        onMouseEnter={() => makeCursorActive("Linkedin")}
                        onMouseLeave={makeCursorNormal}
                        href="https://www.linkedin.com/in/stepan-dordiai-245715310"
                        target="_blank"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a
                        onMouseEnter={() => makeCursorActive("Telegram")}
                        onMouseLeave={makeCursorNormal}
                        href="https://t.me/heeeyooo"
                        target="_blank"
                    >
                        <i className="fa-brands fa-telegram"></i>
                    </a>
                </li>
            </ul>
        </>
    );
}

export default Contact;
