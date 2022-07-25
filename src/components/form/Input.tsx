import React from "react";
import { InputProps } from "../../types/global";

function Input({ className, type, placeholder, value, onChange }: InputProps) {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Input;
