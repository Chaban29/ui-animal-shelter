/* eslint-disable jsx-a11y/anchor-is-valid */
import FooterLogo from "../images/footer/footer__logo.png";
import facebookLogo from "../images/footer/Facebook.svg";
import instagramLogo from "../images/footer/Instagram.svg";
import telegramLogo from "../images/footer/Telegram.svg";

const FooterSocial = (props) => {
  return (
    <div className="footer__social--block">
      <div className="footer__logo--block">
        <img src={FooterLogo} alt="Footer Logo Icon" className="footer__logo" />
        <div className="footer__titles">
          <h5 className="footer__title">ХАТИНА</h5>
          <p className="footer__subTitle">притулок для тварин</p>
        </div>
      </div>
      <p className="footer__logo--description">
        Приєднутесь до нас в соціальних мережах
      </p>
      <div className="footer__social--media">
        <a href="#" className="social__link" rel="noreferrer">
          <img src={facebookLogo} alt="facebook logo" className="social-logo" />
        </a>
        <a href="#" className="social__link" rel="noreferrer">
          <img
            src={instagramLogo}
            alt="instagram logo"
            className="social-logo"
          />
        </a>
        <a href="#" className="social__link" rel="noreferrer">
          <img src={telegramLogo} alt="telegram logo" className="social-logo" />
        </a>
      </div>
    </div>
  );
};

export default FooterSocial;
