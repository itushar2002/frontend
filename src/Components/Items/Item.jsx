import React from "react";
import "./item.css";
import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <h5>{props.name}</h5>
      <div className="item-prices">
        <div className="new-price">${props.new_price}</div>
        <div className="old-price">${props.old_price}</div>
      </div>
    </div>
  );
};
export default Item;
