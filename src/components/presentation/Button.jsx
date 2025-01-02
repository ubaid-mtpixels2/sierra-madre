import React from "react";

function Button({ type, onClick,label, className }) {
  const isPrimary = type === "primary";

  return (
    <button
    onClick={onClick}
      className={`custom-button ${isPrimary ? "-bg--primary " : "-bg--secondary "   }` + className}
    >
      {label}
    </button>
  );
}

export default Button;
