// NPM packages
import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

// Project files
import ProductDetails from "../AdminProduct/ProductDetails";
import ProductForm from "./product-form/ProductForm";
import { useMenu } from "../../state/MenuProvider";
import newProduct from "./NewProduct";
import { deleteDocument } from "../../scripts/fireStore";

export default function AdminProduct({ location }) {
  // Global state
  const { products, productDispatch } = useMenu();
  const { slug } = useParams();
  const history = useHistory();

  // Properties
  const currentProduct = getProduct(products, slug, newProduct);
  const initialMode = slug === "new-product";
  const { state: categoryId } = location;

  // Local state
  const [editMode, setEditMode] = useState(initialMode);

  // Methods
  async function onDeleteProduct(product) {
    const path = `categories/${categoryId}/menuItems/`;
    if (window.confirm("Are you sure you want to delete the product?")) {
      await deleteDocument(path, product);
      productDispatch({ type: "DELETE_PRODUCT", payload: product });
      history.goBack();
    }
  }

  function getProduct(list, id, newItem) {
    const oldItem = list.find((item) => item.slug === id);
    return oldItem ?? newItem;
  }

  return (
    <section className="page admin admin-product">
      {!editMode ? (
        <ProductDetails
          product={currentProduct}
          onEdit={() => setEditMode(true)}
          onDelete={() => onDeleteProduct(currentProduct.id)}
        />
      ) : (
        <ProductForm
          product={currentProduct}
          id={currentProduct.id}
          categoryId={categoryId}
        />
      )}
    </section>
  );
}
