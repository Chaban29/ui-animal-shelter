/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import FooterInfoItem from "./FooterInfoItem";
import { useState } from "react";

const FooterMenu = (props) => {
  const [link] = useState([
    {
      id: 0,
      item: "Про нас",
    },
    {
      id: 1,
      item: "Наші умови",
    },
    {
      id: 2,
      item: "Наша команда",
    },
    {
      id: 3,
      item: "Історія створення",
    },
  ]);
  const [twoLink] = useState([
    {
      id: 4,
      item: "Вірні друзі",
    },
    {
      id: 5,
      item: "Обрати друга",
    },
    {
      id: 6,
      item: "Щасливчики",
    },
    {
      id: 7,
      item: "Стати волонтером",
    },
  ]);
  const [thirdLink] = useState([
    {
      id: 8,
      item: "Локація",
    },
    {
      id: 9,
      item: "Контакти",
    },
    {
      id: 10,
      item: "Інормація",
    },
  ]);
  return (
    <div className="footer__menu">
      <ul className="footer__first--menu">
        {link.map((link) => (
          <li key={link.id} className="first__item">
            <a href="#!" className="footer__link">
              {link.item}
            </a>
          </li>
        ))}
      </ul>
      <ul className="footer__second--menu">
        {twoLink.map((link) => (
          <li key={link.id} className="second__item">
            <a href="#!" className="footer__link">
              {link.item}
            </a>
          </li>
        ))}
      </ul>
      <ul className="footer__third--menu">
        {thirdLink.map((link) => (
          <li key={link.id} className="third__item">
            <a href="#!" className="footer__link">
              {link.item}
            </a>
          </li>
        ))}
      </ul>
      <FooterInfoItem />
    </div>
  );
};

export default FooterMenu;
