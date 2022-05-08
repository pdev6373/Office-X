import React from "react";

export const ContactExtras = () => {
  let extraTexts = ["2022 officeX, Inc.", "Privacy", "Terms", "Sitemap"];

  return (
    <div className="footer__extras__body__texts">
      {extraTexts.map((extraText, index, array) => (
        <div key={extraText} className="footer__extras__body__texts__text-dot">
          <div className="footer__extras__body__texts__text-dot__text">
            {extraText}
          </div>
          {index !== array.length - 1 && (
            <div className="footer__extras__body__texts__text-dot__dot"></div>
          )}
        </div>
      ))}
    </div>
  );
};
