import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import "./RestaurantCard.css"; // 樣式文件
import immage from '../assets/7.JPG';
const RestaurantList = () => {
  // 初始化假資料
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: "餐廳 A",
      image: immage, // Placeholder 圖片
      rating: 4.5,
      deliveryTime: "20-30 分鐘",
      tags: ["$．健康餐"],
    },
    {
      id: 2,
      name: "餐廳 B",
      image: "https://via.placeholder.com/280x160",
      rating: 4.3,
      deliveryTime: "25-35 分鐘",
      tags: ["$．快餐"],
    },
    {
      id: 3,
      name: "餐廳 C",
      image: "https://via.placeholder.com/280x160",
      rating: 4.7,
      deliveryTime: "15-25 分鐘",
      tags: ["$．飲料"],
    },
    {
        id: 4,
        name: "餐廳 D",
        image: "https://via.placeholder.com/280x160",
        rating: 4.1,
        deliveryTime: "15-25 分鐘",
        tags: ["$$．快炒"],
      },
    {
        id: 5,
        name: "餐廳 E",
        image: "https://via.placeholder.com/280x160",
        rating: 4.1,
        deliveryTime: "5-20 分鐘",
        tags: ["$．消夜"],
      },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/restaurants");
        const data = await response.json();
        setRestaurants(data); // 替換為後端資料
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRestaurants()
  }, []);

  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          name={restaurant.name}
          image={restaurant.image}
          rating={restaurant.rating}
          deliveryTime={restaurant.deliveryTime}
          tags={restaurant.tags}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
