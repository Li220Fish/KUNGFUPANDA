import React from "react";
import "./Logout.css";

const Logout = ({ isOpen, onClose, onLogout }) => {
  

  return (
    <div className="logout-overlay">
      <div className="logout-modal">
      <div className="close-button">
          <button
            className="bds-c-btn-circular"
            aria-label="Close"
            onClick={onClose}
          >
            
            <svg
              aria-hidden="true"
              focusable="false"
              className="fl-none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.594 6.21967C18.8625 6.48816 18.8849 6.90955 18.6612 7.20353L18.594 7.28033L13.7504 12.124C13.5941 12.2802 13.5941 12.5335 13.7504 12.6897L18.594 17.5334C18.8869 17.8263 18.8869 18.3011 18.594 18.594C18.3256 18.8625 17.9042 18.8849 17.6102 18.6612L17.5334 18.594L12.6897 13.7504C12.5335 13.5941 12.2802 13.5941 12.124 13.7504L7.28033 18.594C6.98744 18.8869 6.51256 18.8869 6.21967 18.594C5.95118 18.3256 5.92881 17.9042 6.15255 17.6102L6.21967 17.5334L11.0634 12.6897C11.2196 12.5335 11.2196 12.2802 11.0634 12.124L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967C6.48816 5.95118 6.90955 5.92881 7.20353 6.15255L7.28033 6.21967L12.124 11.0634C12.2802 11.2196 12.5335 11.2196 12.6897 11.0634L17.5334 6.21967C17.8263 5.92678 18.3011 5.92678 18.594 6.21967Z"
              ></path>
            </svg>
          </button>
        </div>
        <h1 className="logout-title">確定要登出嗎？</h1>
        <div className="logout-body">
          <p>感謝你的使用。期待下次能再見到你！</p>
        </div>
        <footer className="logout-footer">
          <button
            className="logout-cancel-button"
            onClick={onClose}
          >
            取消
          </button>
          <button
            className="logout-confirm-button"
            onClick={onLogout}
          >
            登出
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Logout;
