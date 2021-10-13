// NPM packages
import { Link } from "react-router-dom";

// Project files
import { useCategories } from "../../state/CategoriesProvider";

export default function AdminProducts({ match, history }) {
  const { name, slug } = match.params;
  const { categories } = useCategories();

  // const { menuItems } = categories.find((item) => item.name === name);

  return (
    <table className="admin-table product-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {/* {menuItems.map((product) => {
          return (
            <tr key={product.id}>
              <td>
                <Link
                  className="category-link"
                  to={"/admin-product/" + product.slug}
                >
                  {product.name}
                </Link>
              </td>
              <td>{product.description}</td>
            </tr>
          );
        })} */}
      </tbody>
    </table>
  );
}
