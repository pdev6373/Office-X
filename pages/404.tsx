import React from "react";
import Image from "next/image";
import { ContactIcons } from "./../src/components/contact/contactIcons";
import { ContactExtras } from "./../src/components/contact/contactExtras";
import Link from "next/link";
import useWindowDimensions from "./../src/hooks/useWindowDimensions";

const PageNotFound = () => {
  const { width } = useWindowDimensions();

  return (
    <section className="not-found">
      <div className="not-found__body">
        <span className="not-found__emoji-wrapper">
          <Image
            src="/emoji.svg"
            width={width > 400 ? "159" : "102"}
            height={width > 400 ? "159" : "102"}
            className="not-found__emoji-wrapper__emoji"
          />
        </span>
        <h3 className="not-found__text">
          So sorry, we could not find the page your are looking for
        </h3>
        <Link href="/">
          <a className="not-found__link">
            <span className="not-found__link__icon-wrapper">
              <img
                src="/arrow-right.svg"
                alt=""
                width="18"
                height="18"
                className="not-found__link__icon-wrapper__icon"
              />
            </span>
            Return to home
          </a>
        </Link>
      </div>

      <footer className="not-found__footer">
        <ContactExtras />
        <ContactIcons />
      </footer>
    </section>
  );
};

export default PageNotFound;
