// NPM packages
import { Link } from "react-router-dom";

// Project files
import CategoryCard from "./CategoryCard";
import { useMenu } from "../../state/MenuProvider";

export default function HomePage() {
  // Constant
  const { categories } = useMenu();

  const Categories = categories.map((item) => (
    <li key={item.id}>
      <CategoryCard item={item} />
    </li>
  ));

  return (
    <section className="page home-page">
      <section className="hero">
        <h1>BBQ Ribs House</h1>
        <small className="subheader">Delicious. Home made. Meat-based.</small>
        <Link className="button view-link" to="/menu">Our Menu</Link>
      </section>
      {/* <section className="menu">
        <ul>{Categories}</ul>
      </section> */}
    </section>
  );
}
