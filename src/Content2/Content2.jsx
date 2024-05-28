import React, { useState } from 'react';
import './Content2.css';
import img1 from '../img/avt.png'; 
import img2 from '../img/cat3.jpg';

const PromoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      title: "Масла",
      description: "Трансмиссионное масло; присалка в масло акпп",
      image: img1,
    },
    {
      title: "Масла",
      description: "Трансмиссионное масло; присалка в масло акпп",
      image: img1,
    },
    {
      title: "Масла",
      description: "Трансмиссионное масло;      присалка в масло акпп",
      image: img1,
    },
    {
      title: "Масла",
      description: "Трансмиссионное масло; присалка в масло акпп",
      image: img2,
    },
    {
      title: "Масла",
      description: "Трансмиссионное масло; присалка в масло акпп",
      image: img1,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="promo-slider-container">
      <div className="promo-slider">
        {items.slice(currentIndex, currentIndex + 3).map((item, index) => (
          <div key={index} className="promo-item">
            <div className="promo-item-content">
              <h3 className="promo-title">{item.title}</h3>
              <p className="promo-description" dangerouslySetInnerHTML={{ __html: item.description }}></p>
              <button className="promo-button">Перейти</button>
            </div>
            <img src={item.image} alt={item.title} className="promo-image" />
          </div>
        ))}
      </div>
      <button className="promo-nav-button prev" onClick={prevSlide}>&lt;</button>
      <button className="promo-nav-button next" onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default PromoSlider;
