import React from "react";
import "./MenuCard.css";

const MenuCard = ({id, name, image, price, tagline, onAddToCart }) => {
  return (
    <div className="menu-card">
      {/* 資訊區域 */}
      <div className="menu-info">
        <h3 className="menu-name">{name}</h3>
        <p className="menu-price">從 ${price}</p>
        <p className="menu-tagline">{tagline}</p>
      </div>

      {/* 圖片區域 */}
      <div className="menu-image-container">
        {image ? (
          <img src={image} alt={name} className="menu-image" />
        ) : (
          <span>🍴</span> /* Default icon or placeholder */
        )}
        {/* 加號按鈕 */}
        <div
          className="plus-icon"
          onClick={() => onAddToCart({ id,name, image, price, tagline })}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

