import Image from "next/image";
import { Heading } from "./heading";
import { Body } from "./body";
import { Button } from "../button";

export const Hero = () => {
  return (
    <section className="hero">
      <span className="hero__image">
        <Image src="/hero.svg" width={1440} height={546} />
      </span>

      <div className="hero__content">
        <Heading />
        <Body />
        <Button link="" linkText="Book now" linkImage="/arrow.svg" />
      </div>
    </section>
  );
};
