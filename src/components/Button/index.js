import "./index.css";

export const Button = ({ children, onClick, variant, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`button-container ${
        variant === "outline" ? "outline" : "main"
      }`}
    >
      {icon && (
        <img
          className="trash-icon"
          src={`./../images/${icon}.svg`}
          alt={`supermarket_icon${icon}`}
        />
      )}
      {children}
    </button>
  );
};
