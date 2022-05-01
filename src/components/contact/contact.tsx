import Image from "next/image";
import React from "react";
import { SectionHeader } from "../sectionHeader";
import { FooterInfo } from "./footerInfo";

export const Contact = () => {
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
      // body: ["send us an email: inquiry@officex.com"],
      body: [
        <>
          <div className="footer__content__item__body__text--bold">
            send us an email:
          </div>
          inquiry@officex.com
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
          <Image src="/map.svg" width="1440" height="620" />
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
              {extraTexts.map((extraText) => (
                <>
                  <div className="footer__extras__body__texts__text">
                    {extraText}
                  </div>
                  <div className="footer__extras__body__texts__dot"></div>
                </>
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
