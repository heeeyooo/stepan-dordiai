import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="creator">© Stepan Dordiai {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
