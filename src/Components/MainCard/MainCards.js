import React, { useContext, useEffect } from "react";
import "./mainCadrs.scss";
import { MainCards } from "../Sh-MainCards/Sh-MainCards";
import { DataContext } from "../DataContext/DataContext";
import { ValueContext } from "../DataContext/ValueContext";
import axios from "axios";

export const HeroMainCards = () => {

  const { data,setData } = useContext(DataContext);
  const {valueId, setValueID } = useContext(ValueContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/food/${valueId ? valueId : "1"}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [valueId]);

  return (
    <>
      <div className="hero-cards">
      
        <div className="hero-card__top">
          <h3 className="hero-title">Choose Dishes</h3>

          <select className="hero-cards__select" onChange={(e)=>{
            setValueID(e.target.value);
          }}>
            <option value="dine">Dine In</option>
            <option value="1">Hot Dishes</option>
            <option value="2">Cold dishes</option>
            <option value="3">Soup</option>
            <option value="4">Grill</option>
            <option value="5">Appetizer</option>
            <option value="6">Dessert</option>
          </select>
        </div>

        <div>
          {MainCards.length !== 0 ? (
            <ul className="d-flex flex-wrap justify-content-between main-foot-list">
              {data.map((item) => {
                return (
                  <li key={item.id} className="main-foot-item">
                    <div>
                        <img className="main-foot-img" src={`http://localhost:5000/${item.image}`} width="180" height="165" alt={item.name} />
                    </div>
                    <div>
                        <p className="main-foot-name">{item.name}</p>
                        <p className="main-foot-price">${item.price}</p>
                        <p className="main-foot-bowl">bowls {item.bowls}</p>
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
