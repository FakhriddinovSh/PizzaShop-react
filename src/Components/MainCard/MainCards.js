import React from "react";
import "./mainCadrs.scss";
import { MainCards } from "../Sh-MainCards/Sh-MainCards";

export const HeroMainCards = () => {
  return (
    <>
      <div className="hero-cards">
      
        <div className="hero-card__top">
          <h3 className="hero-title">Choose Dishes</h3>

          <select className="hero-cards__select">
            <option value="dine">Dine In</option>
          </select>
        </div>

        <div>
          {MainCards.length != 0 ? (
            <ul className="d-flex flex-wrap justify-content-between main-foot-list">
              {MainCards.map((item) => {
                return (
                  <li key={item.price} className="main-foot-item">
                    <div>
                        <img className="main-foot-img" src={item.image} width="180" height="165" alt={item.foodName} />
                    </div>
                    <div>
                        <p className="main-foot-name">{item.foodName}</p>
                        <p className="main-foot-price">{item.price}</p>
                        <p className="main-foot-bowl">{item.bowl}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <h3>Food not found. Please waith</h3>
          )}
        </div>
      </div>
    </>
  );
};
