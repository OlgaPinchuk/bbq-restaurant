export default function InputField({ name, type = "text", value, onChange }) {
  return (
    <input
      id={name}
      name={name}
      type={type}
      className="form-control"
      value={value}
      onChange={onChange}
    />
  );
}
