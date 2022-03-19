import React from "react";
import "./assets/AttentionCard.css";
import Car from "./car.png";
const AttentionCard = () => {
  return (
    <div className="product2">
      <div className="product2-image-container2">
        <img className="img2" src={Car} alt="stich" />
      </div>
      <div className="product2-text2">
        <p className="desc2">Скидки на игрушки -15%</p>
      </div>
    </div>
  );
};

export default AttentionCard;
