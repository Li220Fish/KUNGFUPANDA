import React from 'react';
import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import SignUp from "./routes/SignUp";
import Restaurant from "./routes/Restaurant";
import ApplyPage from "./components/ApplyPage"; // 確保引入 ApplyPage
import ApplyBar from "./components/ApplyBar"; // 引入 ApplyBar
import Menu from "./routes/Menu";
import Memberdetail from "./components/Memberdetail";
import Logout from './components/Logout';
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/restaurant" element={<Restaurant />} />  //by lifish
        <Route path="/apply" element={<ApplyPage />} /> {/* 添加 ApplyPage 路由 */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/Memberdetail" element={<Memberdetail />} />//WSG處理
        <Route path="/Logout" element={<Logout />} />//WSG處理
      </Routes>
    </div>
  );
}
