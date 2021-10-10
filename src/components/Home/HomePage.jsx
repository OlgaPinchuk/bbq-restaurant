// NPM packages
import { Link } from "react-router-dom";

// Project files
import CategoryCard from "./CategoryCard";

export default function HomePage({ categories }) {
  // Constants
  const Categories = categories.map((item) => (
    <li key={item.id}>
      <CategoryCard item={item} />
    </li>
  ));

  return (
    <section className="page home-page">
      <section className="hero">
        <h1>Restaurant Name</h1>
        <h2 className="slogan">Delicious. Home made. Meat-based.</h2>
        <Link to="/menu">View Menu</Link>
      </section>
      <section className="menu">
        <ul>{Categories}</ul>
      </section>
    </section>
  );
}
