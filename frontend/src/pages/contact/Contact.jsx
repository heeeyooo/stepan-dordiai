import { Helmet } from "react-helmet";
import AnimateElements from "../../utils/AnimateElements";
import "./../../global/textLineReveal.scss";
import "./Contact.scss";

function Contact() {
    const pageTitle = "Contact";

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
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <ul className="contacts">
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <div className="mail">
                                <a
                                    className="mail__link js-mail__link"
                                    href="mailto:stepandordiai@gmail.com"
                                >
                                    stepandordiai@gmail.com
                                </a>
                                <span>|</span>
                                <button
                                    className="mail__copy-btn"
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
                                    className="tel__link js-tel__link"
                                >
                                    +420 722 001 016
                                </a>
                                <span>|</span>
                                <button
                                    className="tel__copy-btn"
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
                                href="https://github.com/stepandordiai"
                                target="_blank"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                href="https://www.linkedin.com/in/stepan-dordiai"
                                target="_blank"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a href="https://t.me/heeeyooo" target="_blank">
                                Telegram
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                href="https://www.instagram.com/heeeyooo_"
                                target="_blank"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                href="https://twitter.com/Heeeyooo_"
                                target="_blank"
                            >
                                X/Twitter
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
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
