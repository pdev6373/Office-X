import React from "react";
import Image from "next/image";

export const Body = () => {
  return (
    <div className="coverletter__content">
      <span className="coverletter__content__image">
        <Image src="/community.svg" width="542" height="296" />
      </span>

      <div className="coverletter__content__body">
        <p className="coverletter__content__body__text">
          Be the first to know about our products and services by subscribing to
          our newsletter
        </p>
        <form
          className="coverletter__content__body__form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="coverletter__content__body__form__email"
            type="text"
            placeholder="email address"
          />
          <input
            onClick={(e) => e.preventDefault()}
            className="coverletter__content__body__form__submit"
            type="submit"
            value="Subscribe"
          />
        </form>
      </div>
    </div>
  );
};
