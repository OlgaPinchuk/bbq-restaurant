// NPM packages
import { Link } from "react-router-dom";
import { getFirestore } from "firebase/firestore/lite";

// Project files
import CategoryList from "./CategoryList";
import firebaseInstance from "../../scripts/firebase";
import { deleteDocument } from "../../scripts/fireStore";

export default function CategoriesPage({ categories }) {
  // Properties
  const database = getFirestore(firebaseInstance);

  // Methods
  function deleteCategory(id) {
    deleteDocument(database, "categories", id);
  }

  return (
    <>
      <h2>Categories</h2>
      <Link className="btn btn-primary" to="/categories">
        Add Category
      </Link>
      <CategoryList categories={categories} onDelete={deleteCategory} />
    </>
  );
}
