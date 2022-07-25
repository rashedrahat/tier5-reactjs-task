export type InputProps = {
  className: string;
  type: "text";
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export type ButtonProps = {
  className: string;
  disabled: boolean;
  name: string;
  onClick: () => void;
};
