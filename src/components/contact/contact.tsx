import React from "react";
import Image from "next/image";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { SectionHeader } from "../sectionHeader";
import { FooterInfo } from "./footerInfo";
import { ContactIcons } from "./contactIcons";
import { ContactExtras } from "./contactExtras";

export const Contact = () => {
  const { width } = useWindowDimensions();

  let footerInfos = [
    {
      heading: "About",
      body: [
        "Who we are",
        "what we do",
        "value proposition",
        "Services",
        "Investors",
      ],
    },

    {
      heading: "Support",
      body: [
        "Health Center",
        "Safety information",
        "Cancellation options",
        "Our COVID-19 Response",
      ],
    },

    {
      heading: "Contact us",
      body: [
        <>
          <div className="footer__content__item__body__text__accent">
            send us an email:&nbsp;
          </div>
          <div className="footer__content__item__body__text__normal">
            inquiry@officex.com
          </div>
        </>,
      ],
    },

    {
      heading: "Location",
      body: ["No 72 Berkeley way Surulere, Lagos state"],
    },

    {
      heading: "Work days/hours",
      body: ["Mon-Fri", "08:00pm - 07:00pm"],
    },
  ];

  return (
    <>
      <section className="contact">
        <SectionHeader normalText="Here’s where" accentText="you can find us" />

        <span className="contact__image">
          {width > 375 ? (
            <Image src="/map.svg" width="1440" height="620" />
          ) : (
            <Image src="/map-mobile.svg" width="420" height="219" />
          )}
        </span>
      </section>

      <footer className="footer">
        <div className="footer__content">
          {footerInfos.map((footerInfo) => (
            <FooterInfo
              key={footerInfo.heading}
              heading={footerInfo.heading}
              body={footerInfo.body}
            />
          ))}
        </div>

        <div className="footer__extras">
          <div className="footer__extras__line"></div>
          <div className="footer__extras__body">
            <ContactExtras />
            <ContactIcons />
          </div>
        </div>
      </footer>
    </>
  );
};
