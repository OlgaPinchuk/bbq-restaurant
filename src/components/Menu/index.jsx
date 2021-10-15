// NPM packages
import { Link } from "react-router-dom";

// Project files
import CategoryCard from "./CategoryCard";
import { useMenu } from "../../state/MenuProvider";

export default function MenuPage() {
  // Constant
  const { categories } = useMenu();

  const Categories = categories.map((item) => (
    <li key={item.id}>
      <Link to={"/categories/" + item.slug}>
        <CategoryCard item={item} />
      </Link>
    </li>
  ));

  return (
    <div className="page menu-page">
      <section className="hero">
        <h1>Menu</h1>
      </section>
      <section className="menu">
        <ul className="categories-list">{Categories}</ul>
      </section>
    </div>
  );
}
