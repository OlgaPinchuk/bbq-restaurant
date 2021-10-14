// NPM packages
import { Link } from "react-router-dom";

// Project files
import { useMenu } from "../../state/MenuProvider";

export default function MenuCategories() {
  const { categories } = useMenu();

  return (
    <div className="menu-categories">
      <h1>Menu Categories</h1>
      <Link className="button add-btn" to="/admin-categories/new-category">
        Add Category
      </Link>

      {/* TO-do: refctor table */}
      <table className="admin-table category-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => {
            return (
              <tr key={category.id}>
                <td>
                  <Link
                    className="admin-link"
                    to={"/admin-categories/" + category.slug}
                  >
                    {category.name}
                  </Link>
                </td>
                <td>{category.description}</td>
                <td>
                  <img
                    className="thumb"
                    src={category.imageURL}
                    alt={category.name}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
