import React from "react";
import Image from "next/image";

export const ButtonIcon = ({ linkImage, width, height }) => {
  return (
    <span className="linkWrapper__image">
      <Image src={linkImage} width={width} height={height} />
    </span>
  );
};
