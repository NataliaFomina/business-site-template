import React from "react";

export default function Navbar() {
  return (
    <header className="header">
      <div className="menu-top section">
        <div className="menu-btn-wrap">
          <input className="menu-btn" id="menu-btn" type="checkbox"/>
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="nav-icon"></span>
          </label>
        </div>
        <div className="menu-logo">
          <a href="index.html">
            <div className="logo"></div>
          </a>
          <p className="menu-text">Срочный выкуп в день обращения <br/>
            Работаем по СПб и ЛО</p>
        </div>
        <div className="menu-whats-app whats-desktop">
          <a href="https://wa.me/79112108888">Написать в what's app</a>
        </div>
        <div className="menu-whats-app whats-mobile">
          <a href="https://wa.me/79112108888"></a>
        </div>
        <div className="menu-contact">
          <p>Звоните в любой день с 9:00 до 22:00</p>
          <a href="tel:+79112108888"> 8 (911) 210-88-88</a>
        </div>
      </div>
      <div className="menu-bottom">
        <div className="menu-bottom-container section">
          <div className="menu-bottom-links">
            <a href="index.html">Главная</a>
            <a href="vykup/bitye-avto.html">Битые</a>
            <a href="vykup/avto-posle-dtp.html">После ДТП</a>
            <a href="vykup/avarijnye-avto.html">Аварийные</a>
            <a href="vykup/avto-posle-pozhara.html">После пожара</a>
            <a href="vykup/gorelye-avto.html">Горелые</a>
            <a href="vykup/problemnye-avto.html">Проблемные</a>
            <a href="vykup/avto-na-zapchasti.html">Авто на запчасти</a>
            <a href="vykup/poderzhannyе-avto.html">Подержанные авто</a>
            <a href="vykup/neispravnye-avto.html">Неисправные</a>
            <a href="vykup/avto-bez-dokumentov.html">Без документов</a>
            <a href="vykup/arestovannye-avtomobili.html">Арестованные</a>
            <a href="vykup/kreditnye-avto.html">Кредитные</a>
            <a href="vykup/avto-pod-zalogom.html">В залоге</a>
            <a href="vykup/avto-iz-lizinga.html">В лизинге</a>
            <a href="vykup/avto-s-zapretom.html">C запретом</a>
            <a href="vykup/priem-avto-na-razborku.html">Прием авто на разборку</a>
            <a href="vykup/avtolombard.html">Автоломбард</a>
            <a href="vykup/dengi-pod-zalog-avtomobilja.html">Займ под автомобиль</a>
            <a href="contact.html">Контакты</a>
          </div>
        </div>
      </div>
    </header>
  );
}