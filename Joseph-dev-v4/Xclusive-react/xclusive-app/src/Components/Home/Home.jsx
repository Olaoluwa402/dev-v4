import React, { useContext } from "react";
import styles from "./Home.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { LiaArrowRightSolid } from "react-icons/lia";
import CountDownTimer from "./CountDownTimer/CountDownTimer";
import Box3 from "./Box3/Box3";
import { GlobalContext } from  '../../context';



const Home = () => {

  const {products} = useContext(GlobalContext);

  // const boxData2 = [
  //   {
  //     id : Math.floor(Math.random() * 1000),
  //     title:"Gucci Duffle Bag",
  //     image:"https://res.cloudinary.com/dfeyofjln/image/upload/v1692172728/guccibag_jmaqgc.png",
  //     price:"960",
  //     discount: "$1100",
  //     img: "https://res.cloudinary.com/dfeyofjln/image/upload/v1692172729/Quick_View_mw2nbt.png ",
  //     discpercent: "https://res.cloudinary.com/dfeyofjln/image/upload/v1692172726/Discount_percent_tnik6k.png"
  //   },
  //   {
  //     id : Math.floor(Math.random() * 1000),
  //     title:"ASUS FHD Gaming Laptop",
  //     image:"https://res.cloudinary.com/dfeyofjln/image/upload/v1692172729/laptop_jnouoi.png",
  //     price:"1000",
  //     discount: "$1160",
  //     img: "https://res.cloudinary.com/dfeyofjln/image/upload/v1692172729/Quick_View_mw2nbt.png "
  
  //   },
  //   {
  //     id : Math.floor(Math.random() * 1000),
  //     title:"Quilted Satin Jacket",
  //     image:"https://res.cloudinary.com/dfeyofjln/image/upload/v1692172728/jacket_gjn5dh.png",
  //     price:"540",
  //     img: "https://res.cloudinary.com/dfeyofjln/image/upload/v1692172729/Quick_View_mw2nbt.png "
  
  //   },
  //   {
  //     id : Math.floor(Math.random() * 1000),
  //     title:"GP11 Shooter USB Gamepad",
  //     image:"https://res.cloudinary.com/dfeyofjln/image/upload/v1692172726/black-keypad_bj5f8r.png",
  //     price:"750",
  //     img: "https://res.cloudinary.com/dfeyofjln/image/upload/v1692172729/Quick_View_mw2nbt.png "
  
  //   },
  //   {
  //     id : Math.floor(Math.random() * 1000),
  //     title:"HAVIT HV-G92 Gamepad",
  //     image:"https://res.cloudinary.com/dfeyofjln/image/upload/v1691701800/red-keypad_nnqcv3.png",
  //     price:"560",
  //     img: "https://res.cloudinary.com/dfeyofjln/image/upload/v1692172729/Quick_View_mw2nbt.png ",
  //     discpercent: "https://res.cloudinary.com/dfeyofjln/image/upload/v1692172729/New_Button_ccjduz.png"
  
  //   },
    
  // ]
  
  return (
    <div className={styles.container}>
      <div className={styles.heropage}>
        <div className={styles.heroleft}>
          <div className={styles.topleft}>
            <h3> Woman’s Fashion</h3>
            <IoIosArrowForward />
          </div>
          <div className={styles.topleft}>
            <h3>Men’s Fashion</h3>
            <IoIosArrowForward />
          </div>
          <h3>Home & Lifestyle</h3>
          <h3>Medicine</h3>
          <h3>Sports & Outdoor</h3>
          <h3>Baby’s & Toys</h3>
          <h3>Electronics</h3>
          <h3>Groceries & Pets</h3>
          <h3>Health & Beauty</h3>
        </div>
        <div className={styles.vertical}></div>
        <div className={styles.flashsales}>
          <div className={styles.innerflash}>
            <div className={styles.flash}>
              <div className={styles.flashimage}>
                <img
                  src="https://res.cloudinary.com/dfeyofjln/image/upload/v1693591108/1200px-Apple_gray_logo_1_olyzgw.png"
                  width="30px"
                />
                <span>iPhone 14 Series</span>
              </div>
              <h3>Up to 10% off Voucher</h3>
              <div id={styles.shop}>
                <p>
                  <u>Shop Now</u>
                </p>
                <LiaArrowRightSolid id={styles.icon} />
              </div>
            </div>
            <div className={styles.mainimage}>
              <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1693591110/hero_endframe__cvklg0xk3w6e_large_2_gxsvw7.png" />
            </div>
          </div>
          <div className={styles.imagecount}>
            <ul>
              <li>
                <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1693591108/Ellipse_7_i6yayt.png" />
              </li>
              <li>
                <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1693591108/Ellipse_7_i6yayt.png" />
              </li>
              <li>
                <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1693591108/Ellipse_7_i6yayt.png" />
              </li>
              <li>
                <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1693591108/Ellipse_7_i6yayt.png" />
              </li>
              <li>
                <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1693591108/Ellipse_7_i6yayt.png" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className={styles.todays_sale}>
        <div className={styles.today}>
          <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172726/Category_Rectangle_qivq0c.png" />
          <h4>Today's</h4>
        </div>
        <div className={styles.flashes}>
          <div className={styles.fsales}>
            <h2>Flash Sales</h2>
          </div>
          <div className={styles.countdown}>
            <CountDownTimer />
          </div>
          <div className={styles.arrows}>
            <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1693761816/Fill_With_Left_Arrow_nzxemu.png"/>
            <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1693761816/Fill_with_Right_Arrow_nocbhz.png"/>
          </div>
        </div>
        <div id={styles.boxes}>
          <Box3 products={products}/>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Home;
