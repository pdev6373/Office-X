import React from "react";
import { SectionHeader } from "../sectionHeader";
import { Body } from "./body";

export const Facilities = () => {
  let facilities = [
    {
      image: {
        path: "/executive-office.svg",
        width: 387,
        height: 329,
      },
      title: "Executive office",
    },
    {
      image: {
        path: "/conference-room.svg",
        width: 387,
        height: 329,
      },
      title: "Conference room",
    },
    {
      image: {
        path: "/co-work-spaces.svg",
        width: 387,
        height: 329,
      },
      title: "Co-work spaces",
    },
    {
      image: {
        path: "/meeting-room.svg",
        width: 387,
        height: 329,
      },
      title: "Meeting room",
    },
    {
      image: {
        path: "/training-room.svg",
        width: 387,
        height: 329,
      },
      title: "Training room",
    },
  ];
  return (
    <section className="facilities">
      <SectionHeader normalText="Our" accentText="Facilities" />
      <div className="facilities__content">
        {facilities.map((facility) => (
          <Body image={facility.image} title={facility.title} />
        ))}
      </div>
    </section>
  );
};
