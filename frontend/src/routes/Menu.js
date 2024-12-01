import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import StoreHeader from "../components/StoreHeader";
import MenuBar from "../components/MenuBar";
import MenuList from "../components/MenuList";
import CashBar from "../components/cashbar";
import sevenImage from "../assets/7.JPG"; // 注意路徑
import './Meals.css'; // 確保樣式正確

function Menu() {

  const [storeData, setStore] = useState({
    location: "台北市",
    logoUrl: "https://images.deliveryhero.io/image/fd-tw/LH/x6hj-listing.jpg?width=200&height=200", // 替換為真實圖片 URL
    tag: "飲料",
    name: "COME BUY (台北市府店)",
    details: "免費外送服務費 $9 🛒 需消費滿 $99",
    rating: "4.8/5 (4000+)",
  });

  const [menuItems, setMenuItems] = useState([]); // 用來存放菜單資料
  const [cartItems, setCartItems] = useState([]); // 存儲購物車項目
  const [totalPrice, setTotalPrice] = useState(0); // 總金額
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("popular");

  const menuTabs = [
    { id: "popular", label: "人氣精選" },
    { id: "top10", label: "人氣精選 TOP 10" },
    { id: "tea", label: "原葉鮮茶" },
    { id: "milk-tea", label: "奶茶&拿鐵" },
    { id: "fruit-tea", label: "果然果茶" },
    { id: "seasonal", label: "季節限定" },
    { id: "merchandise", label: "周邊商品" },
  ];

  const handleTabChange = (id) => {
    setActiveTab(id);
    console.log(`Current tab: ${id}`);
  };

  // Fetch 店家和菜單資料
  useEffect(() => {
    const fetchStore = async () => {
      try {
        const restaurantName = "甘蔗の椰殼"; // 替換為你需要傳遞的餐廳名稱
        const response = await fetch(`http://127.0.0.1:5000/menu?name=${encodeURIComponent(restaurantName)}`, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Received data:", data);

        // 更新商店資料
        setStore(data.store);

        // 更新菜單資料
        setMenuItems(data.menu || []); // 假設後端返回的資料中包含 `menu` 屬性
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStore();
  }, []);

  

  // 加入購物車
  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((i) => i.id === item.id);
      if (itemIndex === -1) {
        return [...prevItems, { ...item, quantity: 1 }];
      }
      return prevItems.map((i, idx) => (idx === itemIndex ? { ...i, quantity: i.quantity + 1 } : i));
    });
  };

  const increaseItemQuantity = (itemId) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decreaseItemQuantity = (itemId) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // 更新購物車中的數量
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

  // 計算總金額
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [cartItems]);

  // 處理外送和外帶按鈕
  const handleDeliveryClick = () => console.log("外送被點擊");
  const handlePickupClick = () => console.log("外帶自取被點擊");

  return (
    <>
      <Navbar />
      <StoreHeader
        location={storeData.location}
        logoUrl={storeData.logoUrl}
        tag={storeData.tag}
        name={storeData.name}
        details={storeData.details}
        rating={storeData.rating}
      />
      <MenuBar
        tabsData={menuTabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      <MenuList
        menuItems={menuItems.map((item) => ({
          ...item,
          image: item.image || sevenImage,
        }))}
        addItemToCart={addItemToCart} // 传递 addItemToCart
      />
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
    </>
  );
};

export default Menu;
