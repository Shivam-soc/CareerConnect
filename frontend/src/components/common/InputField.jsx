import "./InputField.css";

function InputField({
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  disabled = false,
}) {
  return (
    <input
      className="input-field"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      disabled={disabled}
    />
  );
}

export default InputField;