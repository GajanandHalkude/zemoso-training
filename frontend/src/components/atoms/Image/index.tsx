import React from "react";

interface ImageComponentProps {
  src: string;
  height?: string;
  width?: string;
}

const ImageComponent = (props: ImageComponentProps) => {
  return <img data-testid="image" src={props.src} width={props.width} height={props.height}></img>;
};

export default ImageComponent