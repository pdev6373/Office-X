import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { SectionHeader } from "../sectionHeader";
import { Body } from "./body";

export const Facilities = () => {
  const { width } = useWindowDimensions();

  const getImageDimension = (path: string, title: string) => {
    const getImageWidth = () => (width > 600 ? 387 : 277);
    const getImageHeight = () => (width > 600 ? 329 : 232);

    return {
      image: {
        path,
        width: getImageWidth(),
        height: getImageHeight(),
      },
      title,
    };
  };

  const facilities = [
    getImageDimension("/executive-office.svg", "Executive office"),
    getImageDimension("/conference-room.svg", "Conference room"),
    getImageDimension("/co-work-spaces.svg", "Co-work spaces"),
    getImageDimension("/meeting-room.svg", "Meeting room"),
    getImageDimension("/training-room.svg", "Training room"),
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
