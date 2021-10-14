// NPM packages
import { useState } from "react";
import { useParams } from "react-router-dom";

// Project files
import ProductDetails from "../AdminProduct/ProductDetails";
import ProductForm from "./product-form/ProductForm";
import { useMenu } from "../../state/MenuProvider";
import newProduct from "./NewProduct";

export default function AdminProduct({location}) {
  // Global state
  const { products } = useMenu();
  const { slug } = useParams();

  // Properties
  const currentProduct = getProduct(products, slug, newProduct);
  const initialMode = slug === "new-product";
  const {state: categoryId} = location;

  // Local state
  const [editMode, setEditMode] = useState(initialMode);

  // Methods
  function getProduct(list, id, newItem) {
    const oldItem = list.find((item) => item.slug === id);
    return oldItem ?? newItem;
  }

  return (
    <section className="page admin-product">
      {!editMode ? (
        <ProductDetails
          product={currentProduct}
          onEdit={() => setEditMode(true)}
        />
      ) : (
        <ProductForm product={currentProduct} id={currentProduct.id} categoryId={categoryId}/>
      )}
    </section>
  );
}
