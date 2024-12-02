import { useEffect } from "react";
import AnimateElements from "../../utils/AnimateElements";
import { makeCursorActive, makeCursorNormal } from "../../utils/cursorState";
import "./Contact.css";

function Contact() {
    useEffect(() => {
        document.title = "Stepan Dordiai | Contact";
    }, []);

    function copyMail() {
        const mailLink = document.querySelector(".mail-link");
        const mailContent = mailLink.textContent;
        //
        navigator.clipboard.writeText(mailContent);
        //
        document.querySelector(".mail-copy-btn").innerHTML = "Copied";
        setTimeout(() => {
            document.querySelector(".mail-copy-btn").innerHTML = "Copy";
        }, 3000);
    }

    function copyTel() {
        const telLink = document.querySelector(".tel-link");
        const telContent = telLink.textContent;
        //
        navigator.clipboard.writeText(telContent);
        //
        document.querySelector(".mail-copy-btn").innerHTML = "Copied";
        setTimeout(() => {
            document.querySelector(".mail-copy-btn").innerHTML = "Copy";
        }, 3000);
    }

    AnimateElements(".socials-list li", "revealSocialIcon 1s forwards");

    AnimateElements(".text-line-container div", "revealTextLine 1s forwards");

    return (
        <>
            <div className="mail-tel-container">
                <div className="text-line-container">
                    <div>
                        <div className="mail-container">
                            <a
                                onMouseEnter={() => makeCursorActive("Email")}
                                onMouseLeave={makeCursorNormal}
                                className="mail-link"
                                href="mailto:stepandordiai@gmail.com"
                            >
                                stepandordiai@gmail.com
                            </a>
                            <span>|</span>
                            <button
                                className="mail-copy-btn"
                                onMouseEnter={() => makeCursorActive("Copy")}
                                onMouseLeave={makeCursorNormal}
                                onClick={copyMail}
                            >
                                Copy
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-line-container">
                    <div>
                        <div className="tel-container">
                            <a
                                href="tel:+380689852978"
                                onMouseEnter={() =>
                                    makeCursorActive("Phone number")
                                }
                                onMouseLeave={makeCursorNormal}
                                className="tel-link"
                            >
                                +380 68 985 29 78
                            </a>
                            <span>|</span>
                            <button
                                className="tel-copy-btn"
                                onMouseEnter={() => makeCursorActive("Copy")}
                                onMouseLeave={makeCursorNormal}
                                onClick={copyTel}
                            >
                                Copy
                            </button>
                        </div>
                    </div>
                </div>
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
