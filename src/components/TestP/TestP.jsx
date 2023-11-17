import React from "react";

import lox from "../assets/all_product";
import Item from "../Item/Item";

export default function TestP() {
  return (
    <div>
      <h1>hello</h1>

      {lox.map((item) => {
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
      })}
    </div>
  );
}
