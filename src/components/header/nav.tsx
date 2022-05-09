import React from "react";
import { NavLinks } from "./navLinks";

export const Nav = () => {
  let navLinks = [
    {
      navlink: "",
      navtext: "Home",
    },
    {
      navlink: "about",
      navtext: "About",
    },
    {
      navlink: "spaces",
      navtext: "Spaces",
    },
    {
      navlink: "contact",
      navtext: "Contact us",
    },
  ];
  return (
    <nav className="header__nav">
      <ul className="header__nav__list">
        {navLinks.map((navLink) => (
          <NavLinks
            key={navLink.navlink}
            navlink={navLink.navlink}
            navtext={navLink.navtext}
          />
        ))}
      </ul>
    </nav>
  );
};
