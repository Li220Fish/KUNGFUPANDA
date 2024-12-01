import React from "react";
import "./StoreHeader.css";

const StoreHeader = ({ location, logoUrl,tag, name, details, rating }) => {
  return (
    <div className="store-header">
      {/* 新增位置層級 */}
      <div className="breadcrumb">
        {location} <span className="breadcrumb-separator"> {' > '} </span>
        餐廳 <span className="breadcrumb-separator"> {' > '} </span>
        {name}
      </div>

      <div className="store-content">
        
        <img src={logoUrl} alt="Store Logo" className="store-logo" />

        <div className="store-info">
          <p className="store-rating">{tag}</p>
          <h1 className="store-name">{name}</h1>
          <p className="store-details">🛵{details}</p>
          <p className="store-rating">⭐{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default StoreHeader;
