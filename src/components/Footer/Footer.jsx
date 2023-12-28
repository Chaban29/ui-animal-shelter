import FooterSocial from "./FooterSocial";
import FooterMenu from "./FooterMenu";

const Footer = (props) => {
  return (
    <div className="main__container">
      <div className="footer__content">
        <FooterSocial />
        <FooterMenu />
      </div>
      <div className="footer__copyright">
        <p className="footer-copy">Всі права захищено reserved@hatyna.ua</p>
      </div>
    </div>
  );
};

export default Footer;
