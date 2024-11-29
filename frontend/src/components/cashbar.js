import React, { useState } from 'react';
import './cashbar.css'; // 對應的樣式文件
import emptyCartImage from '../assets/illu_cart_empty.svg';

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
                fill = "green"
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
              $ 149 以上訂單<strong> 免費外送</strong> ，趕緊點起來！
            </p>
          </div>
        )}

        {/* 購物車總計 */}
        <div className="total-section">
          <span className="total-label">總計：</span>
          <span className="total-price">${totalPrice}</span>
        </div>

        {/* 查看明細按鈕 */}
        <button className="check-credit">查看明細</button>

        {/* 查看付款方式按鈕 */}
        <button className="checkout-btn" disabled={totalPrice === 0}>
          查看付款方式及地址
        </button>
      </div>
    </div>
  );
};

export default CashBar;
