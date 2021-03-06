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

export default function CategoryForm({ category, id }) {
  // Global state
  const history = useHistory();

  // Local state
  const [imageURL, setImageUrL] = useState(category.imageURL);
  const [name, setName] = useState(category.name);
  const [orderId, setOrderId] = useState(category.orderId);
  const [description, setDescription] = useState(category.description);

  // Properties
  const { categoryDispatch } = useMenu();
  const slug = name.toLowerCase().split(" ").join("-");
  const filename = `images/${slug}`;
  const pageTitle = category.name === "" ? "Create category" : "Edit category";

  // Methods
  async function onPublish() {
    const path = "categories";
    const editedCategory = {
      imageURL: imageURL,
      name: name,
      description: description,
      slug: slug,
      orderId: orderId,
    };

    if (id !== "") await updateDocument(path, id, editedCategory);
    else await createDocument(path, editedCategory);

    categoryDispatch({
      type: "UPDATE_CATEGORY",
      payload: { id: id, data: editedCategory },
    });
    history.goBack();
  }

  return (
    <section className="form admin-form">
      <h2>{pageTitle}</h2>
      <p>
        Please fill in the form with the category details. All fields are
        required!
      </p>
      <InputField state={[name, setName]} options={fields.name} />
      <InputField
        state={[description, setDescription]}
        options={fields.description}
      />
      <InputField state={[orderId, setOrderId]} options={fields.orderId} />
      <InputImage
        state={[imageURL, setImageUrL]}
        label={fields.image.label}
        filename={filename}
      />
      <footer>
        <button className="button save-button" onClick={onPublish}>
          Publish category
        </button>
        <ButtonCancel message={fields.cancelButton.message} />
      </footer>
    </section>
  );
}
