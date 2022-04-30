import React from "react";
import { SectionHeader } from "../sectionHeader";
import { Body } from "./body";

export const Coverletter = () => {
  return (
    <section className="coverletter">
      <SectionHeader normalText="We are a" accentText="community" />
      <Body />
    </section>
  );
};
