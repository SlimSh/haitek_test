import React from 'react';
import style from './style.scss';
import * as lt from './img/lt.png';
export default function Footer() {
  return (
    <div className={style.footer}>
      <div className='section-center'>
       <ul>
         <li><a href="public/personal.pdf">Политика обработки персональных данных </a></li>
         <li><a href="public/license.pdf">Пользовательское соглашение </a></li>
       </ul>
       <div>
         <span>16+</span>
         <p>Свидетельство о регистрации СМИ ЭЛ № ФС 77-73685 от 21.09.2018 © ООО «НьюМедиа Лаб», 2018. Все права защищены</p>
       </div>
       <img src={lt} alt=""/>
      </div>
    </div>
  )
}
