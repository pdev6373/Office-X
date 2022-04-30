import Link from "next/link";

export const NavLinks = ({ navlink, navtext }) => {
  return (
    <li className="header__nav__list__item">
      <Link href={`/${navlink}`}>
        <a
          className={`header__nav__list__item__link header__nav__list__item__link--${navlink}`}
        >
          {navtext}
        </a>
      </Link>
    </li>
  );
};
