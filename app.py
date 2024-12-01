
# -*- coding: utf-8 -*-
"""
Created on Wed Nov 13 15:59:43 2024

@author: LiFish
"""

from flask import Flask,jsonify, request
import SQL
from flask_cors import CORS

app = Flask(__name__,static_folder='frontend/build',static_url_path='/')
CORS(app) 

restaurants = [
    {
        "id": 1,
        "name": "甘蔗の椰殼",
        "image": "https://images.deliveryhero.io/image/fd-tw/LH/d9uk-listing.jpg?width=300&height=300",
        "rating": 4.7,
        "deliveryTime": "25分鐘．",
        "tags": ["$$．飲料"],
    },
    {
        "id": 2,
        "name": "金仙蝦捲店",
        "image": "https://via.placeholder.com/280x160",
        "rating": 4.6,
        "deliveryTime": "25分鐘．",
        "tags": ["$．外送免服務費"],
    },
    {
        "id": 1,
        "name": "甘蔗の椰殼",
        "image": "https://images.deliveryhero.io/image/fd-tw/LH/d9uk-listing.jpg?width=300&height=300",
        "rating": 4.7,
        "deliveryTime": "25分鐘．",
        "tags": ["$$．飲料"],
    },
    {
        "id": 2,
        "name": "ABC MART",
        "image": "https://via.placeholder.com/280x160",
        "rating": 4.6,
        "deliveryTime": "25分鐘．",
        "tags": ["$．外送免服務費"],
    },
    # 更多餐廳數據...
]

store_data = {
    "location": "台123",
    "logoUrl": "https://images.deliveryhero.io/image/fd-tw/LH/x6hj-listing.jpg?width=200&height=200",
    "tag": "飲料",
    "name": "超好喝飲料",
    "details": "免費外送服務費  🛒 ",
    "rating": "4.8/5 (4000+)"
}

# 模擬菜單數據
menu_items = [
    {"id": 1, "name": "伯爵鮮奶", "image": "https://via.placeholder.com/100", "price": 55, "tagline": "店長最愛"},
    {"id": 2, "name": "茉莉清茶", "image": "", "price": 40, "tagline": "清新香氣"},
    {"id": 3, "name": "伯爵鮮奶", "image": "https://via.placeholder.com/100", "price": 55, "tagline": "店長最愛"},
    {"id": 4, "name": "茉莉阿衝", "image": "", "price": 40, "tagline": "清新香氣"}
]

@app.route('/')
def index():
    return app.send_static_file("index.html")

@app.route("/api/restaurants", methods=["GET"])
def get_restaurants():
    return jsonify(restaurants)

@app.route('/menu', methods=["GET"])
def get_menu():
    restaurant_name = request.args.get("name")  # 從查詢參數中獲取 name
    if not restaurant_name:
        return jsonify({"error": "Missing 'name' parameter"}), 400

    # 模擬返回資料
    store_data = {
      "store": {
        "location": "台南市",
        "logoUrl": "https://images.deliveryhero.io/image/fd-tw/LH/x6hj-listing.jpg?width=200&height=200",
        "tag": "飲料",
        "name": "COME BUY (台北)",
        "details": "免費外送服務費 🛒 需消費滿 $99",
        "rating": "4.8/5 (4000+)"
      },
      "menu": [
        {
          "id": 1,
          "name": "伯爵鮮奶",
          "image": "https://via.placeholder.com/100",
          "price": 55,
          "tagline": "店長最愛"
        },
        {
          "id": 2,
          "name": "茉莉清茶",
          "image": "https://via.placeholder.com/100",
          "price": 4555,
          "tagline": "清新香氣"
        }
      ]
    }

    return jsonify(store_data)




if __name__ == "__main__":
    app.run("0.0.0.0",port=5000)
