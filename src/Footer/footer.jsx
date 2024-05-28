import React from 'react';
import './footer.css'; 
import icon1 from "../img/facebook.png" 
import icon2 from "../img/telegram.png" 
import icon3 from "../img/twitter.png" 
import icon4 from "../img/google-plus.png" 
import icon5 from "../img/kisspng.png"

const App = () => {
  return (
    <div className="containerf">
      <div className="column">
        <h2 className="titlef">Каталог</h2>
        <ul className="list">
          <li className="list-item">Каталог запчастей</li>
          <li className="list-item">Масла</li>
          <li className="list-item">Фильтры</li>
          <li className="list-item">Радиаторы</li>
          <li className="list-item">Sonnax</li>
          <li className="list-item">Manual</li>
          <li className="list-item">Новинки</li>
          <li className="list-item">Акции</li>
        </ul>
      </div>
      <div className="column">
        <h2 className="titlef">Рубрикатор</h2>
        <ul className="list">
          <li className="list-item">Доставка</li>
          <li className="list-item">Оплата</li>
          <li className="list-item">Гарантия</li>
          <li className="list-item">Новости</li>
          <li className="list-item">Журнал</li>
          <li className="list-item">О магазине</li>
          <li className="list-item">Контактная информация </li>
        </ul>
      </div>
      <div className="column">
        <h2 className="titlef">Информация</h2>
        <ul className="list">
          <li className="list-item">Пользовательское соглашение об использовании персональных данных </li>
          <li className="list-item">Политика конфиденциальности</li>
          <li className="list-item">Соглашение на рассылку рекламных материалов</li>
          <li className="list-item">Политика возврата</li>
          <li className="list-item">
            <div className="image-container">
              <span>Мы принимаем</span>
              <img src={icon5} alt="Info" className="info-image" />
            </div>
          </li>
        </ul>
      </div>
      <div className="column1">
        <h2 className="titlef">Контакты</h2>
        <ul className="list">
          <li className="list-item">+7 999 999 99 99<br></br>info@avt-zap.ru</li>
          <li className="list-item">Мы онлайн</li>
        </ul>
      </div>
      <div className="column">
        <h2 className="titlef">Адрес</h2>
        <ul className="list">
          <li className="list-item">г. Новосибирск,<br></br>ул. Планировочная, 5, офис 105</li>
          <li className="list-item">Форма обратной связи</li>
        </ul>
      </div>
      <div className="subscription-container">
        <p className="subscription-text">
          Подпишитесь на нашу рассылку и<br></br> вы первыми узнаете о скидках и акциях
        </p>
        <div className="subscription-form">
          <input type="text" placeholder="Введите ваш email" className="input" />
          <button className="subscribe-button">Подписаться</button>
        </div>
        <div className="icons-container">
          <img src={icon1} alt="Icon 1" className="icon" />
          <img src={icon2} alt="Icon 2" className="icon" />
          <img src={icon3} alt="Icon 3" className="icon" />
          <img src={icon4} alt="Icon 4" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default App;
