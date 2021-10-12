// Project files
import CategoriesPage from "./CategoriesPage";
import { useCategories } from "../../state/CategoriesProvider";

export default function AdminPage() {
  // Constant
  const { categories } = useCategories();

  return (
    <>
      <h1>Admin Page</h1>
      <CategoriesPage/>
    </>
  );
}
