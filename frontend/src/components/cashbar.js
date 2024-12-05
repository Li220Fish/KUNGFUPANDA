import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './cashbar.css'; // 對應的樣式文件
import emptyCartImage from '../assets/illu_cart_empty.svg';
import white from '../assets/white.png'

const CashBar = ({ items, removeItem, onDeliveryClick, onPickupClick, updateItemQuantity }) => {
  // 計算總金額
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // 處理外送按鈕點擊
  const [activeButton, setActiveButton] = useState(null);

  // 處理按鈕點擊，根據傳入的按鈕類型設置 activeButton
  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  // 處理刪除項目
  const handleItemQuantityChange = (itemId, operation) => {
    if (operation === 'remove') {
      removeItem(itemId); // 移除項目
    } else {
      updateItemQuantity(itemId, operation); // 增加或減少數量
    }
  };

  const [isRotated, setIsRotated] = useState(false);

  const handleToggleClick = () => {
    setIsRotated((prev) => !prev);
  };


  return (
    <div className="cashbar-container">
      <div className="cashbar-expedition-container">
        {/* 外送按鈕 */}
        <button
          className={`cashbar-btn cashbar-btn-primary ${activeButton === 'delivery' ? 'active' : ''}`}
          onClick={() => handleButtonClick('delivery')}
        >
          <span className="cashbar-btn__label">外送</span>
        </button>

        {/* 外帶自取按鈕 */}
        <button
          className={`cashbar-btn cashbar-btn-secondary ${activeButton === 'pickup' ? 'active' : ''}`}
          onClick={() => handleButtonClick('pickup')}
        >
          <span className="cashbar-btn__label">外帶自取</span>
        </button>
      </div>

      <div className="cart-content">
        {/* 空購物車訊息或購物車總計 */}
        {items.length === 0 ? (
          <div className="empty-cart">
            <img src={emptyCartImage} alt="空購物車" />
            <h3 className="empty-title">購物車目前空空的</h3>
            <p className="empty-description">
              快將美食、生鮮雜貨加入購物車讓 foodpanda 幫你『送』～
            </p>
          </div>
        ) : (
          <div className="cart-items-list">

            {/* 顯示購物車中所有餐點 */}
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div class="cart-item-details">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-price">${item.price * item.quantity}</span>

                  <div className="cart-item-actions">
                    {/* 減少數量或移除 */}
                    <button
                      className="quantity-btn"
                      onClick={() => handleItemQuantityChange(item.id, item.quantity > 1 ? 'decrease' : 'remove')}
                    >
                      {item.quantity > 1 ? <svg aria-hidden="true" focusable="false" class="bds-c-quantity-stepper__button--minus" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="quantity-stepper-minus-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.25 11C18.6642 11 19 11.3358 19 11.75C19 12.1297 18.7178 12.4435 18.3518 12.4932L18.25 12.5H5.75C5.33579 12.5 5 12.1642 5 11.75C5 11.3703 5.28215 11.0565 5.64823 11.0068L5.75 11H18.25Z"></path></svg> :
                        <svg aria-hidden="false" focusable="false" class="bds-c-quantity-stepper__button--bin" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="quantity-stepper-trash-icon"><path d="M10.55 16.9C10.1358 16.9 9.8 16.5663 9.8 16.1547L9.8 9.84534C9.8 9.4337 10.1358 9.1 10.55 9.1C10.9642 9.1 11.3 9.4337 11.3 9.84534L11.3 16.1547C11.3 16.5663 10.9642 16.9 10.55 16.9Z"></path><path d="M13.45 16.9C13.0358 16.9 12.7 16.5663 12.7 16.1547L12.7 9.84534C12.7 9.4337 13.0358 9.1 13.45 9.1C13.8642 9.1 14.2 9.4337 14.2 9.84534L14.2 16.1547C14.2 16.5663 13.8642 16.9 13.45 16.9Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20 7.05C20 7.46421 19.6663 7.8 19.2547 7.8H18.7206C18.5225 7.8 18.3543 7.94499 18.325 8.1409L16.7584 18.6281C16.6406 19.4167 15.968 20 15.1762 20H8.82376C8.03205 20 7.35938 19.4167 7.24157 18.6281L5.675 8.1409C5.64573 7.94499 5.47748 7.8 5.27938 7.8H4.74534C4.3337 7.8 4 7.46421 4 7.05C4 6.63579 4.3337 6.3 4.74534 6.3H19.2547C19.6663 6.3 20 6.63579 20 7.05ZM16.354 7.8H7.64599C7.40874 7.80366 7.22618 8.01248 7.25533 8.2489L8.50069 18.3489C8.52541 18.5494 8.6957 18.7 8.89768 18.7H15.1023C15.3043 18.7 15.4745 18.5494 15.4993 18.3489L16.7446 8.2489C16.7738 8.01248 16.5912 7.80366 16.354 7.8Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 3.75C8 3.33579 8.31603 3 8.70588 3H15.2941C15.684 3 16 3.33579 16 3.75C16 4.16421 15.684 4.5 15.2941 4.5H8.70588C8.31603 4.5 8 4.16421 8 3.75Z"></path></svg>}
                    </button>
                    <div className="quantity-display">{item.quantity}</div>
                    {/* 增加數量 */}
                    <button
                      className="quantity-btn"
                      onClick={() => handleItemQuantityChange(item.id, 'increase')}
                    >
                      <svg aria-hidden="true" focusable="false" class="fl-none" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="quantity-stepper-plus-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 5C12.3797 5 12.6935 5.28215 12.7432 5.64823L12.75 5.75V10.85C12.75 11.0709 12.9291 11.25 13.15 11.25H18.25C18.6642 11.25 19 11.5858 19 12C19 12.3797 18.7178 12.6935 18.3518 12.7432L18.25 12.75H13.15C12.9291 12.75 12.75 12.9291 12.75 13.15V18.25C12.75 18.6642 12.4142 19 12 19C11.6203 19 11.3065 18.7178 11.2568 18.3518L11.25 18.25V13.15C11.25 12.9291 11.0709 12.75 10.85 12.75H5.75C5.33579 12.75 5 12.4142 5 12C5 11.6203 5.28215 11.3065 5.64823 11.2568L5.75 11.25H10.85C11.0709 11.25 11.25 11.0709 11.25 10.85V5.75C11.25 5.33579 11.5858 5 12 5Z"></path></svg>
                    </button>
                  </div>
                </div>
                <div className="outer-button-container">
                  <button className="outer-button"></button>
                </div>
              </div>

            ))}
            <div className="small-total">
              <p className="left-text">小計</p>
              <p className="right-text">${totalPrice}</p>
            </div>
            {totalPrice !== 0 && activeButton === 'delivery' ? (
              <div className="dede">
                <p className="dev">外送費</p>
                <p
                  className={`pri ${totalPrice > 149 ? "crossed-out" : ""}`}
                >
                  $60
                </p>
              </div>
            ) : (<></>
            )}
            <div className="divider"></div>
            <div className="tableware">
              <svg aria-hidden="true" focusable="false" class="fl-none" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" color="neutral-primary"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.13514 3C9.35174 3 11.161 4.74406 11.2655 6.93478L11.2703 7.13514V9.08108C11.2703 10.5608 10.493 11.8591 9.32448 12.5897L9.32432 18.8108C9.32432 20.0199 8.34419 21 7.13514 21C5.97646 21 5.02802 20.0998 4.951 18.9607L4.94595 18.8108L4.94675 12.5903C3.83922 11.8982 3.08295 10.6964 3.00641 9.31322L3 9.08108V7.13514C3 4.85136 4.85136 3 7.13514 3ZM14.1892 4.45946V8.44865C14.1892 8.66359 14.3634 8.83784 14.5784 8.83784H15.7459C15.9609 8.83784 16.1351 8.66359 16.1351 8.44865V4.45946C16.1351 4.05644 16.4618 3.72973 16.8649 3.72973C17.2679 3.72973 17.5946 4.05644 17.5946 4.45946V8.44865C17.5946 8.66359 17.7688 8.83784 17.9838 8.83784H19.1514C19.3663 8.83784 19.5405 8.66359 19.5405 8.44865V4.45946C19.5405 4.05644 19.8673 3.72973 20.2703 3.72973C20.6733 3.72973 21 4.05644 21 4.45946V9.08108C21 10.5608 20.2227 11.8591 19.0542 12.5897L19.0541 18.8108C19.0541 20.0199 18.0739 21 16.8649 21C15.7062 21 14.7578 20.0998 14.6807 18.9607L14.6757 18.8108L14.6765 12.5903C13.5605 11.8929 12.8011 10.6779 12.7345 9.28143L12.7297 9.08108V4.45946C12.7297 4.05644 13.0564 3.72973 13.4595 3.72973C13.8625 3.72973 14.1892 4.05644 14.1892 4.45946ZM7.44244 13.2001C7.32068 13.2109 7.21824 13.2162 7.13514 13.2162C7.05225 13.2162 6.95011 13.2109 6.8287 13.2002C6.61456 13.1813 6.4257 13.3397 6.40688 13.5538C6.40589 13.5652 6.40539 13.5765 6.40539 13.5879L6.40541 18.8108C6.40541 19.2138 6.73212 19.5405 7.13514 19.5405C7.50457 19.5405 7.80988 19.266 7.8582 18.9098L7.86486 18.8108L7.86578 13.5879C7.86581 13.3729 7.6916 13.1987 7.47665 13.1986C7.46523 13.1986 7.45382 13.1991 7.44244 13.2001ZM17.2054 13.2162H16.5243C16.3094 13.2162 16.1351 13.3905 16.1351 13.6054V18.8108C16.1351 19.1467 16.362 19.4295 16.6709 19.5145L16.7658 19.5339L16.8649 19.5405C17.2343 19.5405 17.5396 19.266 17.5879 18.9098L17.5946 18.8108V13.6054C17.5946 13.3905 17.4203 13.2162 17.2054 13.2162ZM7.13514 4.45946C5.71213 4.45946 4.54858 5.57031 4.46434 6.97214L4.45946 7.13514V9.08108C4.45946 10.5588 5.6574 11.7568 7.13514 11.7568C8.55814 11.7568 9.72169 10.6459 9.80593 9.24408L9.81081 9.08108V7.13514C9.81081 5.6574 8.61287 4.45946 7.13514 4.45946ZM14.7944 10.776C15.2851 11.3747 16.0304 11.7568 16.8649 11.7568C17.7256 11.7568 18.4914 11.3503 18.9809 10.7189C19.0691 10.6051 19.0483 10.4414 18.9346 10.3532C18.8889 10.3178 18.8327 10.2986 18.7749 10.2985L15.0206 10.2981C14.8591 10.2981 14.7281 10.429 14.7281 10.5906C14.7281 10.6582 14.7515 10.7237 14.7944 10.776Z"></path></svg>
              <div className="word">
                <p className="word1">請問你需要免洗餐具、吸管嗎?</p>
                <p className="word2">
                  {isRotated
                    ? "如有提供，你的餐點會附上餐具"
                    : "不提供餐具，謝謝你幫忙減少不必要的浪費"}
                </p>
              </div>
              <button className="image-button" onClick={handleToggleClick}>
                <img
                  src={white}
                  alt="icon"
                  className={`button-icon ${isRotated ? "rotate-right" : "rotate-left"}`}
                />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="cart-summary">
        {/* 訂單優惠訊息 */}
        {totalPrice !== 0 && activeButton === 'delivery' ? (
          totalPrice < 149 ? (
            <div className="order-offer">
              <svg
                aria-hidden="true"
                focusable="false"
                className="fl-interaction-primary"
                fill="#ff2b85"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.2419 2.94497C13.0129 1.68501 10.9872 1.68501 9.75809 2.94497L9.67803 3.02705C9.0886 3.63129 8.28022 3.97202 7.4361 3.97202H7.10397C5.37424 3.97202 3.97202 5.37424 3.97202 7.10396V7.4361C3.97202 8.28021 3.63129 9.08859 3.02705 9.67802L2.94497 9.75808C1.68501 10.9872 1.68501 13.0129 2.94497 14.2419L3.02705 14.322C3.63129 14.9114 3.97202 15.7198 3.97202 16.5639V16.8961C3.97202 18.6258 5.37424 20.028 7.10397 20.028H7.4361C8.28022 20.028 9.08859 20.3687 9.67802 20.973L9.75809 21.055C10.9872 22.315 13.0129 22.315 14.2419 21.055L14.322 20.973C14.9114 20.3687 15.7198 20.028 16.5639 20.028H16.8961C18.6258 20.028 20.028 18.6258 20.028 16.8961V16.5639C20.028 15.7198 20.3687 14.9114 20.973 14.322L21.0551 14.2419C22.315 13.0129 22.315 10.9872 21.0551 9.75808L20.973 9.67802C20.3687 9.08859 20.028 8.28021 20.028 7.43609V7.10396C20.028 5.37424 18.6258 3.97202 16.8961 3.97202H16.5639C15.7198 3.97202 14.9114 3.63129 14.322 3.02705L14.2419 2.94497ZM15.5356 8.46491C15.2102 8.13947 14.6826 8.13947 14.3571 8.46491L8.46457 14.3575C8.13913 14.6829 8.13913 15.2105 8.46457 15.536C8.79001 15.8614 9.31764 15.8614 9.64308 15.536L15.5356 9.64342C15.8611 9.31799 15.8611 8.79035 15.5356 8.46491ZM10.5 9C10.5 9.82843 9.82844 10.5 9.00001 10.5C8.17158 10.5 7.50001 9.82843 7.50001 9C7.50001 8.17158 8.17158 7.5 9.00001 7.5C9.82844 7.5 10.5 8.17158 10.5 9ZM15 16.5C15.8284 16.5 16.5 15.8284 16.5 15C16.5 14.1716 15.8284 13.5 15 13.5C14.1716 13.5 13.5 14.1716 13.5 15C13.5 15.8284 14.1716 16.5 15 16.5Z"
                ></path>
              </svg>
              <p>
                只差 ${149 - totalPrice} 即可享有免外送服務費！
              </p>
              {/* 進度條 */}
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{
                    width: `${(totalPrice / 149) * 100}%`,
                    backgroundColor: '#ff2b85',
                  }}
                ></div>
              </div>
            </div>
          ) : (
            <div className="order-offer">
              <svg
                aria-hidden="true"
                focusable="false"
                className="fl-success"
                width="24"
                height="24"
                fill="green"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-testid="basket-size-deal-progress-icon"
                style={{ width: '24px', height: '24px' }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM16.781 8.48967C16.489 8.19678 16.0156 8.19678 15.7237 8.48967L10.6447 13.5836L8.27634 11.2084L8.19248 11.1358C7.89979 10.9179 7.48442 10.9422 7.21899 11.2084C6.927 11.5013 6.927 11.9762 7.21899 12.2691L10.3616 15.4215C10.3619 15.4218 10.3622 15.4221 10.3625 15.4224C10.5189 15.5783 10.7722 15.5779 10.9281 15.4215L16.781 9.55033L16.8534 9.46621C17.0706 9.1726 17.0465 8.75594 16.781 8.48967Z"
                />
              </svg>
              <p>你獲得免費外送！</p>
              {/* 進度條 */}
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{
                    width: '100%',
                    backgroundColor: 'green',
                  }}
                ></div>
              </div>
            </div>
          )
        ) : (
          <></>
        )}

        {/* 購物車總計 */}
        <div className="total-section">
          <span className="total-label">總計：</span>
          {activeButton === 'delivery' ? (
            totalPrice > 149 ? (
              <span className="total-price">${totalPrice}</span>
            ) : (
              <span className="total-price">${totalPrice + 60}</span>
            )
          ) : (
            <span className="total-price">${totalPrice}</span>
          )}
        </div>



        {/* 查看付款方式按鈕 */}
        <Link to="/checkoutpage" style={{ textDecoration: 'none' }}>
          <button className="checkout-btn" disabled={totalPrice === 0}>
            查看付款方式及地址
          </button>
        </Link>
      </div>
    </div>
  );

};

export default CashBar;