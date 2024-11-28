import React from "react";
import { useNavigate } from "react-router-dom";
import "./RestaurantCard.css";

const RestaurantCard = ({ name, image, rating, deliveryTime, tags }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/menu?name=${encodeURIComponent(name)}`); // 將 name 作為 URL 的 query 參數傳遞
  };

  return (
    <div className="restaurant-card" onClick={handleCardClick}>
      <img src={image} alt={name} className="restaurant-image" />
      <div className="restaurant-info">
        <div className="info-header">
          <h3 className="restaurant-name">{name}</h3>
          <span className="restaurant-rating">⭐ {rating}</span>
        </div>
        <div className="restaurant-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="restaurant-delivery-time">🕗 {deliveryTime} ．🛵</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
