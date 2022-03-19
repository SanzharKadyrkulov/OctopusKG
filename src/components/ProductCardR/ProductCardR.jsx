import React from "react";
import "./assets/ProductCardR.css";
import Velik from "./velik.png";
const ProductCardR = ({ id, marginRight }) => {
  return (
    <div className="product3" style={marginRight ? { marginRight } : {}}>
      <div className="product3-image-container3">
        <img className="img3" src={Velik} alt="stich" />
      </div>
      <div className="product3-text3">
        <p className="price3 medium-font">29 886 c</p>
        <p className="name3">Велосипед | Мужской</p>
        <p className="desc3 light-font">
          Горный Велосипед Cube Stereo 140 HPC Race 27.5, 27.5, 2021
        </p>
      </div>
    </div>
  );
};

export default ProductCardR;
