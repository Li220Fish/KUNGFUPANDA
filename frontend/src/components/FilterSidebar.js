import React, { useState, useEffect } from 'react';
import './FilterSidebar.css';

function FilterSidebar() {
  // 管理篩選狀態
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

  // 追蹤篩選狀態變化
  const [isFilterChanged, setIsFilterChanged] = useState(false);

  // 當篩選條件改變時，更新 isFilterChanged 狀態
  useEffect(() => {
    const isChanged =
      selectedSort !== 'relevance' ||
      checkedFreeShipping ||
      checkedDiscount ||
      selectedPrice ||
      Object.values(checkedCuisines).includes(true);

    setIsFilterChanged(isChanged);
  }, [selectedSort, checkedFreeShipping, checkedDiscount, selectedPrice, checkedCuisines]);

  // 當點擊「清除所有」時，重置所有篩選選項
  const handleClearAll = () => {
    setSelectedSort('relevance'); // 重置排序
    setCheckedFreeShipping(false); // 重置免外送服務費
    setCheckedDiscount(false); // 重置折扣
    setSelectedPrice(null); // 重置價格篩選
    setCheckedCuisines({
      sandwich: false,
      chinese: false,
      riceBowl: false,
      bento: false,
      healthy: false,
      combo: false,
    }); // 重置菜式篩選
  };

  // 價格篩選按鈕的點擊處理
  const handlePriceClick = (price) => {
    setSelectedPrice(price);
  };

  // 菜式選擇框的點擊處理
  const handleCuisineChange = (cuisine) => {
    setCheckedCuisines((prev) => ({
      ...prev,
      [cuisine]: !prev[cuisine],
    }));
  };

  return (
    <div className="filter-sidebar">
      {/* 只有在篩選有變更時顯示清除所有按鈕 */}
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
          三明治 / 吐司
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
          丼飯 / 蓋飯
        </label>
        <label>
          <input
            type="checkbox"
            checked={checkedCuisines.bento}
            onChange={() => handleCuisineChange('bento')}
          />
          便當
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
          合式
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
