import React from "react";
import "./assets/ProductCardInFav.css";
import Stich from "../ProductCardS/icons/stich.png";
import Cart from ".././ProductCardS/icons/shopping-cart-add.svg";
import Fav from "./icons/favoritefilled.svg";
import { useNavigate } from "react-router-dom";
const ProductCardInFav = ({ id }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/" + id)} className="favorite">
      <div className="favorite-img-con">
        <img src={Stich} width={120} alt="" />
      </div>
      <div className="favorite-text">
        <p>Игрушки</p>
        <p className="light-font">Газированный напиток “Coca-Cola” 0.5 л</p>
        <p>Кока Кола Кыргызстан</p>
      </div>
      <div className="favorite-icons">
        <img src={Cart} alt="cart" />
        <img src={Fav} alt="fav" />
      </div>
    </div>
  );
};

export default ProductCardInFav;
