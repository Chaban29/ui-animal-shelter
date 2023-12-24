import CardItem from "./CardItem/CardItem";
import first from "../images/choose/first.png";
import second from "../images/choose/second.png";
import third from "../images/choose/third.png";
import four from "../images/choose/four.png";
import five from "../images/choose/five.png";
import six from "../images/choose/six.png";

const Choose = (props) => {
  return (
    <section className="choose">
      <div className="main__container">
        <div className="choose__content-block">
          <div className="choose__titles">
            <h2 className="choose__title">Вибери собі вірного друга</h2>
            <p className="choose__subTitle">
              Не купуй – прихисти, адже справжня дружба не продається!
            </p>
          </div>
          <div className="choose__cards-items">
            <CardItem
              first={first}
              title="Дружок"
              subTitle="Вік 1 рік 3 місяці"
            />
            <CardItem first={second} title="Бім" subTitle="Вік 8 місяців" />
            <CardItem
              first={third}
              title="Сільвер"
              subTitle="Вік 1 рік 9 місяців"
            />
            <CardItem first={four} title="Білка" subTitle="Вік 2 роки" />
            <CardItem
              first={five}
              title="Лаккі"
              subTitle="Вік 2 ріки 1 місяць"
            />
            <CardItem first={six} title="Журик" subTitle="Вік 1 рік" />
          </div>
          <button className="choose__button" type="button">
            Показати більше
          </button>
        </div>
      </div>
    </section>
  );
};

export default Choose;
