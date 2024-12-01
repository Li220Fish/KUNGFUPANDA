import React, { useState } from 'react';
import "./HeroStyles.css";

function Hero(props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState(null); // 用於儲存定位的經緯度

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search query:', searchQuery);
    // 這裡可以處理搜索邏輯，例如進行 API 請求等
  };

  const handleLocationClick = () => {
    if (!navigator.geolocation) {
      alert('你的瀏覽器不支援地理定位功能');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setSearchQuery(`${latitude}, ${longitude}`); // 將定位結果填入搜尋欄
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      },
      (error) => {
        console.error('定位失敗:', error.message);
        alert('無法獲取定位，請檢查瀏覽器權限');
      }
    );
  };

  return (
    <div className={props.cName}>
      <img alt="HeroImg" src={props.heroImg} />

      <div className="hero-text">
        <h1>{props.title}</h1>
        <h1>{props.title2}</h1>
        <p>{props.text}</p>

        <div className="search-container">
          {/* 搜索欄 */}
          <form onSubmit={handleSearchSubmit} className="search-form">
            <div className="search-wrapper">
              <input
                type="text"
                className="search-input"
                placeholder="輸入你欲送達的地址"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button
                type="button"
                className="location-button"
                onClick={handleLocationClick}
              >
                尋找我的位置
              </button>
            </div>
            <button type="submit" className="search-button">尋找美食</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
