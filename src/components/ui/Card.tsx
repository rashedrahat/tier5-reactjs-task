import React from "react";
import { CardProps } from "../../types/global";

function Card({ id, className, content }: CardProps) {
  return (
    <div key={id} className={className}>
      {content}
    </div>
  );
}

export default Card;
