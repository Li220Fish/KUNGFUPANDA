 //WSG 處理
import React from "react";
import "./SignUp.css";

const SignUp = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // 如果 isOpen 為 false，就不渲染彈窗

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <div class="close-button">
      <button
        class="bds-c-btn-circular"
        aria-label="Close"
        onClick={onClose}/*1202xin新增*/
      >
        <svg
          aria-hidden="true"
          focusable="false"
          class="fl-none"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.594 6.21967C18.8625 6.48816 18.8849 6.90955 18.6612 7.20353L18.594 7.28033L13.7504 12.124C13.5941 12.2802 13.5941 12.5335 13.7504 12.6897L18.594 17.5334C18.8869 17.8263 18.8869 18.3011 18.594 18.594C18.3256 18.8625 17.9042 18.8849 17.6102 18.6612L17.5334 18.594L12.6897 13.7504C12.5335 13.5941 12.2802 13.5941 12.124 13.7504L7.28033 18.594C6.98744 18.8869 6.51256 18.8869 6.21967 18.594C5.95118 18.3256 5.92881 17.9042 6.15255 17.6102L6.21967 17.5334L11.0634 12.6897C11.2196 12.5335 11.2196 12.2802 11.0634 12.124L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967C6.48816 5.95118 6.90955 5.92881 7.20353 6.15255L7.28033 6.21967L12.124 11.0634C12.2802 11.2196 12.5335 11.2196 12.6897 11.0634L17.5334 6.21967C17.8263 5.92678 18.3011 5.92678 18.594 6.21967Z"
          ></path>
        </svg>
      </button>
    </div>
        <h3 className="welcome-title">歡迎 !</h3>
        <h3 className="register-title">註冊或登入</h3>
        <button className="google-button">
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="google-icon"
            >
                <g>
                    <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    ></path>
                    <path
                        fill="#4285F4"
                        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    ></path>
                    <path
                        fill="#FBBC05"
                        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    ></path>
                    <path
                        fill="#34A853"
                        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    ></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                </g>    
            </svg>
            <span>透過Google帳戶繼續操作</span>
        </button>
        
        <h3 className="or-title">或</h3>
        
        <button className="login-button">
            <span>登入</span>
        </button>
        <br></br>
        <button className="signup-button">
            <span>註冊</span>
        </button>

        <h3 className="policy-title">註冊即表示你同意並接受我們的 條款細則 及 隱私權政策 。</h3>
      </div>
    </div>
  );
};

export default SignUp;
