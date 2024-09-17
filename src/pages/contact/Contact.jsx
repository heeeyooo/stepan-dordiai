import "./Contact.css";

function Contact() {
  function copyEmail() {
    //
    navigator.clipboard.writeText("stepandordiai@gmail.com");
    //
    document.querySelector(".email-copy-btn").textContent = "Copied";
    setTimeout(() => {
      document.querySelector(".email-copy-btn").textContent = "Copy";
    }, 3000);
  }

  function brightCursor(props) {
    document.querySelector("#custom-cursor").classList.add("active-cursor");
    document.querySelector("#custom-cursor").innerHTML = props;
  }

  function lowerCursor(props) {
    document.querySelector("#custom-cursor").classList.remove("active-cursor");
    document.querySelector("#custom-cursor").innerHTML = props;
  }

  return (
    <>
      <div className="email-container">
        <form action="mailto:stepandordiai@gmail.com">
          <input
            onMouseEnter={() => brightCursor("Email")}
            onMouseLeave={() => lowerCursor("")}
            className="email-input"
            type="submit"
            value="stepandordiai@gmail.com"
          />
        </form>
        <span>|</span>
        <button
          className="email-copy-btn"
          onMouseEnter={() => brightCursor("Copy")}
          onMouseLeave={() => lowerCursor("")}
          onClick={copyEmail}
        >
          Copy
        </button>
      </div>

      <div className="socials-container">
        <a
          onMouseEnter={() => brightCursor("gitHub")}
          onMouseLeave={() => lowerCursor("")}
          className="social-github"
          href="https://github.com/heeeyooo"
          target="_blank"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          onMouseEnter={() => brightCursor("Instagram")}
          onMouseLeave={() => lowerCursor("")}
          className="social-instagram"
          href="https://www.instagram.com/heeeyooo_?igsh=N2ZreTdicmF1dDlk&utm_source=qr"
          target="_blank"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          onMouseEnter={() => brightCursor("Facebook")}
          onMouseLeave={() => lowerCursor("")}
          className="social-facebook"
          href="https://www.facebook.com/stepan.dordyay.5"
          target="_blank"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          onMouseEnter={() => brightCursor("Twitter")}
          onMouseLeave={() => lowerCursor("")}
          className="social-twitter"
          href="https://twitter.com/Heeeyooo_"
          target="_blank"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a
          onMouseEnter={() => brightCursor("Twitch")}
          onMouseLeave={() => lowerCursor("")}
          className="social-twitch"
          href="https://www.twitch.tv/heeeyooo_"
          target="_blank"
        >
          <i className="fa-brands fa-twitch"></i>
        </a>
        <a
          onMouseEnter={() => brightCursor("LinkedIn")}
          onMouseLeave={() => lowerCursor("")}
          className="social-linkedin"
          href="https://www.linkedin.com/in/stepan-dordiai-245715310"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          onMouseEnter={() => brightCursor("Behance")}
          onMouseLeave={() => lowerCursor("")}
          className="social-behance"
          href="https://www.behance.net/stepandordiai"
          target="_blank"
        >
          <i className="fa-brands fa-behance"></i>
        </a>
      </div>
    </>
  );
}

export default Contact;
