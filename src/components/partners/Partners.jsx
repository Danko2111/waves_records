import fuga from "../../assets/images/LogoFuga.png";
import fyeo from "../../assets/images/LogoFyeo.png";
import sony from "../../assets/images/LogoSony.png";
import diamond from "../../assets/images/LogoIDK.png";
import "./Partners.scss";

function Partners() {
  return (
    <section className="partners" id="partners">
      <div className="partners__container">
        <h3 className="partners__title">Our Partners</h3>
        <ul className="partners__items">
          <li className="partners__item">
            <img className="partners__icon" src={diamond}></img>
          </li>
          <li className="partners__item">
            <img className="partners__icon" src={sony}></img>
          </li>
          <li className="partners__item">
            <img className="partners__icon" src={fyeo}></img>
          </li>
          <li className="partners__item">
            <img className="partners__icon" src={fuga}></img>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Partners;
