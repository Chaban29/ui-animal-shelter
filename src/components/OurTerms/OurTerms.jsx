import TermsItem from "./TermsItem";

const OurTerms = (props) => {
  return (
    <section className="ourTerms">
      <div className="main__container">
        <div className="ourTerms__content">
          <div className="ourTerms__title">
            <h2 className="ourTerms__title-item">Наші умови</h2>
          </div>
          <div className="ourTerms__cards">
            <TermsItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTerms;
