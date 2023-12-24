import mapIcon from "../images/location/Location.svg";

const Location = () => {
  return (
    <section className="location">
      <div className="main__container">
        <div className="location__content">
          <div className="location__title-item">
            <h3 className="location-title">Локація</h3>
          </div>
          <div className="location__bg-item">
            <img src={mapIcon} alt="map pin icon" className="map-pin" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
