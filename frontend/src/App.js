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
import Checkoutpage from "./routes/Checkoutpage";
import StoreJoinPage from "./components/StoreJoinPage"; // 引入 
import Memberdetail from "./components/Memberdetail"; // 引入 Memberdetail
import Logout from "./components/Logout"; // 引入 Logout

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/restaurant" element={<Restaurant />} /> 
        <Route path="/apply" element={<ApplyPage />} /> {/* 添加 ApplyPage 路由 */}
        <Route path="/storejoin" element={<StoreJoinPage />}  /> {/* 添加 ApplyPage 路由 */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/checkoutpage" element = {<Checkoutpage />} />
        <Route path="/memberdetail" element={<Memberdetail />} /> 
        <Route path="/logout" element={<Logout />} /> 
      </Routes>
    </div>
  );
}
