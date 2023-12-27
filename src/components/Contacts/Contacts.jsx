import contactsDecor from "../images/contacts/decor__04.svg";

const Contacts = (props) => {
  return (
    <section className="contacts">
      <div className="main__container">
        <div className="contacts__content">
          <div className="contacts__title">
            <h2 className="contacts__title--item">Наші контакти</h2>
          </div>
          <div className="contacts__content--block">
            <div
              className="conacts__content--items"
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div className="question__items">
                <span className="question__items--item">У вас є питання?</span>
                <span className="question__items--item">
                  Зв'яжіться з нами безпосередньо:
                </span>
              </div>
              <address className="question__address">
                <div className="question__address--first">
                  <span className="question__address--title">Адреса</span>
                  <span className="question__address--subTitle">
                    cмт. Жук <br /> м. Івано-Франківська область
                  </span>
                </div>
                <div className="question__address--second">
                  <span className="question__address--title">Телефон</span>
                  <div className="question__address--phones">
                    <a href="tell+380991234567" className="second--tell">
                      +38 (099) 123 45 67
                    </a>
                    <a href="tell+380991234567" className="second--tell">
                      +38 (088) 123 45 67
                    </a>
                  </div>
                </div>
                <div className="question__address--third">
                  <span className="question__address--title">
                    Електронна адреса
                  </span>
                  <a
                    href="malito:hatyna@gmail.com"
                    className="question__address--email"
                  >
                    hatyna@gmail.com
                  </a>
                </div>
              </address>
            </div>
            <div className="contacts__image--bg">
              <img
                src={contactsDecor}
                alt="contacts decoration"
                className="contacts__decor"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
