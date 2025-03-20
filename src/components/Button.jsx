import "../styles/Button.css";

export default function Button({
  type = "primary",
  onClick,
  disableCondition,
  submit = false,
  children,
}) {
  return (
    <button
      type={submit && "submit"}
      className={`btn ${type === "primary" ? "" : type} ${
        disableCondition && "disabled"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
