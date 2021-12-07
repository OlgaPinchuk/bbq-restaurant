// NPM packages
import { Link } from "react-router-dom";

// Project files
import { useMenu } from "../../state/MenuProvider";

export default function MenuCategories() {
  const { categories } = useMenu();
  const orderedCategories = categories.sort((a, b) => a.orderId - b.orderId);

  return (
    <div className="menu-categories">
      <h2>Menu Categories</h2>

      <Link className="button add-btn" to="/admin-categories/new-category">
        Add Category
      </Link>

      <table className="admin-table category-table">
        <thead>
          <tr>
            <th>Order id</th>
            <th className="title">Title</th>
            <th>Description</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {orderedCategories.map((category) => {
            return (
              <tr key={category.id}>
                <td>{category.orderId}</td>
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
