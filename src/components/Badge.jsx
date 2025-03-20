import "../styles/Badge.css";

export default function Badge({
  children,
  bcgColor = "var(--clr-light)",
  color = "var(--clr-main)",
  customClass,
}) {
  return (
    <p
      className={`badge ${customClass}`}
      style={{ backgroundColor: bcgColor, color: color }}
    >
      {children}
    </p>
  );
}
