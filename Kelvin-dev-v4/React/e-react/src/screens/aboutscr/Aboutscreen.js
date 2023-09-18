import React from "react";
import "./Aboutscreenmodule.css";

function Aboutscreen() {
  return (
    <div className="container">
      <div className="dir">
        <p>Home</p>
        <p>/</p>
        <p>Contact</p>
      </div>
      <section className="about_hero">
        <div>
          <h1>Our story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <img
          src="../Assets/about-assets/about-hero-img.png"
          alt=""
          className="about_hero_img"
        />
      </section>
      <section className="about_section_main">
        <div className="about_features_container">
          <div className="about_features">
            <img src="../Assets/icons/icons-shop.png" alt="" />
            <h2>10.5k</h2>
            <p>Sellers active our site</p>
          </div>
          <div className="about_features">
            <img src="../Assets/icons/icons-currency.png" alt="" />
            <h2>33k</h2>
            <p>Monthly Product Sale</p>
          </div>
          <div className="about_features">
            <img src="../Assets/icons/icons-bag.png" alt="" />
            <h2>45.5k</h2>
            <p>Customer active in our site</p>
          </div>
          <div className="about_features">
            <img src="../Assets/icons/icons-money.png" alt="" />
            <h2>25k</h2>
            <p>Annual gross sale in our site</p>
          </div>
        </div>
        <div className="about_team_container">
          <div>
            <img src="../Assets/about-assets/about-team-person1.png" alt="" />
            <div>
              <h3>Tom Cruise</h3>
              <p>Founder & Chairman</p>
              <div className="team_links">
                <i className="{fa}-solid fa-hashtag"></i>
                <i className="{fa}-brands fa-instagram"></i>
                <i className="{fa}-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
          <div>
            <img src="../Assets/about-assets/about-team-person2.png" alt="" />
            <div>
              <h3>Emma Watson</h3>
              <p>Managing Director</p>
              <div className="team_links">
                <i className="{fa}-solid fa-hashtag"></i>
                <i className="{fa}-brands fa-instagram"></i>
                <i className="{fa}-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
          <div>
            <img src="../Assets/about-assets/about-team-person3.png" alt="" />
            <div>
              <h3>Will Smith</h3>
              <p>Product Designer</p>
              <div className="team_links">
                <i className="{fa}-solid fa-hashtag"></i>
                <i className="{fa}-brands fa-instagram"></i>
                <i className="{fa}-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="about_services">
          <div className="about_service">
            <img src="../Assets/icons/icons-truck.png" alt="" />
            <h3>FREE AND FAST DELIVERY</h3>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div className="about_service">
            <img src="../Assets/icons/icons-headset.png" alt="" />
            <h3>24/7 CUSTOMER SERVICE</h3>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div className="about_service">
            <img src="../Assets/icons/icons-shield.png" alt="" />
            <h3>MONEY BACK GUARANTEE</h3>
            <p>We return money within 30 days</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutscreen;
