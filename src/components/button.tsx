import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Button = ({ link, linkText, linkImage }) => {
  return (
    <div className="linkWrapper">
      <Link href={link}>
        <a className="linkWrapper__link">{linkText}</a>
      </Link>
      {linkImage && (
        <span className="linkWrapper__image">
          <Image src={linkImage} width={16} height={14} />
        </span>
      )}
    </div>
  );
};
