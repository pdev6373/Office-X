import React from "react";
import { SectionHeader } from "../sectionHeader";
import { Body } from "./body";

export const About = () => {
  let details = [
    {
      icon: {
        path: "/location.svg",
        width: 40,
        height: 40,
      },
      title: "Location:",
      body: "We are located at a accessible environment within the metropolis",
    },
    {
      icon: {
        path: "/security.svg",
        width: 40,
        height: 40,
      },
      title: "Security",
      body: "We have well trained  proactive guards to enusure your security at all times",
    },
    {
      icon: {
        path: "/internet.svg",
        width: 40,
        height: 40,
      },
      title: "Internet:",
      body: "We provide a stable and fast internet service you can always rely on",
    },
  ];

  return (
    <section className="about">
      <SectionHeader normalText="Why use" accentText="our space?" />
      <div className="about__content">
        {details.map((detail) => (
          <Body
            key={detail.title}
            icon={detail.icon}
            title={detail.title}
            body={detail.body}
          />
        ))}
      </div>
    </section>
  );
};
