// NPM packages
import { Link } from "react-router-dom";

// Project files
import { useMenu } from "../../state/MenuProvider";

export default function CategoryList() {
  const { categories } = useMenu();


  return (
    <table className="admin-table category-table">
      <thead>
        <tr>
          {/* <th>&nbsp;</th> */}
          <th>Title</th>
          <th>Description</th>
          <th>Picture</th>
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
                <Link className="category-link" to={"/admin-categories/" + category.id}>{category.name}</Link>
              </td>
              <td>{category.description}</td>
              <td>
              <img src={category.imageURL} alt="Category thumbnail" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
