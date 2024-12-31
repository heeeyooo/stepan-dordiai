import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <p className="copyright">
                &copy; 2024 - <span>{new Date().getFullYear()}</span> Stepan
                Dordiai
            </p>
            <p className="privacy">All rights reserved</p>
        </footer>
    );
}

export default Footer;
