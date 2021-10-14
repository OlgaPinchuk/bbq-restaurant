import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

// Project files
import { useMenu } from "../../state/MenuProvider";
import { getCollection } from "../../scripts/fireStore";

export default function CategoryItems({ category, onEdit }) {
  // Global state
  const { categories, productDispatch } = useMenu();
  const { name } = category;

  // Local state
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

  // Properties
  const path = `categories/${category.id}/menuItems`;

  // Methods
  const fetchData = useCallback(async (path) => {
    try {
      const dishes = await getCollection(path);

      setItems(dishes);
      productDispatch({ type: "READ_DISHES", payload: dishes });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  useEffect(() => fetchData(path), [fetchData]);

  return (
    <div className="admin-category-details">
      <div className="category-header">
        <h1> {name}</h1>
        <button className="button add-btn" onClick={onEdit}>
          Edit Category
        </button>
      </div>

      <div className="category-items">
        <h2>Dishes</h2>
        <Link className="button add-btn" to="/admin-products/new-product">
          Add Dish
        </Link>
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
            {items.map((item) => {
              return (
                <tr key={item.id}>
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
                    <Link
                      className="admin-link"
                      to={"/admin-products/" + item.slug}
                    >
                      {item.name}
                    </Link>
                  </td>
                  <td>{item.shortDescription}</td>
                  <td>
                    <img src={item.imageURL} alt="Category thumbnail" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
