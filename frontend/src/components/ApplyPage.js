import React from 'react';
import './ApplyPageStyles.css';
import foodpandaLogo from '../assets/foodpanda_logo.jfif';

const ApplyPage = () => {
  const handleButtonClick = () => {
    // 在這裡添加按鈕點擊的功能
    console.log('Button clicked!');
  };

  return (
    <div className="apply-page">
      <img src={foodpandaLogo} alt="Food Panda Logo" className="logo" />
      <button className="apply-button" onClick={handleButtonClick}>
        ZH
      </button>
    </div>
  );
};

export default ApplyPage;
