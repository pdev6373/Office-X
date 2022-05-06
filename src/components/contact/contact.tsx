import React from "react";
import Image from "next/image";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { SectionHeader } from "../sectionHeader";
import { FooterInfo } from "./footerInfo";

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

  let socialIcons = [
    {
      path: "/facebook.svg",
      width: 18,
      height: 18,
    },
    {
      path: "/twitter.svg",
      width: 18,
      height: 18,
    },
    {
      path: "/instagram.svg",
      width: 18,
      height: 18,
    },
  ];

  let extraTexts = ["2022 officeX, Inc.", "Privacy", "Terms", "Sitemap"];

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
            <div className="footer__extras__body__texts">
              {extraTexts.map((extraText, index, array) => (
                <div
                  key={extraText}
                  className="footer__extras__body__texts__text-dot"
                >
                  <div className="footer__extras__body__texts__text-dot__text">
                    {extraText}
                  </div>
                  {index !== array.length - 1 && (
                    <div className="footer__extras__body__texts__text-dot__dot"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="footer__extras__body__iconsWrapper">
              {socialIcons.map((socialIcon) => (
                <span
                  className="footer__extras__body__iconsWrapper__icon"
                  key={socialIcon.path}
                >
                  <Image
                    src={socialIcon.path}
                    width={socialIcon.width}
                    height={socialIcon.height}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
