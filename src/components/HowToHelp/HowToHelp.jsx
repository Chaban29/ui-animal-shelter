const HowToHelp = (props) => {
  return (
    <section className="howToHelp">
      <div className="main__container">
        <div className="help__content">
          <div className="help__title--item">
            <h2 className="help__title">Як допомогти</h2>
          </div>
          <div className="help__content--block">
            <h3 className="block__title">Бажаєте допомогти притулку?</h3>
            <p className="block__subTitle">
              Перейдіть за посиланням та заповніть форму Ми з вами обов’язково
              звяжемось
            </p>
            <button className="block__button" type="button">
              Зв'яжіться з нами
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
