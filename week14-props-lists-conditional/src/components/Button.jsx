
function Button({
  label,
  variant = "primary",
  size = "md",
  icon,
  ...rest
}) {
  return (
    <button
      className={`custom-btn ${variant} ${size}`}
      {...rest}
    >
      {icon && <span>{icon} </span>}
      {label}
    </button>
  );
}

export default Button;
