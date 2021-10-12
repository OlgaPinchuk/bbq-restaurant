// NPM packages
import { Link } from "react-router-dom";

// Project files
import CategoryList from "./CategoryList";
import { useCategories } from "../../state/CategoriesProvider";

export default function CategoriesPage() {
  // Constant
  const { categories } = useCategories();

  // Methods
  // function deleteCategory(id) {
  //   deleteDocument(database, "categories", id);
  // }

  return (
    <>
      <h2>Categories</h2>
      <Link className="btn btn-primary" to="/categories">
        Add Category
      </Link>
      <CategoryList categories={categories} onDelete={() => {}} />
    </>
  );
}
