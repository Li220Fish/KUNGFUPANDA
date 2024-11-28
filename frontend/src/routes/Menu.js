import React from "react";
import { useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const restaurantName = queryParams.get("name"); // 獲取 name 參數

  return (
    <div>
      <h1>Menu of {restaurantName}</h1>
      {/* 你可以在這裡渲染菜單的內容 */}
    </div>
  );
};

export default Menu;
