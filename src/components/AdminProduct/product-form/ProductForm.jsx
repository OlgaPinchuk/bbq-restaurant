// NPM packages
import { useState } from "react";

// Project files
import InputField from "../../shared/InputField";
import InputImage from "../../shared/InputImage";
import fields from "./fields.json";
import { useMenu } from "../../../state/MenuProvider";
import { updateDocument, createDocument } from "../../../scripts/fireStore";

export default function ProductForm({ product, id }) {
  // Local state
  const [imageURL, setImageUrL] = useState(product.imageURL);
  const [name, setName] = useState(product.name);
  const [shortDescription, setShortDescription] = useState(product.setShortDescription);
  const [detailedDescription, setDetailedDescription] = useState(product.detailedDescription);
  

  // Properties
  const { productDispatch } = useMenu();
  const slug = name.toLowerCase().split(" ").join("-");
  const filename = `images/${slug}`;

  // Methods
  async function onPublish() {
    const path = `categories/${id}/${slug}`;
    const editedProduct = {
      imageURL: imageURL,
      name: name,
      shortDescription: shortDescription,
      detailedDescription: detailedDescription,
      slug: slug,
    };

    console.log("editedProduct", editedProduct);

    // to do
    // 1 upload to firebase using await
    if (id !== "new-product") await updateDocument(path, id, editedProduct);
    else await createDocument(path, editedProduct);

    // 2 call the dispatches to update candidates AFTER upload
    productDispatch({
      type: "UPDATE_CATEGORY",
      payload: { id: id, data: editedProduct },
    });
  }

  return (
    <section className="form category-form">

      <InputField state={[name, setName]} options={fields.name} />
      <InputField
        state={[shortDescription, setShortDescription]}
        options={fields.shortDescription}
      />
       <InputField
        state={[detailedDescription, setDetailedDescription]}
        options={fields.detailedDescription}
      />
      <InputImage
        state={[imageURL, setImageUrL]}
        label={fields.image.label}
        filename={filename}
      />
      <footer>
        <button className="button" onClick={onPublish}>
          Publish product
        </button>
      </footer>
    </section>
  );
}
