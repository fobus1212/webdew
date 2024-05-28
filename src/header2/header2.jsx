// HeaderPart2.jsx

import React from 'react';
import './Header2.css'; // Подключаем стили модуля 
import mask from "../img/Mask Group.png" 
import time from "../img/timev.png"  
import mesto from "../img/placeh2.png" 
import ws from "../img/whatsapp (2) 1.png"

const HeaderPart2 = () => {
  return (
    <div className="header-part2-container">
      <div className="logo-container">
        {/* Иконка (замените на вашу иконку) */}
        <img src={mask} alt="Location" className='corelogo' />
        {/* Текст "AVT-ZAP" (без обработчика клика) */} 
        <p className="coretext">AVT-ZAP</p>
        <p className="subtext">Интернет-магазин запчастей <br></br>для АКПП</p>
      </div>   
      <div className="time-container">
        {/* Иконка (замените на вашу иконку) */}
        <img src={time} alt="timelogo" className='timelogo'/>
        <p className="subtexttime">Мы работаем: будни - 9:00-21:00<br></br>сб. - 10:00-15:00 </p>
      </div> 
      <div className="mesto-container">
        {/* Иконка (замените на вашу иконку) */}
        <img src={mesto} alt="mestologo" className='mestologo'/>
        <p className="subtextmesto">Невский пр-т, д. 45 </p>
      </div>
      <div className="working-hours-container">
        <div className="green-rectangle">
          {/* Иконка (замените на вашу иконку) */}
          <img src={ws} alt="WhatsApp" className='logo' />
          {/* Текст "Напишите нам в WhatsApp" */}
          <p>Напишите нам в WhatsApp</p>
        </div>
        {/* Телефонный номер (без обработчика клика) */}
        <p className="contact-info">+7 999 999 99 99</p>
        {/* Форма обратной связи (без обработчика клика) */}
      </div>
    </div>
  );
};

export default HeaderPart2;
