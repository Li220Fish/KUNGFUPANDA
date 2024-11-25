import React from 'react';
import './ApplyPageStyles.css';
import foodpandaLogo from '../assets/foodpanda_logo.jfif';
import foodpandaad from '../assets/foodpanda_ad.jpg_31-10-2024-07_09_58'
import foodpandaFeature from '../assets/motrobikeman.jpg_27-11-2023-08_03_23';
import foodpandaFeature2 from '../assets/motowomen.jpg_27-11-2023-08_03_23';
import cash from '../assets/cash.svg_21-06-2021-09_52_43';
import firstaidkit from '../assets/firstaidkit.svg_21-06-2021-09_52_43';
import balloon from '../assets/balloon.svg_21-06-2021-09_52_43';


const ApplyPage = () => {
  const handleButtonClick = () => {
    // 在這裡添加按鈕點擊的功能
    console.log('Button clicked!');
  };

  return (
    <div>
      <div className="apply-page">
        <img src={foodpandaLogo} alt="Food Panda Logo" className="logo" />
        <button className="apply-button" onClick={handleButtonClick}>
          ZH
        </button>
      </div>
      <div className="new-section">
        <div className="section-title">與foodpanda合作外送</div>
        <div className="section-content">
          <img src={foodpandaad} alt="foodpandaad" className="section-image" />
          <div className="section-form">
            <h2 className="form-title">填寫您的個人資訊</h2>
            <div className="form-group">
              <select id="position" name="position">
              <option value="">選擇您的城市</option>
              <option value="Taipei City">台北市</option>
              <option value="New Taipei City">新北市</option>
              <option value="Taoyuan City">桃園市</option>
              <option value="Taichung City">台中市</option>
              <option value="Tainan City">台南市</option>
              <option value="Kaohsiung City">高雄市</option>
              <option value="Keelung City">基隆市</option>
              <option value="Hsinchu City">新竹市</option>
              <option value="Chiayi City">嘉義市</option>
              <option value="Hsinchu County">新竹縣</option>
              <option value="Miaoli County">苗栗縣</option>
              <option value="Changhua County">彰化縣</option>
              <option value="Nantou County">南投縣</option>
              <option value="Yunlin County">雲林縣</option>
              <option value="Chiayi County">嘉義縣</option>
              <option value="Pingtung County">屏東縣</option>
              <option value="Yilan County">宜蘭縣</option>
              <option value="Hualien County">花蓮縣</option>
              <option value="Taitung County">台東縣</option>
              <option value="Penghu County">澎湖縣</option>
              <option value="Kinmen County">金門縣</option>
              <option value="Lienchiang County">連江縣</option>
              </select>
            </div>
            <div className="form-group">
              <select id="location" name="location">
                <option value="">選擇您的交通工具</option>
                <option value="motorcycle">機車</option>
                <option value="electric motorcycle">電動機車</option>
              </select>
            </div>
            <button type="submit" className="submit-button">
              <p>提交</p>
            </button>
          </div>
        </div>
      </div>
      <div className="new-section1">
        <div className="section-text1">
          <h2>探索城市</h2>
          <p>探索城市的每個街道巷弄，享受自由的旅</p>
          <p>程。</p>
        </div>
        <img src={foodpandaFeature} alt="foodpanda Feature" className="section-image1" />
      

        <div className="section-text2">
          <h2>荷包的深度自己掌握</h2>
          <p>做越多賺越多，這筆額外收入將直接進您的</p>
          <p>口袋！</p>
        </div>
        <img src={foodpandaFeature2} alt="foodpanda Feature2" className="section-image2" />
      
      </div>

      <div className="othergood">
          <h2>其他 好康:</h2>
      

        <div className="gooditems">
          <div className="cash">
            <div className="cash-text">
              <img src="https://production-ap-dodo-files.s3.ap-southeast-1.amazonaws.com/d4a26b3b-8024-440e-8706-0b4b2ce4eabe_Money.svg_21-06-2021-09%3A52%3A43" alt="cash" />
              <p>享有精選多元夥伴特約，包含購車、電信、餐飲優惠折扣</p>

            </div>
            
          </div>

          <div className="firstaidkit">
            <div className="firstaidkit-text">
              <img src="https://production-ap-dodo-files.s3.ap-southeast-1.amazonaws.com/7011f70f-185f-4812-864b-38a1dde8f3cd_Insurance.svg_21-06-2021-09%3A52%3A43" alt="firstaidkit" />
              <p>享有團險保障(實支實付傷害醫療、意外住院日額、意外事故身故/失能)</p>
            </div>
          </div>

          <div className="balloon">
            <div className="balloon-text">
              <img src="https://production-ap-dodo-files.s3.ap-southeast-1.amazonaws.com/2d1738f9-be71-4145-a9c9-ddfe9bd12cb1_Events.svg_21-06-2021-09%3A52%3A43" alt="balloon" />
              <p>企業CSR活動和外送夥伴專屬活動</p>

            </div>
          </div>
        </div>
      </div>






    </div>
  );
};

export default ApplyPage;
