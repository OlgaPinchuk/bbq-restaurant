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
  const initialMode = slug === "new-category";

  // Properties
  const category = getCategory(categories, slug);

  // Local state
  const [editMode, setEditMode] = useState(initialMode);

  //const title = category.name === "" ? "Create category" : "Edit category";

  // Methods
  function getCategory(categories, id) {
    const oldCategory = categories.find((item) => item.slug === id);
    return oldCategory ?? newCategory;
  }

  return (
    <section className="page admin-category">
      {!editMode ? (
        <CategoryItems category={category} onEdit={() => setEditMode(true)} />
      ) : (
        <CategoryForm category={category} id={category.id} />
      )}
    </section>
  );
}
