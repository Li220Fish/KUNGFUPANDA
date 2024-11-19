import React from 'react';
import './StoreJoinStyles.css';
import vendorImage from '../assets/trabajar-en-el-extranjero-en-manipulacion-de-alimentos.jpg'; // 导入图片

function StoreJoin({ message, imageDistance = 10, style }) {
  return (
    <div className="store-join" style={style}>
      <p>{message || "想加入 foodpanda 嗎？"}</p>
      <img
        src={vendorImage}
        alt="Vendor"
        style={{ marginTop: `${imageDistance}px` }}
      />
    </div>
  );
}

export default StoreJoin;
