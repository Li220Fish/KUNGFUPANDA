import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import "./RestaurantCard.css";

const RestaurantList = ({ filterCriteria }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  // 将筛选条件转为查询字符串
  const buildQueryString = (criteria) => {
    const queryParams = new URLSearchParams();
    for (const key in criteria) {
      if (Array.isArray(criteria[key])) {
        criteria[key].forEach((value) => queryParams.append(key, value));
      } else if (criteria[key] !== null && criteria[key] !== undefined) {
        queryParams.append(key, criteria[key]);
      }
    }
    return queryParams.toString();
  };

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true); // 设置加载状态
        const queryString = buildQueryString(filterCriteria); // 构建查询参数
        const response = await fetch(
          `http://127.0.0.1:5000/api/restaurants?${queryString}`,
          {
            method: "GET", // 改为 GET 请求
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch restaurants");
        }

        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, [filterCriteria]); // 依赖 filterCriteria，变化时触发

  return (
    <div className="restaurant-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            image={restaurant.image}
            deliveryTime={restaurant.deliveryTime}
            tags={restaurant.tags}
          />
        ))
      )}
    </div>
  );
};

export default RestaurantList;
