import animalLogo from "../images/hero/Animal Image.png";


const Hero = () => {
  return (
    <section className="hero">
      <div className="main__container">
        <div className="hero__content-block">
          <div className="hero__content">
            <div className="hero__titles-items">
              <h1 className="hero__title">
                Цим оченятам дуже потрібні любов і турбота
              </h1>
              <p className="hero__subTitle">
                Вірний друг радітиме тобі завжди. Йому потрібно дуже мало -
                теплий дім та дбайливий господар
              </p>
            </div>
            <button className="choose" type="button">
              Обрати
            </button>
          </div>
          <div className="hero__image-block">
            <img
              src={animalLogo}
              alt="Animal Logo"
              className="animal__logo-item"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
