import React from "react";
import { FooterText } from "./footerText";

export const FooterInfo = ({ heading, body }) => {
  return (
    <div className="footer__content__item">
      <div className="footer__content__item__heading">{heading}</div>
      <div className="footer__content__item__body">
        {body.map((item) => (
          <FooterText key={item} text={item} />
        ))}
      </div>
    </div>
  );
};
