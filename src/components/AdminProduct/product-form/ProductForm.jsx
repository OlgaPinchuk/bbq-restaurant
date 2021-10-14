// NPM packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

// Project files
import InputField from "../../shared/InputField";
import InputImage from "../../shared/InputImage";
import ButtonCancel from "../../shared/ButtonCancel";
import fields from "./fields.json";
import { useMenu } from "../../../state/MenuProvider";
import { updateDocument, createDocument } from "../../../scripts/fireStore";

export default function ProductForm({ product, id, categoryId }) {
  // Global state
  const history = useHistory();

  // Local state
  const [name, setName] = useState(product.name);
  const [imageURL, setImageUrL] = useState(product.imageURL);
  const [price, setPrice] = useState(product.price);
  const [shortInfo, setShortInfo] = useState(product.shortInfo);
  const [detailedInfo, setDetailedInfo] = useState(product.detailedInfo);
  const [ingredients, setIngredients] = useState(
    product.ingredients && product.ingredients.join(", ")
  );

  // Properties
  const { productDispatch } = useMenu();
  const slug = name.toLowerCase().split(" ").join("-");
  const filename = `images/${slug}`;

  // Methods

  async function onPublish() {
    const path = `categories/${categoryId}/menuItems/`;
    const ingredientsToArray =
      ingredients.length > 0
        ? ingredients.split(",").map((item) => item.trim())
        : [];

    const editedProduct = {
      imageURL: imageURL,
      name: name,
      price: price,
      shortInfo: shortInfo,
      detailedInfo: detailedInfo,
      ingredients: ingredientsToArray,
      slug: slug,
    };

    console.log("editedProduct", editedProduct);

    if (id !== "") await updateDocument(path, id, editedProduct);
    else await createDocument(path, editedProduct);

    productDispatch({
      type: "UPDATE_PRODUCT",
      payload: { id: id, data: editedProduct },
    });
    history.goBack();
  }

  return (
    <section className="form admin-form">
      <InputField state={[name, setName]} options={fields.name} />
      <InputField state={[price, setPrice]} options={fields.price} />
      <InputField
        state={[shortInfo, setShortInfo]}
        options={fields.shortInfo}
      />
      <InputField
        state={[detailedInfo, setDetailedInfo]}
        options={fields.detailedInfo}
      />
      <InputImage
        state={[imageURL, setImageUrL]}
        label={fields.image.label}
        filename={filename}
      />
      <InputField
        state={[ingredients, setIngredients]}
        options={fields.ingredients}
      />

      <footer>
        <button className="button save-button" onClick={onPublish}>
          Publish product
        </button>
        <ButtonCancel message={fields.cancelButton.message} />
      </footer>
    </section>
  );
}
