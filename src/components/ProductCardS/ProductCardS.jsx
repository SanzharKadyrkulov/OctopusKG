import React from "react";
import "./assets/ProductCardS.css";
import Cart from "./icons/shopping-cart-add.svg";
import Fav from "./icons/favorite.svg";
import { useNavigate } from "react-router-dom";
const ProductCardS = ({ product, marginBottom }) => {
  const navigate = useNavigate();
  return (
    <div
      style={marginBottom ? { marginBottom } : {}}
      className="product"
      onClick={() => navigate("/" + product.id)}
    >
      <div className="product-image-container">
        <img
          className="stich-img"
          width={185}
          src={product.image}
          alt="stich"
        />
        <img className="fav secret" src={Fav} alt="fav" />
        <img className="carts secret" src={Cart} alt="cart" />
      </div>
      <div className="product-text">
        <p className="price medium-font">{product.price} c</p>
        <p className="name">{product.type}</p>
        <p className="desc light-font">{product.productName}</p>
      </div>
    </div>
  );
};

export default ProductCardS;
