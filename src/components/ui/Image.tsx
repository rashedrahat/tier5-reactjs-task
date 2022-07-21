/* eslint-disable react/require-default-props */
import React from "react";

type ImageProps = {
  srcURL: string;
  alt: string;
  className?: string;
};

function Image({ srcURL, alt, className }: ImageProps) {
  return <img src={srcURL} aria-hidden alt={alt} className={className} />;
}

export default Image;
