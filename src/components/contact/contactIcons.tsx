import React from "react";
import Image from "next/image";

export const ContactIcons = () => {
  let socialIcons = [
    {
      path: "/facebook.svg",
      width: 18,
      height: 18,
    },
    {
      path: "/twitter.svg",
      width: 18,
      height: 18,
    },
    {
      path: "/instagram.svg",
      width: 18,
      height: 18,
    },
  ];

  return (
    <div className="footer__extras__body__iconsWrapper">
      {socialIcons.map((socialIcon) => (
        <span
          className="footer__extras__body__iconsWrapper__icon"
          key={socialIcon.path}
        >
          <Image
            src={socialIcon.path}
            width={socialIcon.width}
            height={socialIcon.height}
          />
        </span>
      ))}
    </div>
  );
};
