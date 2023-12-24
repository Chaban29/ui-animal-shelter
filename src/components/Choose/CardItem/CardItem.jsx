import buttonIcon from "./icons/arrow.svg";

const CardItem = (props) => {
  return (
    <div className="card__item">
      <img src={props.first} alt="Dog Icon" className="card-image" />
      <div className="card__item-titles">
        <div className="card__titles">
          <h5 className="card-title">{props.title}</h5>
          <span className="card-subTitle">{props.subTitle}</span>
        </div>
        <div className="card__button">
          <button className="arrow" type="button">
            <img src={buttonIcon} alt="Button Icon" className="arrow-left" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
