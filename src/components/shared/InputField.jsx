export default function InputField({ options, state }) {
  const [getter, setter] = state;
  const { instructions, label, placeholder, type } = options;

  return (
    <fieldset className="input-field">
      <legend><b>{label}:</b></legend>
        {instructions && <small>{instructions}</small>}
        <input
          type={type}
          placeholder={placeholder}
          value={getter}
          onChange={(event) => setter(event.target.value)}
        />
    </fieldset>
  );
}
