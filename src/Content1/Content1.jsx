// PromotionalModule.jsx

import React, { useState } from 'react';
import './Content1.css'; 
import img1 from "../img/Group 1539.png" 
import img2 from "../img/cat1.jpg" 
import img3 from "../img/cat2.jpg" 
import promo from "../img/promo.png" 
import wcart from "../img/whitecart.png"

const PromotionalModule = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    img1, // replace with actual image paths
    img2,
    img3
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="promotional-module-container">
      <div className="image-slider-container">
        <div className="image-slider">
          <img src={images[currentImage]} alt="Promotion" className="slider-image" />
          <button className="slider-button left" onClick={prevImage}>&lt;</button>
          <button className="slider-button right" onClick={nextImage}>&gt;</button>
          <div className="indicator-container">
            {images.map((_, index) => (
              <div key={index} className={`indicator ${index === currentImage ? 'active' : ''}`}></div>
            ))}
          </div>
        </div>
      </div>
      <div className="promotions-container">
        <div className="promotion-box">
          <div className="promotion-content">
            <p className="promotion-title">Акция</p>
            <img src={promo} alt="Promotion 1" className="promotion-image" />
            <div className="promotion-text">
              <p className="product-namec1">Обгонная муфта<br />гидротрансформатор</p>
              <p className="product-details">BW-SP-2 SONNAX</p>
              <p className="product-pricec1">4 430₽</p>
            </div>
            <div className="blue-square">
            <img src={wcart} alt="Shopping Cart" className='icon' />
            </div>
          </div>
        </div>
        <div className="promotion-box">
          <div className="promotion-content">
            <p className="promotion-title">Акция</p>
            <img src={promo} alt="Promotion 2" className="promotion-image" />
            <div className="promotion-text">
              <p className="product-namec1">Обгонная муфта<br />гидротрансформатор</p>
              <p className="product-details">BW-SP-2 SONNAX</p>
              <p className="product-pricec1">4 430₽</p>
            </div>
            <div className="blue-square">
            <img src={wcart} alt="Shopping Cart" className='icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalModule;
