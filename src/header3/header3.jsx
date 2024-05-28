// FullWidthHeader.jsx

import React from 'react';
import './Header3.css'; 
import catalog from "../img/catalog.png" 
import user from "../img/user123.png" 
import heart from "../img/heartforhed3.png" 
import cart from "../img/cartforhed3.png" 

const FullWidthHeader = () => {
  return (
    <div className="header-container">
     <button className="catalog-button">
  <img src={catalog} alt="Изображение папки" className='catalogimg' />
  Каталог
</button>

      <div className="search-container">
        <input
          type="text"
          placeholder="Поиск по наименованию или артикулу"
          className="search-input"
        />
        <button className="search-button">Найти</button>
      </div>
      <div className="auth-container">
      <img src={user} alt="Shopping Cart" className='iconh3' />
        Войти
      </div>
      <div className="favorites-container">
      <img src={heart} alt="Shopping Cart" className='iconh3' />
        Избранное
      </div>
      <div className="cart-container">
      <img src={cart} alt="Shopping Cart" className='iconh3' />
        Корзина
      </div>
    </div>
  );
};

export default FullWidthHeader;
