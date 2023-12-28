import { useState } from "react";

const FooterInfoItem = (props) => {
  const [item] = useState([
    {
      id: 0,
      description: "Допомогти матеріально:",
    },
    {
      id: 1,
      description: "ГО “ХАТИНА”",
    },
    {
      id: 2,
      description: "ЄДРПОУ: 123456789",
    },
    {
      id: 3,
      description: "Карта Приватбанку",
    },
    {
      id: 4,
      description: "4141 2929 4646 1111",
    },
    {
      id: 5,
      description: "Чабан Роман Андрійович",
    },
    {
      id: 6,
      description: "Допомогти матеріально:",
    },
  ]);
  return (
    <div className="footer__info--item">
      <ul className="info__menu">
        {item.map((item) => (
          <li className="info-item" key={item.id}>{item.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterInfoItem;
