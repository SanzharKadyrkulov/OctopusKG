import React from "react";
import ProductCardInFav from "../../components/ProductCardInFav/ProductCardInFav";
import "./assets/Favorites.css";
const arr = [1, 2, 3, 4];
const Favorites = () => {
  return (
    <div className="fav-page container">
      <p className="medium-font">Избранные</p>
      <div className="favorite-list">
        {arr.map((item) => (
          <ProductCardInFav id={item} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
