import React from "react";
import "./adminManagement.scss";
import "../../Pages/AdminModal/AdminModal.css";
import { MainTopMenu } from "../Sh-mainTopMenu/Sh-mainTopMenu";
import { MainCards } from "../Sh-MainCards/Sh-MainCards";
import { AdminModal } from "../../Pages/AdminModal/AdminModal";

export const AdminManagement = () => {
  return (
    <div className="managment-box">
      <div className="managment-box__top">
        <div className="d-flex align-items-center justify-content-between mb-5">
          <h3 className="managment-box__title">Products Management</h3>
          <select className="managment-box__select">
            <option value="managecategories">Manage Categories</option>
          </select>
        </div>

        <MainTopMenu />
      </div>

      <div className="managment-box__cards">
        <ul className="d-flex flex-wrap justify-content-center  managment-box__list gap-3">
          <li className="managment-box__product-add-first-item">
            <button
              type="button"
              className="managment-box__product-add-btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal">
             Add new dish
            </button>
          </li>
          {MainCards.map((item) => {
            return (
              <li className="managment-box__item">
                <div className="managment-box__item-80-box">
                  <div>
                    <img
                      className="mb-3"
                      src={item.image}
                      width="143"
                      height="135"
                      alt={item.foodName}
                    />
                  </div>
                  <div>
                    <p className="managment-box__text">{item.foodName}</p>
                    <div className="d-flex justify-content-center gap-2">
                      <p className="main-foot-price">{item.price}</p>
                      <p className="main-foot-bowl">{item.bowl.slice(0, 8)}</p>
                    </div>
                  </div>
                </div>
                <button className="managment-box__edit-btn">Edit dish</button>
              </li>
            );
          })}
        </ul>
      </div>

        <AdminModal />
    </div>
  );
};
