import React, { useState, useEffect } from 'react';
import './FilterSidebar.css';

function FilterSidebar({ onFilterChange }) {
  // 狀態管理
  const [selectedSort, setSelectedSort] = useState('relevance');
  const [checkedFreeShipping, setCheckedFreeShipping] = useState(false);
  const [checkedDiscount, setCheckedDiscount] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [checkedCuisines, setCheckedCuisines] = useState({
    sandwich: false,
    chinese: false,
    riceBowl: false,
    bento: false,
    healthy: false,
    combo: false,
  });

  // 判斷篩選條件是否更改過
  const [isFilterChanged, setIsFilterChanged] = useState(false);

  // 當篩選條件改變時更新父組件
  useEffect(() => {
    const filterCriteria = {
      sort: selectedSort,
      freeShipping: checkedFreeShipping,
      discount: checkedDiscount,
      price: selectedPrice, // 包括價格篩選
      cuisines: Object.keys(checkedCuisines).filter((cuisine) => checkedCuisines[cuisine]),
    };
  
    // 傳遞更新後的篩選條件給父組件
    onFilterChange(filterCriteria);
    
    // 檢查是否有篩選條件改變
    const isChanged =
      selectedSort !== 'relevance' ||
      checkedFreeShipping ||
      checkedDiscount ||
      selectedPrice ||
      Object.values(checkedCuisines).includes(true);
  
    setIsFilterChanged(isChanged);
  }, [selectedSort, checkedFreeShipping, checkedDiscount, selectedPrice, checkedCuisines, onFilterChange]);

  // 清除所有篩選條件
  const handleClearAll = () => {
    setSelectedSort('relevance');
    setCheckedFreeShipping(false);
    setCheckedDiscount(false);
    setSelectedPrice(null);
    setCheckedCuisines({
      sandwich: false,
      chinese: false,
      riceBowl: false,
      bento: false,
      healthy: false,
      combo: false,
    });
  };

  // 價錢篩選按鈕的點擊處理
  const handlePriceClick = (price) => {
    setSelectedPrice(price);
  };

  // 菜式篩選按鈕的點擊處理
  const handleCuisineChange = (cuisine) => {
    setCheckedCuisines((prev) => ({
      ...prev,
      [cuisine]: !prev[cuisine],
    }));
  };

  return (
    <div className="filter-sidebar">
      {/* 顯示「清除所有」按鈕 */}
      {isFilterChanged && (
        <div className="clear-all">
          <button onClick={handleClearAll}>清除所有</button>
        </div>
      )}

      <h1>篩選</h1>

      {/* 排序依 */}
      <div className="filter-section">
        <h3>排序依</h3>
        <label>
          <input
            type="radio"
            name="sort"
            value="relevance"
            checked={selectedSort === 'relevance'}
            onChange={() => setSelectedSort('relevance')}
          />
          相關性
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="fastest"
            checked={selectedSort === 'fastest'}
            onChange={() => setSelectedSort('fastest')}
          />
          最快送達
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="distance"
            checked={selectedSort === 'distance'}
            onChange={() => setSelectedSort('distance')}
          />
          距離
        </label>
      </div>

      {/* 優惠 */}
      <div className="filter-section">
        <h3>優惠</h3>
        <label>
          <input
            type="checkbox"
            checked={checkedFreeShipping}
            onChange={() => setCheckedFreeShipping(!checkedFreeShipping)}
          />
          免外送服務費
        </label>
        <label>
          <input
            type="checkbox"
            checked={checkedDiscount}
            onChange={() => setCheckedDiscount(!checkedDiscount)}
          />
          折扣
        </label>
      </div>

      {/* 菜式 */}
      <div className="filter-section">
        <h3>菜式</h3>
        <input type="text" placeholder="搜尋菜式" className="search-cuisine" />
        <label>
          <input
            type="checkbox"
            checked={checkedCuisines.sandwich}
            onChange={() => handleCuisineChange('sandwich')}
          />
          漢堡
        </label>
        <label>
          <input
            type="checkbox"
            checked={checkedCuisines.chinese}
            onChange={() => handleCuisineChange('chinese')}
          />
          中式
        </label>
        <label>
          <input
            type="checkbox"
            checked={checkedCuisines.riceBowl}
            onChange={() => handleCuisineChange('riceBowl')}
          />
          麵食
        </label>
        <label>
          <input
            type="checkbox"
            checked={checkedCuisines.bento}
            onChange={() => handleCuisineChange('bento')}
          />
          東南亞
        </label>
        <label>
          <input
            type="checkbox"
            checked={checkedCuisines.healthy}
            onChange={() => handleCuisineChange('healthy')}
          />
          健康餐
        </label>
        <label>
          <input
            type="checkbox"
            checked={checkedCuisines.combo}
            onChange={() => handleCuisineChange('combo')}
          />
          日式
        </label>
      </div>

      {/* 價格篩選 */}
      <div className="filter-section price-filter">
        <h3>價格篩選</h3>
        <button
          className={selectedPrice === 'low' ? 'selected' : ''}
          onClick={() => handlePriceClick('low')}
        >
          $
        </button>
        <button
          className={selectedPrice === 'medium' ? 'selected' : ''}
          onClick={() => handlePriceClick('medium')}
        >
          $$
        </button>
        <button
          className={selectedPrice === 'high' ? 'selected' : ''}
          onClick={() => handlePriceClick('high')}
        >
          $$$
        </button>
      </div>
    </div>
  );
}

export default FilterSidebar;
