import React from "react";

export const SectionHeader = ({ normalText, accentText }) => {
  return (
    <h2 className="sectionHeader">
      {normalText} <div className="sectionHeader__accent">{accentText}</div>
    </h2>
  );
};
