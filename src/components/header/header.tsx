import React, { useState } from "react";
import Image from "next/image";
import useWindowDimension from "../../hooks/useWindowDimensions";
import { Logo } from "../logo";
import { Nav } from "./nav";

export const Header = () => {
  const { width } = useWindowDimension();
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState("/hamburger.svg");

  const setLogoProps = () =>
    width > 1000
      ? { path: "/logo.svg", width: 105, height: 40 }
      : width > 700
      ? { path: "/logo-mobile.svg", width: 91.875, height: 35 }
      : width > 400
      ? { path: "/logo-mobile.svg", width: 78.75, height: 30 }
      : { path: "/logo-mobile.svg", width: 67, height: 24 };

  const handleClick = () => {
    if (!isOpen) setIcon("/close.svg");
    else setIcon("/hamburger.svg");

    setIsOpen(!isOpen);
  };

  const setHamburger = () =>
    width <= 600 && (
      <Image
        onClick={handleClick}
        src={icon}
        width={width > 400 ? 22 : 15.75}
        height={width > 400 ? 16.5 : 12}
      />
    );

  const setNav = () => (width > 600 ? <Nav /> : isOpen && <Nav />);

  return (
    <header className="header">
      <div className="header__logo-hamburger">
        <Logo logoProps={setLogoProps()} />
        <span className="header__logo-hamburger__image">{setHamburger()}</span>
      </div>
      {setNav()}
    </header>
  );
};
