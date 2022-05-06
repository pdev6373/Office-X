import Image from "next/image";
import useWindowDimension from "../../hooks/useWindowDimensions";
import { Heading } from "./heading";
import { Body } from "./body";
import { Button } from "../button/button";

export const Hero = () => {
  const { width } = useWindowDimension();

  return (
    <section className="hero">
      <span className="hero__image">
        {width <= 500 ? (
          <Image src="/hero-mobile.svg" width={550} height={406.2667} />
        ) : width < 600 ? (
          <Image src="/hero6.png" width={899} height={541} />
        ) : width < 700 ? (
          <Image src="/hero5.png" width={1061} height={546} />
        ) : width < 800 ? (
          <Image src="/hero4.png" width={1167} height={548} />
        ) : width < 960 ? (
          <Image src="/hero3.png" width={1195} height={538} />
        ) : width < 1060 ? (
          <Image src="/hero2.png" width={1060} height={425.8651} />
        ) : (
          <Image src="/hero.svg" width={1440} height={546} />
        )}
      </span>

      <div className="hero__content">
        <Heading />
        <Body />
        <Button link="/" linkText="Book now" linkImage="/arrow.svg" />
      </div>
    </section>
  );
};
