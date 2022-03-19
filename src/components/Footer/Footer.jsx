import React from "react";
import "./assets/footer.css";
import Copyright from "./icons/copyright.svg";
import Inst from "./icons/inst.svg";
import Whats from "./icons/whats.svg";
import Gmail from "./icons/gmail.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-text-container">
          <p className="medium-font h3">МАРКЕТПЛЕЙС</p>
          <p className="h1">Octopus Shop</p>
          <p>
            Octopus Кыргызстан - онлайн маркетплейс, где вы можете заказать
            любой товар с доставкой прямо до дома.
          </p>
        </div>
        <button>Связаться с нами</button>
        <div className="copy-container">
          <img src={Copyright} alt="copyright" />
          <p>2020 Octopus Кыргызстан, все права защищены</p>
        </div>
        <hr />
        <div className="social">
          <a target="blank" href="#">
            <img src={Inst} alt="inst" />
          </a>
          <a target="blank" href="#">
            <img src={Whats} alt="whats" />
          </a>
          <a target="blank" href="#">
            <img src={Gmail} alt="gmail" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;