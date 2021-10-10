// Project files
import CategoriesPage from "./CategoriesPage";

export default function AdminPage({categories}) {

  return (
    <>
      <h1>Admin Page</h1>
      <CategoriesPage categories={categories} />
    </>
  );
}
