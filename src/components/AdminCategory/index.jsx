// NPM packages
import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

// Project files
import CategoryForm from "./category-form/CategoryForm";
import CategoryItems from "./CategoryItems";
import newCategory from "./NewCategory";
import { useMenu } from "../../state/MenuProvider";
import { deleteDocument } from "../../scripts/fireStore";

export default function AdminCategory() {
  // Global state
  const { categories, categoryDispatch } = useMenu();
  const { slug } = useParams();
  const history = useHistory();

  // Properties
  const currentCategory = getCategory(categories, slug);
  const initialMode = slug === "new-category";

  // Local state
  const [editMode, setEditMode] = useState(initialMode);

  // Methods
  async function onDelete(id) {
    const path = `categories/`;
    if (
      window.confirm(
        "Are you sure you want to delete a category and all its products?"
      )
    ) {
      await deleteDocument(path, id);
      categoryDispatch({ type: "DELETE_CATEGORY", payload: id });
      history.goBack();
    }
  }
  function getCategory(categories, id) {
    const oldCategory = categories.find((item) => item.slug === id);
    return oldCategory ?? newCategory;
  }

  return (
    <section className="page admin admin-category">
      {!editMode ? (
        <CategoryItems
          category={currentCategory}
          onEdit={() => setEditMode(true)}
          onDelete={() => onDelete(currentCategory.id)}
        />
      ) : (
        <CategoryForm category={currentCategory} id={currentCategory.id} />
      )}
    </section>
  );
}
