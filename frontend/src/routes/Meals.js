import React, { useState, useEffect } from 'react';
import CashBar from '../components/cashbar';
import './Meals.css'; // 確保樣式正確
import sevenImage from '../assets/7.JPG'; // 注意這裡的相對路徑
const Meals = () => {
  const [isSticky, setIsSticky] = useState(false); // 控制 Tabs 固定
  const [cartItems, setCartItems] = useState([]); // 存儲購物車項目
  const [totalPrice, setTotalPrice] = useState(0); // 總金額

  useEffect(() => {
    const handleScroll = () => {
      const tabsOffset = document.querySelector('.tabs-container')?.offsetTop || 0;
      if (window.scrollY >= tabsOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 1, name: '漢堡', price: 120, image: sevenImage, quantity: 0 },
    { id: 2, name: '薯條', price: 50, image: sevenImage, quantity: 0 },
    { id: 3, name: '飲料', price: 30, image: sevenImage, quantity: 0 },
    { id: 4, name: '沙拉', price: 80, image: sevenImage, quantity: 0 },
  ];

  // 加入購物車
  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((i) => i.id === item.id);
      if (itemIndex === -1) {
        return [...prevItems, { ...item, quantity: 1 }];
      }
      return prevItems;
    });
  };

  // 增加數量
  const increaseItemQuantity = (itemId) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  // 減少數量
  const decreaseItemQuantity = (itemId) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  // 移除餐點
  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // 計算總金額
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [cartItems]);

  const updateItemQuantity = (itemId, operation) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === itemId) {
          if (operation === 'increase') {
            return { ...item, quantity: item.quantity + 1 };
          } else if (operation === 'decrease' && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else if (operation === 'remove') {
            return null;
          }
        }
        return item;
      }).filter(item => item !== null); // 移除已被刪除的項目
    });
  };

  const handleDeliveryClick = () => console.log('外送被點擊');
  const handlePickupClick = () => console.log('外帶自取被點擊');

  return (
    <div className="meals-page">
      <header className="meals-header">
        <h1>餐廳名稱</h1>
        <p>描述內容</p>
      </header>

      {/* Tabs 排版 */}
      <div className={`tabs-container ${isSticky ? 'sticky' : ''}`}>
        <ul className="tabs">
          <li>人氣精選 (6)</li>
          <li>飲料 (10)</li>
          <li>荷醬歐脆堡 (4)</li>
          {/* 添加其他 Tabs */}
        </ul>
      </div>

      {/* 主內容 */}
      <div className="meals-content">
        <div className="menu-items">
          <h2>菜單</h2>
          <div className="items-list">
            {menuItems.map((item) => (
              <div key={item.id} className="menu-item">
                <img src={item.image} alt={item.name} className="menu-item-image" />
                <span>{item.name}</span>
                <span>價格: ${item.price}</span>
                <button onClick={() => addItemToCart(item)}>加入購物車</button>
              </div>
            ))}
          </div>
        </div>

        {/* CashBar */}
        <div className="cashbar-container">
          <CashBar
            items={cartItems}
            totalPrice={totalPrice}
            onDeliveryClick={handleDeliveryClick}
            onPickupClick={handlePickupClick}
            removeItem={removeItem}
            increaseQuantity={increaseItemQuantity}
            decreaseQuantity={decreaseItemQuantity}
            updateItemQuantity={updateItemQuantity}
          />
        </div>
      </div>
    </div>
  );
};

export default Meals;
