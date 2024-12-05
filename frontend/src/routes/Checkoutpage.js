import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import './checkoutpage.css'; // 引入專用的 CSS 樣式
import money from '../assets/money.png';
import creditcard from '../assets/creditcard.png';
import creditcard2 from '../assets/creditcard2.png';
import creditcard3 from '../assets/creditcard3.png';
import creditcard4 from '../assets/creditcard4.png';
import creditcard5 from '../assets/creditcard5.png';
import creditcard6 from '../assets/creditcard6.png';
import hallo from '../assets/hallo.jpg';

const CheckoutPage = () => {
    const [isEditMode, setIsEditMode] = useState(false); // 控制是否進入編輯模式

    const handleEditClick = () => {
        setIsEditMode(true); // 切換到編輯模式
    };

    const handleCloseEdit = () => {
        setIsEditMode(false); // 返回查看模式
    };

    return (
        <>
            <Navbar />
            <div className="checkout-page">
                <div className="mainbox">
                    {/* 第一塊：送餐地址 */}
                    <div className="card">
                        <div className="header-fix">
                            <h3>送餐地址</h3>
                            <button className="edit-button" onClick={handleEditClick}>更改</button>
                        </div>
                        {!isEditMode ? (
                            <div className="address-info">
                                <div className="adressfix">
                                <svg aria-hidden="true" focusable="false" class="fl-interaction-secondary" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.3224 2C16.9186 2 20.6446 5.72596 20.6446 10.3222C20.6446 11.8203 20.2487 13.226 19.5559 14.4404L18.4715 15.8911C17.8726 16.5162 16.6838 17.706 14.9052 19.4602L13.0213 21.313C12.6322 21.6947 12.0092 21.6946 11.6203 21.3128L7.91833 17.6571L6.59648 16.3282C6.2846 16.0104 5.78156 15.3801 5.08734 14.4375C4.3955 13.2238 4.00024 11.8192 4.00024 10.3222C4.00024 5.72596 7.72621 2 12.3224 2ZM12.3224 3.5C8.55463 3.5 5.50024 6.55439 5.50024 10.3222C5.50024 11.4141 5.75604 12.466 6.23886 13.4136L6.37241 13.66L6.96356 14.5436L7.18196 14.7804L7.77128 15.385C8.23371 15.8535 8.88147 16.5011 9.70239 17.3151C10.6866 18.2861 11.4247 19.0143 11.9168 19.4998C11.9577 19.5401 11.9986 19.5805 12.0395 19.6209C12.1953 19.7745 12.4456 19.7745 12.6013 19.6209L12.6754 19.5478L15.3017 16.9571L17.2047 15.0461C17.3404 14.9068 17.4503 14.7925 17.5337 14.7039L17.6874 14.534L18.2724 13.659L18.4049 13.4158C18.84 12.5624 19.0911 11.6245 19.1369 10.6487L19.1446 10.3222C19.1446 6.55439 16.0902 3.5 12.3224 3.5ZM12.3224 6.75C14.3935 6.75 16.0724 8.42893 16.0724 10.5C16.0724 12.5711 14.3935 14.25 12.3224 14.25C10.2513 14.25 8.57241 12.5711 8.57241 10.5C8.57241 8.42893 10.2513 6.75 12.3224 6.75ZM12.3224 8.25C11.0798 8.25 10.0724 9.25736 10.0724 10.5C10.0724 11.7426 11.0798 12.75 12.3224 12.75C13.5651 12.75 14.5724 11.7426 14.5724 10.5C14.5724 9.25736 13.5651 8.25 12.3224 8.25Z"></path></svg>
                                    <p>508 Changhua County</p>
                                </div>
                                <p>彰美路三段 181</p>
                                <div className="textarea-container">
                                    <textarea
                                        id="delivery-note"
                                        rows="2"
                                        onFocus={(e) => e.target.classList.add('focused')}
                                        onBlur={(e) => {
                                            if (!e.target.value) e.target.classList.remove('focused');
                                        }}
                                    ></textarea>
                                    <label htmlFor="delivery-note" className="textarea-label">
                                        外送備註：請放置社區管理室窗台
                                    </label>
                                </div>
                                <div className="divider"></div>
                                <div className="box">
                                    <p>送達時優先電話聯繫：如未回覆外送將伴隨敲門</p>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="address-list">
                                    <h4>已儲存的地址</h4>
                                    <div className="address-item">
                                        <input type="radio" id="address-1" name="address" />
                                        <label htmlFor="address-1">
                                            <p>508 Changhua County</p>
                                            <p>彰美路三段 181</p>
                                            <p>外送備註：無</p>
                                        </label>
                                        <button className="edit-icon">✏️</button>
                                        <button className="delete-icon">🗑️</button>
                                    </div>
                                    <div className="address-item">
                                        <input type="radio" id="address-2" name="address" />
                                        <label htmlFor="address-2">
                                            <p>333 桃園市</p>
                                            <p>文化一路 259</p>
                                            <p>外送備註：無</p>
                                        </label>
                                        <button className="edit-icon">✏️</button>
                                        <button className="delete-icon">🗑️</button>
                                    </div>
                                    <button className="add-address">新增</button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* 第二塊：外送選項 */}
                    <div className="card">
                        <h3>外送選項</h3>
                        <div className="delivery-options">
                            <button className="standard">
                                <label>
                                    <input type="radio" name="delivery" checked />
                                    標準 約 10 - 25 mins
                                </label>
                            </button>
                            <button className="standard">
                                <label>
                                    <input type="radio" name="delivery" />
                                    預約訂單 選擇日期及時間
                                </label>
                            </button>
                        </div>
                    </div>

                    {/* 第三塊：個人資料 */}
                    <div className="card">
                        <div className="header-fix">
                            <h3>個人資料</h3>
                            <button className="edit-button">編輯</button>
                        </div>
                        <div className="address-info">
                            <p>羽雁 嵐</p>
                            <p>eugene921225@gmail.com</p>
                            <p>+886 972612172</p>
                        </div>
                    </div>

                    {/* 第四塊：付款資料 */}
                    <div className="card">
                        <h3>付款選項</h3>
                        <div className="delivery-options">
                            <button className="standard">
                                <label>
                                    <input type="radio" name="payment" checked />
                                    <img src={money} alt="icon" className="money" />
                                    現金付款
                                </label>
                            </button>
                            <button className="standard">
                                <label>
                                    <input type="radio" name="payment" />
                                    <img src={creditcard} alt="icon" className="creditcard" />
                                    信用卡
                                    <img src={creditcard2} alt="icon" className="creditcard" />
                                    <img src={creditcard3} alt="icon" className="creditcard" />
                                    <img src={creditcard4} alt="icon" className="creditcard" />
                                    <img src={creditcard5} alt="icon" className="creditcard" />
                                    <img src={creditcard6} alt="icon" className="creditcard" />
                                </label>
                            </button>
                        </div>
                        <img src={hallo} alt="promotion" className="hallo" />
                    </div>

                    <button className="checkout-btn">完成並付款</button>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;