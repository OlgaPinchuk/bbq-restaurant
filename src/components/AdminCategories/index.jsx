// NPM packages
import { useParams } from "react-router-dom";

// Project files
import CategoryForm from "./category-form/CategoryForm";
import newCategory from "./NewCategory";
import { useCategories } from "../../state/CategoriesProvider";

export default function AdminCategories() {
  const { categories } = useCategories();
  const { id } = useParams();
  const category = getCategory(categories, id);
  // Properties
  const title = category.name === "" ? "Create category" : "Edit category";

  // Methods
  function getCategory(categories, id) {
    const oldCategory = categories.find((item) => item.id === id);

    return oldCategory ?? newCategory;
  }
  

  return (
    <section className="page admin-categories">
      <h1>{title}</h1>
      <CategoryForm category={category} id={id} />
    </section>
  );
}
