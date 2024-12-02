import React from "react";
import './Memberdetail.css';


const Memberdetail = () => {
  return (
    <div className="Memberdetail-page">
      <div class="name-box-container">
        <h1 className="my-account">我的帳戶</h1>
        <div className="info-icon">
          <svg
            aria-hidden="true"
            focusable="false"
            className="info-icon"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5ZM12 10.5C12.4142 10.5 12.75 10.8358 12.75 11.25V16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25V11.25C11.25 10.8358 11.5858 10.5 12 10.5ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
            />
          </svg>
        </div>
      
        <div className="name-box">
          <input type="text" id="first-name" placeholder=" " />
          <label htmlFor="first-name">名</label>
        </div>
        <div className="name-box">
          <input type="text" id="last-name" placeholder=" "  />
          <label htmlFor="last-name">姓</label>
        </div>
        <div className="name-box">
          <input type="tel" id="mobile-number" placeholder=" " />
          <label htmlFor="mobile-number">手機號碼</label>
        </div>
      
        <button type="submit" className="disabled">
          儲存
        </button>
    </div>  

    <hr />
    <div class="mail-box-container">
        <h1 className="my-mail">電子郵件</h1>
        <div className="mail-box">
          <input type="text" id="first-name" placeholder=" " />
          <label htmlFor="mail">電子郵件</label>
        </div>
        <button type="submit" className="mail-save">
          儲存
        </button>
        </div>
    <div class="password-box-container">
        <h1 className="my-password">密碼</h1>
        <div className="password-box">
          <input type="text" id="first-name" placeholder=" " />
          <label htmlFor="mail">現有密碼</label>
        </div>
        <div className="password-box">
          <input type="text" id="first-name" placeholder=" " />
          <label htmlFor="mail">新密碼</label>
        </div>
        <button type="submit" className="password-save">
          儲存
        </button>
        </div>
        <div class="payment-box-container">
          <h1 className="payment">付款方式</h1>

          <h1 className="payment-content">您尚未有已儲存的信用卡資料</h1>
        </div>
        <div class="connect-box-container">
          <h1 className="my-connect">已連結的帳號</h1>
          <div className="box" data-testid="social-account-box">
            <div class="box-flex fd-row">
              <div className="google">
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd" transform="scale(1.4)">
                    <path d="M22.1 12.227c0-.709-.064-1.39-.182-2.045H12.5v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4"></path>
                    <path d="M12.5 22c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H3.564v2.59A9.996 9.996 0 0012.5 22z" fill="#34A853"></path>
                    <path d="M6.905 13.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V7.51H3.564A9.996 9.996 0 002.5 12c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05"></path>
                    <path d="M12.5 5.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C17.459 2.99 15.195 2 12.5 2 8.59 2 5.21 4.24 3.564 7.51l3.34 2.59c.787-2.364 2.991-4.123 5.596-4.123z" fill="#EA4335"></path>
                  </g>
                </svg>
              </div>
              <div class="box-flex jc-center fd-column">
                <span class="google-content">Google</span>
                <button className="google-content">
                  <span class="bds-c-btn__idle-content">
                    <span class="bds-c-btn__idle-content__label"><span>連結</span></span>
                  </span>
                </button>
              </div>
            </div>
            
            
          </div>
          
        </div>
        <div class="delete-box-container">
               <h1 className="delete">帳號管理</h1>
              <h1 className="delete-content">你可以刪除你的帳戶及所有相關個人資料</h1>
              <button type="submit" className="delete-button">
          刪除帳號
        </button>
        </div>
  </div>
);
}

export default Memberdetail;