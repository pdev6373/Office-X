import React from "react";
import Link from "next/link";

export const ButtonLink = ({ link, linkText }) => {
  return (
    <Link href={link}>
      <a className="linkWrapper__link">{linkText}</a>
    </Link>
  );
};
