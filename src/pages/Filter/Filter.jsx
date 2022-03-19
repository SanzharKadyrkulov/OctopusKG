import React, { useEffect } from "react";
import "./assets/Filter.css";
import GoBack from "../../pages/ProductDetails/icons/goback.svg";
import Umbrella from "../Home/icons/beach-access.svg";
import ProductCardS from "../../components/ProductCardS/ProductCardS";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/actions/productActions";
const Filter = () => {
  const { products } = useSelector((store) => store.product);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const { type } = useParams();
  return (
    <div className="container filter">
      <div className="filter-head">
        <img
          onClick={() => navigate("/")}
          className="filter-head-back"
          src={GoBack}
          alt="goback"
        />
        <img className="filter-head-umbrella" src={Umbrella} alt="umbrella" />
        <p className="medium-font filter-head-text">{type}</p>
      </div>
      <div className="filter-list">
        {products ? (
          products.map((item) =>
            type === item.type ? (
              <ProductCardS key={item.id} product={item} marginBottom={30} />
            ) : (
              <></>
            )
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Filter;
