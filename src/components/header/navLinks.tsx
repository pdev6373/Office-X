import Link from "next/link";
import { useRouter } from "next/router";

export const NavLinks = ({ navlink, navtext }) => {
  const router = useRouter();

  return (
    <li className="header__nav__list__item">
      <Link href={`/${navlink}`}>
        <a
          className={
            router.pathname == `/${navlink}`
              ? `header__nav__list__item__link header__nav__list__item__link--${navlink} current`
              : `header__nav__list__item__link header__nav__list__item__link--${navlink}`
          }
          // className={`header__nav__list__item__link header__nav__list__item__link--${navlink}`}
        >
          {navtext}
        </a>
      </Link>
    </li>
  );
};
