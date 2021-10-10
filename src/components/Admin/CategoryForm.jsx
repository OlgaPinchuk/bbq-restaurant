// Project files
import InputField from "../shared/InputField";
import { useFormFields } from "../../hooks/useFormFields";

export default function CategoryForm({ categoryInfo, onSubmit }) {
  const [fields, handleFieldChange] = useFormFields({ ...categoryInfo });

  // Methods
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ ...categoryInfo, ...fields, slug: createSlug(fields.name) });
  }

  function createSlug(name) {
    return name.toLowerCase().split(" ").join("-");
  }

  return (
    <form className="form edit-category" onSubmit={handleSubmit}>
      <InputField
        name="name"
        value={fields.name || ""}
        onChange={handleFieldChange}
      />
    </form>
  );
}
