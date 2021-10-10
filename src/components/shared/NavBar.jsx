// NPM packages
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="site-navigation">
      <Link to="/">
        <img className="logo" alt="Restaurant logo" />
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
}
