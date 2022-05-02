import React from "react";
import Link from "next/link";
import Image from "next/image";
import useWindowDimension from "../hooks/useWindowDimensions";

export const Button = ({ link, linkText, linkImage }) => {
  const { width } = useWindowDimension();

  return (
    <div className="linkWrapper">
      <Link href={link}>
        <a className="linkWrapper__link">{linkText}</a>
      </Link>
      {width > 375 ? (
        <span className="linkWrapper__image">
          <Image src={linkImage} width={16} height={14} />
        </span>
      ) : (
        <span className="linkWrapper__image">
          <Image src={linkImage} width={12} height={10.5} />
        </span>
      )}
    </div>
  );
};
