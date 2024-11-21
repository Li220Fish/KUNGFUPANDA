import React from 'react';/*xin*/
import './StoreJoinStyles.css';
import vendorImage from '../assets/trabajar-en-el-extranjero-en-manipulacion-de-alimentos.jpg';

function StoreJoin({ message, imageDistance = 10, style }) {
  return (
    <div className="store-join" style={{ ...style, marginTop: '20px', position: 'relative' }}>
      <div className="text-box">
        <p>{message || "想加入 foodpanda 嗎？"}</p>
      </div>
      <div className="image-container" style={{ marginTop: `${imageDistance}px` }}>
        <div className="overlay">
          <div className="container">
            <h3>與foodpanda合作，讓更多人享受你的餐點跟商品吧！</h3>
            <h2>想讓上百萬新顧客試試你的美食或生鮮雜貨商品嗎？讓我們來幫忙吧！</h2>
            <h2>該怎麼做呢？我們會協助你上傳菜單或商品清單、幫你處理訂單、訂單確認後我們將請外送夥伴前往你的商店去取件，再將餐點或商品外送給顧客們。</h2>
            <h2>還等什麼？一起和我們開始這個外送的旅程吧！</h2>
            <button className="join-button">立即加入</button>
          </div>
        </div>
        <img
          src={vendorImage}
          alt="Vendor"
          style={{ width: '100%', height: '400px', objectFit: 'cover' }} // 確保圖片自適應並裁剪
        />
      </div>
    </div>
  );
}

export default StoreJoin;
