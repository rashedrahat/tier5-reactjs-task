import React from "react";

type TextAreaProps = {
  // eslint-disable-next-line react/require-default-props
  className?: string;
  placeholder: string;
};

function TextArea({ placeholder, className }: TextAreaProps) {
  return <textarea className={className} placeholder={placeholder} />;
}

export default TextArea;
