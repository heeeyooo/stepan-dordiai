import { useEffect } from "react";
import AnimateElements from "../../utils/AnimateElements";
import { makeCursorActive, makeCursorNormal } from "../../utils/cursorState";
import "./../../global/textLineReveal.scss";
import "./Contact.scss";

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
        document.querySelector(".mail-copy-btn .dublicate").style.display =
            "inline";
        document.querySelector(".mail-copy-btn span").style.display = "none";

        setTimeout(() => {
            document.querySelector(".mail-copy-btn .dublicate").style.display =
                "none";
            document.querySelector(".mail-copy-btn span").style.display =
                "inline";
        }, 3000);
    }

    function copyTel() {
        const telLink = document.querySelector(".tel-link");
        const telContent = telLink.textContent;
        //
        navigator.clipboard.writeText(telContent);
        //
        document.querySelector(".tel-copy-btn .dublicate").style.display =
            "inline";
        document.querySelector(".tel-copy-btn span").style.display = "none";

        setTimeout(() => {
            document.querySelector(".tel-copy-btn .dublicate").style.display =
                "none";
            document.querySelector(".tel-copy-btn span").style.display =
                "inline";
        }, 3000);
    }

    AnimateElements(".text-line", "revealTextLine 1s forwards");

    return (
        <section className="contact">
            <div className="mail-tel-container">
                <div className="text-line-container">
                    <div className="text-line">
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
                                <span>Copy</span>
                                <span className="dublicate">Copied</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="text-line-container">
                    <div className="text-line">
                        <div className="tel-container">
                            <a
                                href="tel:+380689852978"
                                onMouseEnter={() =>
                                    makeCursorActive("Phone number")
                                }
                                onMouseLeave={makeCursorNormal}
                                className="tel-link"
                            >
                                +420 722 001 016
                            </a>
                            <span>|</span>
                            <button
                                className="tel-copy-btn"
                                onMouseEnter={() => makeCursorActive("Copy")}
                                onMouseLeave={makeCursorNormal}
                                onClick={copyTel}
                            >
                                <span>Copy</span>
                                <span className="dublicate">Copied</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="socials-list">
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                onMouseEnter={() => makeCursorActive("Github")}
                                onMouseLeave={makeCursorNormal}
                                href="https://github.com/heeeyooo"
                                target="_blank"
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                onMouseEnter={() =>
                                    makeCursorActive("Instagram")
                                }
                                onMouseLeave={makeCursorNormal}
                                href="https://www.instagram.com/heeeyooo_"
                                target="_blank"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                onMouseEnter={() => makeCursorActive("Twitter")}
                                onMouseLeave={makeCursorNormal}
                                href="https://twitter.com/Heeeyooo_"
                                target="_blank"
                            >
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                onMouseEnter={() => makeCursorActive("Twitch")}
                                onMouseLeave={makeCursorNormal}
                                href="https://www.twitch.tv/heeeyooo_"
                                target="_blank"
                            >
                                <i className="fa-brands fa-twitch"></i>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                onMouseEnter={() =>
                                    makeCursorActive("Linkedin")
                                }
                                onMouseLeave={makeCursorNormal}
                                href="https://www.linkedin.com/in/stepan-dordiai-245715310"
                                target="_blank"
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                onMouseEnter={() =>
                                    makeCursorActive("Telegram")
                                }
                                onMouseLeave={makeCursorNormal}
                                href="https://t.me/heeeyooo"
                                target="_blank"
                            >
                                <i className="fa-brands fa-telegram"></i>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Contact;
