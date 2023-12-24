import { Fragment } from "react";
import decor from "../images/ourTerms/Decor_01.svg";
import decorTwo from "../images/ourTerms/Decor_02.svg";
import decorThird from "../images/ourTerms/Decor_03.svg";

const TermsItem = (props) => {
  return (
    <Fragment>
      <div className="terms__card">
        <div className="terms__titles">
          <h4 className="terms-title">Лише власник</h4>
          <p className="terms-subTitle">
            Собаку чи кота віддаємо лише в руки майбутньому власнику
          </p>
        </div>
        <div className="terms__card-image one-bg">
          <img src={decor} alt="Decor" className="card-image decor-pos" />
        </div>
      </div>
      <div className="terms__card two-card">
        <div className="terms__titles">
          <h4 className="terms-title">Тварина для сім'ї</h4>
          <p className="terms-subTitle">
            Творинки не для утримання на ланцюгу, охорони підприєства чи
            самовигулу
          </p>
        </div>
        <div className="terms__card-image two-bg">
          <img src={decorTwo} alt="Decor" className="card-image decor-posTwo" />
        </div>
      </div>
      <div className="terms__card third-card">
        <div className="terms__titles">
          <h4 className="terms-title">Відповідальність</h4>
          <p className="terms-subTitle">
            Не забирайте тварину з притулку, якщо не готові про неї піклуватись
          </p>
        </div>
        <div className="terms__card-image third-bg">
          <img src={decorThird} alt="Decor" className="card-image decor-posThird" />
        </div>
      </div>
    </Fragment>
  );
};

export default TermsItem;
