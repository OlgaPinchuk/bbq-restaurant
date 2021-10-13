// NPM packages
import { useState } from "react";

// Project files
import InputField from "../../shared/InputField";
import InputImage from "../../shared/InputImage";
import fields from "./fields.json";
import { useCategories } from "../../../state/CategoriesProvider";
import { updateDocument, createDocument } from "../../../scripts/fireStore";

export default function CategoryForm({ category, id }) {
  // Local state
  const [imageURL, setImageUrL] = useState(category.imageURL);
  const [name, setName] = useState(category.name);
  const [description, setDescription] = useState(category.description);

  // Properties
  const { dispatch } = useCategories();
  const slug = name.toLowerCase().split(" ").join("-");
  const filename = `images/${slug}`;

  // Methods
  async function onPublish() {
    const path = "categories";
    const editedCategory = {
      imageURL: imageURL,
      name: name,
      description: description,
      slug: slug,
    };

    console.log("editedCategory", editedCategory);

    // to do
    // 1 upload to firebase using await
    if (id !== "new-category") await updateDocument(path, id, editedCategory);
    else await createDocument(path, editedCategory);

    // 2 call the dispatches to update candidates AFTER upload
    dispatch({
      type: "UPDATE_CATEGORY",
      payload: { id: id, data: editedCategory },
    });
  }

  return (
    <section className="form category-form">
      <p>ImageURL: @{imageURL}@</p>

      <InputField state={[name, setName]} options={fields.name} />
      <InputField
        state={[description, setDescription]}
        options={fields.description}
      />
      <InputImage
        state={[imageURL, setImageUrL]}
        label={fields.image.label}
        filename={filename}
      />
      <footer>
        <button className="button" onClick={onPublish}>
          Publish profile
        </button>
      </footer>
    </section>
  );
}
