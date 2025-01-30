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
        const mailLink = document.querySelector(".js-mail__link");
        const mailContent = mailLink.textContent;
        navigator.clipboard.writeText(mailContent);
        document.querySelector(".mail__copy-btn .dublicate").style.display =
            "inline";
        document.querySelector(".mail__copy-btn span").style.display = "none";

        setTimeout(() => {
            document.querySelector(".mail__copy-btn .dublicate").style.display =
                "none";
            document.querySelector(".mail__copy-btn span").style.display =
                "inline";
        }, 3000);
    }

    function copyTel() {
        const telLink = document.querySelector(".js-tel__link");
        const telContent = telLink.textContent;
        navigator.clipboard.writeText(telContent);
        document.querySelector(".tel__copy-btn .dublicate").style.display =
            "inline";
        document.querySelector(".tel__copy-btn span").style.display = "none";

        setTimeout(() => {
            document.querySelector(".tel__copy-btn .dublicate").style.display =
                "none";
            document.querySelector(".tel__copy-btn span").style.display =
                "inline";
        }, 3000);
    }

    AnimateElements(".text-line", "revealTextLine 1s forwards");

    return (
        <section className="contact">
            <ul className="contacts">
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <div className="mail">
                                <a
                                    // onMouseEnter={() => makeCursorActive("Email")}
                                    // onMouseLeave={makeCursorNormal}
                                    className="mail__link js-mail__link"
                                    href="mailto:stepandordiai@gmail.com"
                                >
                                    stepandordiai@gmail.com
                                </a>
                                <span>|</span>
                                <button
                                    className="mail__copy-btn"
                                    // onMouseEnter={() => makeCursorActive("Copy")}
                                    // onMouseLeave={makeCursorNormal}
                                    onClick={copyMail}
                                >
                                    <span>Copy</span>
                                    <span className="dublicate">Copied</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <div className="tel">
                                <a
                                    href="tel:+420722001016"
                                    // onMouseEnter={() =>
                                    //     makeCursorActive("Phone number")
                                    // }
                                    // onMouseLeave={makeCursorNormal}
                                    className="tel__link js-tel__link"
                                >
                                    +420 722 001 016
                                </a>
                                <span>|</span>
                                <button
                                    className="tel__copy-btn"
                                    // onMouseEnter={() => makeCursorActive("Copy")}
                                    // onMouseLeave={makeCursorNormal}
                                    onClick={copyTel}
                                >
                                    <span>Copy</span>
                                    <span className="dublicate">Copied</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul className="socials">
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                // onMouseEnter={() => makeCursorActive("GitHub")}
                                // onMouseLeave={makeCursorNormal}
                                href="https://github.com/stepandordiai"
                                target="_blank"
                            >
                                {/* <i className="fa-brands fa-github"></i> */}
                                GitHub
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                // onMouseEnter={() =>
                                //     makeCursorActive("LinkedIn")
                                // }
                                // onMouseLeave={makeCursorNormal}
                                href="https://www.linkedin.com/in/stepan-dordiai"
                                target="_blank"
                            >
                                {/* <i className="fa-brands fa-linkedin"></i> */}
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                // onMouseEnter={() =>
                                //     makeCursorActive("Telegram")
                                // }
                                // onMouseLeave={makeCursorNormal}
                                href="https://t.me/heeeyooo"
                                target="_blank"
                            >
                                {/* <i className="fa-brands fa-telegram"></i> */}
                                Telegram
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                // onMouseEnter={() =>
                                //     makeCursorActive("Instagram")
                                // }
                                // onMouseLeave={makeCursorNormal}
                                href="https://www.instagram.com/heeeyooo_"
                                target="_blank"
                            >
                                {/* <i className="fa-brands fa-instagram"></i> */}
                                Instagram
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                // onMouseEnter={() => makeCursorActive("Twitter")}
                                // onMouseLeave={makeCursorNormal}
                                href="https://twitter.com/Heeeyooo_"
                                target="_blank"
                            >
                                X/Twitter
                                {/* <i className="fa-brands fa-x-twitter"></i> */}
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                // onMouseEnter={() => makeCursorActive("Twitch")}
                                // onMouseLeave={makeCursorNormal}
                                href="https://www.twitch.tv/heeeyooo_"
                                target="_blank"
                            >
                                Twitch
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Contact;
