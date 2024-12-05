import React, { useState } from "react";
import "./HeroStyles.css";

function Hero(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState(null); // 儲存經緯度
  const [address, setAddress] = useState(""); // 儲存轉換後的地址

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Search query:", searchQuery);
  };

  const handleLocationClick = () => {
    if (!navigator.geolocation) {
      alert("你的瀏覽器不支援地理定位功能");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

        // TomTom API 呼叫
        const apiKey = "Eod30Q91eghDUCGNFrUUGJ2ShgljQRgw"; // 替換為 TomTom API 金鑰
        const url = `https://api.tomtom.com/search/2/reverseGeocode/${latitude},${longitude}.json?key=${apiKey}`;

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            if (data.addresses && data.addresses.length > 0) {
              const formattedAddress = data.addresses[0].address.freeformAddress;
              setAddress(formattedAddress); // 更新地址
              setSearchQuery(formattedAddress); // 同步地址到輸入框
              console.log("Address:", formattedAddress);
            } else {
              console.error("無法獲取地址", data);
              alert("無法獲取地址，請稍後再試");
            }
          })
          .catch((error) => {
            console.error("TomTom API 錯誤:", error);
            alert("地理位置解析失敗，請檢查網路連接");
          });
      },
      (error) => {
        console.error("定位失敗:", error.message);
        alert("無法獲取定位，請檢查瀏覽器權限");
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
          <form onSubmit={handleSearchSubmit} className="search-form">
          <div className="search-wrapper">
            <input
              type="text"
              className="search-input"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder=" " /* 設置空的 placeholder */
            />
            <label className="floating-label">輸入你欲送達的地址</label>
            <button
              type="button"
              className="location-button"
              onClick={handleLocationClick}
            >
              🎯尋找我的位置
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
