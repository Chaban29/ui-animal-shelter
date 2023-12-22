import aboutDecoration from "../images/about/decor.svg";

const About = () => {
  return (
    <section className="about">
      <div className="main__container">
        <div className="about__content-block">
          <div className="about__image-item">
            <img
              src={aboutDecoration}
              alt="Dog Icon"
              className="about__decoration-item"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
