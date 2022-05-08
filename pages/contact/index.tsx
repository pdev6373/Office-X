import Image from "next/image";
import { Header } from "../../src/components/header/header";
import { ContactIcons } from "../../src/components/contact/contactIcons";
import { ContactExtras } from "../../src/components/contact/contactExtras";
import useWindowDimensions from "../../src/hooks/useWindowDimensions";

const Contact = () => {
  const { width } = useWindowDimensions();

  const setImage = (imgDetails) => {
    return (
      <Image
        src={imgDetails.path}
        width={imgDetails.width}
        height={imgDetails.height}
        className="contactPage__hero-wrapper__hero"
      />
    );
  };

  return (
    <section className="contactPage">
      <Header />

      <span className="contactPage__hero-wrapper">
        {width > 400
          ? setImage({
              path: "/contact-hero.svg",
              width: "1440",
              height: "248",
            })
          : setImage({
              path: "/contact-hero-mobile.svg",
              width: "400",
              height: "156.8",
            })}
      </span>

      <form className="contact-form" action="">
        <div className="contact-form__field">
          <label className="contact-form__field__label" htmlFor="">
            Name
          </label>
          <input
            className="contact-form__field__input"
            type="text"
            name=""
            id=""
            placeholder="John Doe"
          />
        </div>

        <div className="contact-form__field">
          <label className="contact-form__field__label" htmlFor="">
            Email address
          </label>
          <input
            className="contact-form__field__input"
            type="email"
            name=""
            id=""
            placeholder="example@email.com"
          />
        </div>

        <div className="contact-form__field">
          <label className="contact-form__field__label" htmlFor="">
            Phone number
          </label>
          <input
            className="contact-form__field__input"
            type="number"
            name=""
            id=""
            placeholder="08081112345"
          />
        </div>

        <div className="contact-form__field">
          <label className="contact-form__field__label" htmlFor="">
            Message
          </label>
          <textarea
            className="contact-form__field__message"
            name=""
            id=""
            placeholder="Write you message here"
          ></textarea>
        </div>

        <div className="contact-form__field">
          <input
            className="contact-form__field__submit"
            type="submit"
            name=""
            id=""
            value={width > 400 ? "Submit here" : "Submit"}
            onClick={(e) => e.preventDefault()}
          />
        </div>
      </form>

      <footer className="contactPage__footer">
        <ContactExtras />
        <ContactIcons />
      </footer>
    </section>
  );
};

export default Contact;
