import Image from "next/image";
import React from "react";

export const Body = ({ image, title }) => {
  return (
    <div className="facilities__content__facility">
      <span className="facilities__content__facility__image">
        <Image src={image.path} width={image.width} height={image.height} />
      </span>
      <h3 className="facilities__content__facility__title">{title}</h3>
    </div>
  );
};
