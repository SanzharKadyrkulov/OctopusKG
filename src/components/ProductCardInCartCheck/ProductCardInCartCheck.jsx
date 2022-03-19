import React from "react";
import "./assets/ProductCardInCartCheck.css";
import Stich from "../ProductCardS/icons/stich.png";
const ProductCardInCartCheck = ({ id }) => {
  return (
    <div
      // onClick={() => navigate("/" + id)}
      className="cart-check"
    >
      <div className="cart-check-img-con">
        <img src={Stich} width={50} alt="" />
      </div>
      <div className="cart-check-text">
        <p className="light-font">Газированный напиток “Coca-Cola” 0.5 л</p>
        <p className="light-font">0,5 мл | Газированный</p>
        <p className="light-font">1 шт</p>
      </div>
    </div>
  );
};

export default ProductCardInCartCheck;
