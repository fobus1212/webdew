import React, { useState } from 'react';
import './Content3.css'; 
import cart1 from "../img/kart.png"  
import prodcart from "../img/producktcart.png" 
import heart from "../img/heart-shape-outline 2.png" 
import market from "../img/market-fluctuation1.png" 



const ProductModule = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [visibleProducts, setVisibleProducts] = useState(8); // Начальное количество видимых продуктов

  const products = {
    all: [
      { id: 1, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' }, 
      { id: 2, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' },  
      { id: 3, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' }, 
      { id: 4, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' },  
      { id: 5, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' }, 
      { id: 6, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' },  
      { id: 7, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' }, 
      { id: 8, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' },  
      { id: 9, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' }, 
      { id: 10, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' },  
      { id: 9, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' }, 
      { id: 10, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' },   

      
    ],
    sale: [ 
      { id: 1, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' }, 
      { id: 2, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' },  
      { id: 3, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' }, 
      { id: 4, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' }, 
      
    ],
    trending: [
      { id: 1, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' }, 
      { id: 2, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' },  
      { id: 3, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' }, 
      { id: 4, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' },  
      { id: 5, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' }, 
      { id: 6, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' },  
      { id: 7, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' }, 
      { id: 8, image: cart1, reviews: 10, name: 'Intermediate accumulator sleeve', price: 'Цена по запросу' }, 
    ],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setVisibleProducts(tab === 'all' ? 8 : products[tab].length); // Сброс видимых продуктов при смене вкладки
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
  };

  return (
    <div className="product-module-container">
      <div className="tabs-container">
        <button className="tab-button" onClick={() => handleTabClick('all')}>Подборка товаров</button>
        <button className="tab-button" onClick={() => handleTabClick('sale')}>Акции</button>
        <button className="tab-button" onClick={() => handleTabClick('trending')}>Сейчас покупают</button>
      </div>
      <div className="products-container">
        {products[activeTab].slice(0, visibleProducts).map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <p className="product-reviews"><span className="star-icon">⭐</span> {product.reviews} отзывов</p>
            <p className="product-name">{product.name}</p>
            <p className="product-price">Цена  <span className="price-request">по запросу</span></p>
            <div className="product-actions">
            <button className="add-to-cart-button">
      <img src={prodcart} alt="Иконка корзины" className="cartimg"/>
      В корзину
    </button>
              <div className="product-icons">
                <span className="product-icon"><img src = {heart}></img></span>
                <span className="product-icon"><img src = {market}></img></span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleProducts < products[activeTab].length && (
        <button className="load-more-button" onClick={loadMoreProducts}>Показать еще</button>
      )}
    </div>
  );
};

export default ProductModule;
