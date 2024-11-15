import { useEffect } from "react";
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
                        title="Github"
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
                        title="Instagram"
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
                        title="Facebook"
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
                        title="Twitter"
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
                        title="Twitch"
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
                        title="Linkedin"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a
                        onMouseEnter={() => makeCursorActive("Behance")}
                        onMouseLeave={makeCursorNormal}
                        href="https://www.behance.net/stepandordiai"
                        target="_blank"
                        title="Behance"
                    >
                        <i className="fa-brands fa-behance"></i>
                    </a>
                </li>
            </ul>
        </>
    );
}

export default Contact;
