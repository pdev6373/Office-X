import Image from "next/image";
import React from "react";

export const Body = ({ icon, title, body }) => {
  return (
    <div className="about__content__details">
      <span className="about__content__details__image">
        <Image src={icon.path} width={icon.width} height={icon.height} />
      </span>
      <div className="about__content__details__info">
        <h2 className="about__content__details__info__title">{title}</h2>
        <p className="about__content__details__info__body">{body}</p>
      </div>
    </div>
  )
}