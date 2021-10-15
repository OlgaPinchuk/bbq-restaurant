// NPM packages
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="page home-page">
      <section className="hero">
        <h1>BBQ Ribs House</h1>
        <small className="subheader">Delicious. Home made. Meat-based.</small>
        <Link className="button view-link" to="/menu">Our Menu</Link>
      </section>
    </section>
  );
}
