import React from "react";
import useWindowDimension from "../../hooks/useWindowDimensions";
import { ButtonLink } from "./buttonLink";
import { ButtonIcon } from "./buttonIcon";

export const Button = ({ link, linkText, linkImage }) => {
  const { width } = useWindowDimension();

  return (
    <div className="linkWrapper">
      <ButtonLink link={link} linkText={linkText} />
      {width > 375 ? (
        <ButtonIcon linkImage={linkImage} width={16} height={14} />
      ) : (
        <ButtonIcon linkImage={linkImage} width={12} height={10.5} />
      )}
    </div>
  );
};
