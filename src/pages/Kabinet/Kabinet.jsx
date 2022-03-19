import React, { useEffect, useRef } from "react";
import "./assets/Kabinet.css";
import Clock from "./icons/clock.svg";
import ProductCardS from "../../components/ProductCardS/ProductCardS";
import ProductCardR from "../../components/ProductCardR/ProductCardR";
import Left from "../Home/icons/Icon-left.svg";
import Right from "../Home/icons/Icon-right.svg";
import LeftWhite from "./icons/left-white.svg";
import Deliv from "./icons/deliv.png";
import SemiCircle from "./icons/semicircle.png";
import Gift from "./icons/gift.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/actions/productActions";
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Kabinet = () => {
  const { products } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const ref = useRef(null);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const scroll = (s) => {
    ref.current.scrollLeft += s;
  };
  return (
    <div className="kabinet container">
      <div className="kabinet-head">
        <img src={Clock} alt="clock" />
        <p className="kabinet-head-text medium-font">История просмотра</p>
      </div>
      <div className="kabinet-list-s">
        <div className="kabinet-list-s-btns">
          <div className="kabinet-list-s-btns-item">
            <img width={16.67} src={Left} alt="arrow left" />
          </div>
          <div className="kabinet-list-s-btns-item">
            <img width={16.67} src={Right} alt="arrow right" />
          </div>
        </div>
        {products ? (
          products
            .slice(0, 6)
            .map((item) => <ProductCardS key={item.id} product={item} />)
        ) : (
          <></>
        )}
      </div>
      <div className="kabinet-list-r">
        <div onClick={() => scroll(-100)} className="kabinet-list-r-btn-left">
          <img src={Left} alt="arrow left" />
        </div>
        <div ref={ref} className="kabinet-list-r-inner">
          {arr1.map((item) => (
            <ProductCardR id={item} marginRight={12} />
          ))}
        </div>
        <div onClick={() => scroll(100)} className="kabinet-list-r-btn-right">
          <img src={Right} alt="arrow right" />
        </div>
      </div>
      <div className="kabinet-down">
        <div className="kabinet-down-left">
          <div className="kabinet-down-left-adress">
            <div className="kabinet-down-left-adress-info">
              <div className="kabinet-down-left-adress-info-text">
                <p className="kabinet-down-left-adress-info-text-head medium-font">
                  Укажите адрес доставки
                </p>
                <p className="kabinet-down-left-adress-info-text-body">
                  При заказе в Octopus, указанный вами адрес будет автоматически
                  заполнен
                </p>
              </div>
              <img src={Deliv} alt="deliv" />
            </div>
            <input
              type="text"
              placeholder="Введите область, село или город, номер дома"
            />
            <button>Применить</button>
          </div>
          <div className="kabinet-down-left-promo">
            <p className="kabinet-down-left-promo-head">
              Активируйте промокоды
            </p>
            <input type="text" placeholder="Промокод" />
            <button>Скоро</button>
          </div>
        </div>
        <div className="kabinet-down-right">
          <div className="kabinet-down-right-text">
            <p className="kabinet-down-right-text-head medium-font">
              В Octopus, вы можете сделать подарок близкому человеку
            </p>
          </div>
          <img src={SemiCircle} alt="semi circle" />
          <img src={Gift} alt="gift" />
          <button>Скоро</button>
        </div>
      </div>
    </div>
  );
};

export default Kabinet;
