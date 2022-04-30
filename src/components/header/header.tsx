import React from "react";
import { Logo } from "../logo";
import { Nav } from "./nav";

export const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Nav />
    </header>
  );
};
