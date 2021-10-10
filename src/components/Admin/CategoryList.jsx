// NPM packages
import { Link } from "react-router-dom";

export default function CategoryList({ categories, onDelete }) {
  return (
      <table className="table">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => {
            return (
              <tr key={category.id}>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => {
                      onDelete(category.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={"/categories/" + category.slug}>{category.name}</Link>
                </td>
                <td>{category.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
}
