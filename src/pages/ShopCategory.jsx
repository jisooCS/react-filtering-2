import React, { useContext } from "react";
import "./shopcategory.css";
import { ShopContext } from "../context/ShopContext";
import drop_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/Item/Item";

export default function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1 -12</span> ouf of 36
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={drop_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, index) => {
          if (props.category === item.category) {
            return (
              <Item 
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null
          }
        })}
      </div>
      <div className="shopcategory-more">
        More
      </div>
    </div>
  );
}
