import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p className="creator">
                © Stepan Dordiai {new Date().getFullYear()}
            </p>
            <p className="rights">All rights reserved.</p>
        </footer>
    );
}

export default Footer;
