import React from "react"; 
import MenuCard from "./MenuCard";

const MenuList = ({ menuItems, addItemToCart }) => (
  <div className="menu-list">
    {menuItems.map((item, index) => (
      <MenuCard
        key={index}
        name={item.name}
        image={item.image}
        price={item.price}
        tagline={item.tagline}
        onAddToCart={addItemToCart} // 传递回调函数
      />
    ))}
  </div>
);

export default MenuList;
