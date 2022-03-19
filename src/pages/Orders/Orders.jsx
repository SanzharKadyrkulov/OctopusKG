import React from "react";
import OrderCard from "../../components/OrderCard/OrderCard";
import "./assets/Orders.css";
let arr = ["pending", "error", "success"];
const Orders = () => {
  return (
    <div className="container orders">
      <p className="medium-font orders-head">Ваши заказы</p>
      <div className="orders-list">
        {arr.map((item) => (
          <OrderCard status={item} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
