import React from "react";
import "./MenuBar.css";

const MenuBar = ({ tabsData, activeTab, onTabChange }) => {
  return (
    <div className="menu-bar">
      <input type="text" placeholder="搜尋菜式" className="search-cuisine2" />
      {tabsData.map((tab) => (
        <div
          key={tab.id}
          className={`tab-item ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

export default MenuBar;
