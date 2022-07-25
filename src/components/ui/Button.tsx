import React from "react";
import { ButtonProps } from "../../types/global";

function Button({ className, disabled, name, onClick }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type="button"
      className={className}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Button;
