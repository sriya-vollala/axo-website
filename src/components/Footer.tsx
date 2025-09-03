import { FaInstagram } from 'react-icons/fa';

// create and
const InstagramLink = () => {
    return (
        <a
            href="https://www.instagram.com/axoucsb/"
            // target and rel for security/fun
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
        >
            <FaInstagram size={20} />
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