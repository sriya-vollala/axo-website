import { FaInstagram } from 'react-icons/fa';

// create icon variable
const InstagramLink = () => {
    return (
        // <a> makes it a clickable icon
        <a
            // website link the icon redirects to
            href="https://www.instagram.com/axoucsb/"
            // target and rel for security/fun
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
        >
            <FaInstagram size={20} /> as unknown as JSX.Element
        </a>
    );
};

function Footer() {
    return (
        <footer className="footer">
            <div><InstagramLink /></div>
            <p>
                © 2025 Alpha Chi Omega, Delta Psi Chapter | All Rights Reserved.
            </p>
        </footer>
    )
}

export default Footer;