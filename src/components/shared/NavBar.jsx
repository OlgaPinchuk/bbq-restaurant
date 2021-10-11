// NPM packages
import { Link } from "react-router-dom";

// Project files
import logo from "../../assets/images/logo.png";

export default function NavBar() {
  return (
    <nav className="site-navigation">
     <Link to="/">
        <img className="logo" src={logo} alt="Restaurant logo" />
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      {/* Temporary */}
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}
