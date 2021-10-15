import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

// Project files
import { useMenu } from "../../state/MenuProvider";
import { getCollection } from "../../scripts/fireStore";

export default function CategoryItems({ category, onEdit, onDelete }) {
  // Global state
  const { productDispatch } = useMenu();
  const { name } = category;

  // Local state
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

  // Properties
  const path = `categories/${category.id}/menuItems`;

  // Methods
  const fetchData = useCallback(async (url) => {
    try {
      const menuItems = await getCollection(url);

      setProducts(menuItems);
      productDispatch({ type: "READ_PRODUCT", payload: menuItems });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  useEffect(() => fetchData(path), [fetchData]);

  return (
    <div className="admin-category-details">
      <header className="admin-header">
        <h1>{name}</h1>
        <button className="button edit-btn" onClick={onEdit}>
          Edit Category
        </button>
        <button
          className="button btn-danger"
          onClick={() => {
            onDelete(category.id);
          }}
        >
          Delete category
        </button>
      </header>

      <div className="category-items">
        <h2>Menu Items</h2>
        <Link
          className="button add-btn"
          to={{ pathname: "/admin-products/new-product", state: category.id }}
        >
          Add Product
        </Link>
        <table className="admin-table category-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>
                    <Link
                      className="admin-link"
                      to={{
                        pathname: `/admin-products/${product.slug}`,
                        state: category.id,
                      }}
                    >
                      {product.name}
                    </Link>
                  </td>
                  <td>{product.shortInfo}</td>
                  <td>
                    <img
                      className="thumb"
                      src={product.imageURL}
                      alt={product.name}
                    />
                  </td>

                  {/* <button
                  className="button btn-danger"
                  onClick={() => {
                    deleteCategory(category.id);
                  }}
                >
                  Delete
                </button> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
