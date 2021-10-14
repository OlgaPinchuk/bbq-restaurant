// NPM packages
import { useState } from "react";
import { useParams } from "react-router-dom";

// Project files
import CategoryForm from "./category-form/CategoryForm";
import CategoryItems from "./CategoryItems";
import newCategory from "./NewCategory";
import { useMenu } from "../../state/MenuProvider";

export default function AdminCategory() {
  // Global state
  const { categories } = useMenu();
  const { slug } = useParams();

  // Properties
  const currentCategory = getCategory(categories, slug);
  const initialMode = slug === "new-category";

  // Local state
  const [editMode, setEditMode] = useState(initialMode);

  // Methods
  function getCategory(categories, id) {
    const oldCategory = categories.find((item) => item.slug === id);
    return oldCategory ?? newCategory;
  }

  return (
    <section className="page admin-category">
      {!editMode ? (
        <CategoryItems category={currentCategory} onEdit={() => setEditMode(true)} />
      ) : (
        <CategoryForm category={currentCategory} id={currentCategory.id} />
      )}
    </section>
  );
}
