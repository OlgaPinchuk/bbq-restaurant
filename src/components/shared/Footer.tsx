// NPM packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

// Project files
import Link from "./Link";

const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <Link href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </Link>
        <Link href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </Link>
      </div>
      <div className="copyright">
        <p> © 2021 • Restorant Name</p>
      </div>
    </footer>
  );
};

export default Footer;
