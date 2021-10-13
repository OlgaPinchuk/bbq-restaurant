// NPM packages
import { Link } from "react-router-dom";

// Project files
import CategoryList from "./CategoryList";

export default function AdminPage() {

  return (
    <div className="page admin-page">
      <h2>Menu Categories</h2>
      <div className="menu-categories">
        <Link className="button add-btn" to="/admin-categories/new-category">
          Add Category
        </Link>
        <CategoryList />
      </div>
    </div>
  );
}
