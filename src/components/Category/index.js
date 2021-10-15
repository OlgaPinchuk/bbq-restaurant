// NPM files
import { useState, useEffect, useCallback } from "react";

// Project files
//import List from "../components/common/List";
import ProductCard from "./ProductCard";
import List from "../shared/List";
import { useMenu } from "../../state/MenuProvider";
import { getCollection } from "../../scripts/fireStore";

export default function CategoryPage({ match }) {
  // Local state
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

  // Properties
  const { categories, productDispatch } = useMenu();
  const routerID = match.params.slug;

  const { id, name, description } = categories.find(
    (item) => item.slug === routerID
  );
  const path = `categories/${id}/menuItems`;

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
    <section className="page products-category">
      <section className="hero">
        <h1>{name}</h1>
        <small className="subheader">{description}</small>
      </section>
      <section className="category-content">
        
       <List list={products} Component={ProductCard} />
      </section>
    </section>
  );
}