import React from 'react';
import './RestaurantBar.css';

const RestaurantBar = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'delivery', icon: '🛵', label: '外送' },
    { id: 'takeout', icon: '🚶', label: '外帶自取' },
    { id: 'grocery', icon: '🏪', label: '生鮮雜貨' },
  ];

  return (
    <div className="restaurant-bar">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          <span className="tab-icon">{tab.icon}</span>
          <span className="tab-label">{tab.label}</span>
        </div>
      ))}
    </div>
  );
};

export default RestaurantBar;
