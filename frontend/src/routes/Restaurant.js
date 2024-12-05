import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterSidebar from '../components/FilterSidebar';
import RestaurantList from '../components/RestaurantList';
import RestaurantBar from '../components/Restaurantbar';

function Service() {
  // 用於追蹤當前選中的標籤
  const [activeTab, setActiveTab] = useState('delivery');

  // 用於追蹤篩選條件
  const [filterCriteria, setFilterCriteria] = useState({});

  // 處理標籤切換
  const handleTabChange = (tabId) => {
    console.log(`Selected tab: ${tabId}`);
    setActiveTab(tabId); // 更新選中的標籤狀態
  };

  // 將篩選條件轉換為查詢參數
  const buildQueryString = (criteria) => {
    const queryParams = new URLSearchParams();
    for (const key in criteria) {
      if (Array.isArray(criteria[key])) {
        // 如果是陣列，處理為多個值
        criteria[key].forEach((value) => queryParams.append(key, value));
      } else if (criteria[key] !== null && criteria[key] !== undefined) {
        // 僅處理非空值
        queryParams.append(key, criteria[key]);
      }
    }
    return queryParams.toString();
  };

  // 處理篩選條件更新
  const handleFilterChange = async (newCriteria) => {
    console.log('Updated filter criteria:', newCriteria);
    if (JSON.stringify(filterCriteria) === JSON.stringify(newCriteria)) {
      return; // 筛选条件未变化，跳过更新
    }
    setFilterCriteria(newCriteria); // 更新篩選條件以觸發 RestaurantList 更新
  
    const queryString = buildQueryString(newCriteria);
    const apiUrl = `http://127.0.0.1:5000/filters?${queryString}`;
  
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data from backend');
      }
  
      const data = await response.json();
      console.log('Response from backend:', data);
      // 在這裡可以根據需求更新其他狀態
    } catch (error) {
      console.error('Error while fetching data:', error);
    }
  };
  

  return (
    <>
      <Navbar />
      {/* 傳遞 activeTab 和 onTabChange */}
      <RestaurantBar activeTab={activeTab} onTabChange={handleTabChange} />
      {/* 傳遞 handleFilterChange 回調給 FilterSidebar */}
      <FilterSidebar onFilterChange={handleFilterChange} />
      <RestaurantList filterCriteria={filterCriteria} />
    </>
  );
}

export default Service;
