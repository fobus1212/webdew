import React from 'react';
import styles from './Header.module.css'; // Подключаем CSS модуль для стилей 
import place from "../img/placeholder 1.png"

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.location}>
          <img src={place} alt="Location Icon" className={styles.icon} />
          <span className={styles.cooperationmore}>Ваш город: Москва</span>
        </div>
        <div className={styles.info}>Информация &#9660;</div>
        <div className={styles.cooperation}> Сотрудничество &#9660;</div> 
        <div className={styles.cooperationmore}> Еще &#9660;</div>
      </div>
      <div className={styles.menuContainer}>
        <ul className={styles.menu}>
          <li>Доставка</li>
          <li>Оплата</li>
          <li>Гарантия</li>
          <li>Новости</li>
          <li>Журнал</li>
          <li>О магазине</li>
          <li>Контакты</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
