import React, { useContext } from "react";
import "./stylesheets/Shopcategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Items/Item";
const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);

  return (
    <div className="shopcategory">
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1 - 12 </span>
          out of all products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
