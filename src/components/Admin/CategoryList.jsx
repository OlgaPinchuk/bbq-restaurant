// NPM packages
import { Link } from "react-router-dom";

// Project files
import { useCategories } from "../../state/CategoriesProvider";

export default function CategoryList() {
  const { categories } = useCategories();

  // Methods
  // function deleteCategory(id) {
  //   console.log("category id", id);
  // }

  return (
    <table className="admin-table category-table">
      <thead>
        <tr>
          {/* <th>&nbsp;</th> */}
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => {
          return (
            <tr key={category.id}>
              {/* <td>
                <button
                  className="button btn-outline-danger"
                  onClick={() => {
                    deleteCategory(category.id);
                  }}
                >
                  Delete
                </button>
              </td> */}
              <td>
                <Link className="category-link" to={"/admin-category/" + category.slug}>{category.name}</Link>
              </td>
              <td>{category.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
