import Logo from '../images/header/Logo.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__nav">
          <div className="header__logo">
            <img src={Logo} alt="Animal Logo" className="header__logo-image" />
            <div className="animal__logo-descriptions">
              <h4 className="logo__title">ХАТИНА</h4>
              <span className="logo__subTitle">притулок для тварин</span>
            </div>
          </div>
          <nav className="nav">
            <ul className="nav__menu">
              <li className="nav__menu-item">
                <a href="!#" className="nav__menu-link is--active">
                  Домашня
                </a>
              </li>
              <li className="nav__menu-item">
                <a href="!#" className="nav__menu-link">
                  Про нас
                </a>
              </li>
              <li className="nav__menu-item">
                <a href="!#" className="nav__menu-link">
                  Вірні друзі
                </a>
              </li>
              <li className="nav__menu-item">
                <a href="!#" className="nav__menu-link">
                  Наші умови
                </a>
              </li>
              <li className="nav__menu-item">
                <a href="!#" className="nav__menu-link">
                  Локація
                </a>
              </li>
              <li className="nav__menu-item">
                <a href="!#" className="nav__menu-link">
                  Контакти
                </a>
              </li>
            </ul>
          </nav>
          <div className="list__button-items">
            <select name="languages" id="" className="header__select">
              <option value="UA" className="header__select-option">
                UA
              </option>
              <option value="EN" className="header__select-option">
                EN
              </option>
            </select>
            <button className="help" type="button">
              Допомогти
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
