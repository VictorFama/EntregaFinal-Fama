import './Footer.css';
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";



const Footer = () => {
    return (
            <footer className="footer-propio">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="footer-text">&copy; 2025 Tienda React. Todos los derechos reservados.</p>
                        </div>
                        <div className="col-12 footer-icons">
                            <a href="https://www.instagram.com" target="_blank">
                                <FaInstagram className="logo-footer" title="Instagram" />
                            </a>
                            <a href="https://www.facebook.com" target="_blank">
                                <FaFacebook className="logo-footer" title="Facebook" />
                            </a>
                            <a href="https://web.whatsapp.com/" target="_blank">
                                <FaWhatsapp className="logo-footer" title="Whatsapp" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;