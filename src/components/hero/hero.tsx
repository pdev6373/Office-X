import Image from "next/image";
import useWindowDimension from "../../hooks/useWindowDimensions";
import { Heading } from "./heading";
import { Body } from "./body";
import { Button } from "../button";

export const Hero = () => {
  const { width } = useWindowDimension();

  return (
    <section className="hero">
      <span className="hero__image">
        {width > 375 ? (
          <Image src="/hero.svg" width={1440} height={546} />
        ) : (
          <Image src="/bg.svg" width={375} height={277} />
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
