import React from "react";
import "./mainCadrs.scss";
import {MainCards} from "../Sh-MainCards/Sh-MainCards"


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
      </div>
    </>
  );
};
