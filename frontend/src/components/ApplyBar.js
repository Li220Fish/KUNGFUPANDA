/*1119 made by xin*/
3567
import React from 'react';
import './ApplyBarStyles.css';
import riderIcon from '../assets/ic-rider-icon.svg'; // 导入图标

function ApplyBar() {
  const closeTopBar = () => {
    const topBar = document.getElementById('top-bar');
    if (topBar) {
      topBar.style.display = 'none';
      document.body.style.paddingTop = '0'; // 恢复页面正常布局
    }
  };

  return (
    <div id="top-bar" className="top-bar">
      <div className="top-bar-content">
        <img src={riderIcon} alt="Rider Icon" />
        <span>歡迎加入我們的外送團隊</span>
        <button className="action-btn">馬上應徵</button>
      </div>
      <button className="close-btn" onClick={closeTopBar}>
        <svg
          aria-hidden="true"
          focusable="false"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 10.8284L16.4645 6.36396L17.8787 7.77818L13.4142 12.2426L17.8787 16.7071L16.4645 18.1213L12 13.6569L7.53553 18.1213L6.12132 16.7071L10.5858 12.2426L6.12132 7.77818L7.53553 6.36396L12 10.8284Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}

export default ApplyBar;
