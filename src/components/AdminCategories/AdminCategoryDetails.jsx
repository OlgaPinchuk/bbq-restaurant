import { useState } from "react";

export default function AdminCategoryDetails({ category }) {
  const { name } = category;
  const [items, setItems] = useState([]);
  
  return (
    <div className="page admin-category-details">
      <h1> {name} </h1>
      <table className="admin-table category-table">
        <thead>
          <tr>
            {/* <th>&nbsp;</th> */}
            <th>Title</th>
            <th>Description</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
