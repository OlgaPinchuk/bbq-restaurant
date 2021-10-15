// Project files
import MenuCategories from "./MenuCategories";

export default function AdminPage() {
  return (
    <div className="page admin admin-page">
      <header className="admin-header">
        <h1>Admin Page</h1>
        <small>Welcome to the restaurant admin page!</small>
        <small>
          Here you can view, add, update or delete restaurant menu items as well
          as the menu categories
        </small>
      </header>
      <MenuCategories />
    </div>
  );
}
