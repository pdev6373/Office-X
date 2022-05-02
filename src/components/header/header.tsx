import React, { useState } from "react";
import Image from "next/image";
import useWindowDimension from "../../hooks/useWindowDimensions";
import { Logo } from "../logo";
import { Nav } from "./nav";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconDetails, setIconDetails] = useState({
    path: "/Vector.svg",
    width: 15.75,
    height: 12,
  });
  const { width } = useWindowDimension();

  function handleClick() {
    if (!isOpen)
      setIconDetails({ path: "/Vector (2).svg", width: 14.5, height: 11 });
    else setIconDetails({ path: "/Vector.svg", width: 15.75, height: 12 });

    setIsOpen(!isOpen);
  }

  return (
    <header className="header">
      {width > 375 ? (
        <>
          <Logo />
          <Nav />
        </>
      ) : (
        <>
          <div className="header__logo-hamburger">
            <Logo />
            <span className="header__logo-hamburger__image">
              <Image
                onClick={handleClick}
                src={iconDetails.path}
                width={iconDetails.width}
                height={iconDetails.height}
              />
            </span>
          </div>
          {isOpen && <Nav />}
        </>
      )}
    </header>
  );
};
