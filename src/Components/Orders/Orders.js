import React from "react";
import "./orders.scss";
import ProductImg from "../../Assets/Images/Img/MaskGroup.png";
import Karzinka from "../../Assets/Images/Img/karzinka.svg";
import { useRef } from "react";
import { MainCards } from "../Sh-MainCards/Sh-MainCards";
export function Orders() {
  const btnActive = useRef();

  const btnClick = () => {
    btnActive.current.classList.toggle("oreder-home__dine");
  };

  const orderHomeModal = {
    position: "fixed",
    right: "0",
    left: "0",
    top: "0",
    bottom: "0",
    zIndex: "20",
    backgroundColor: "#1f1d2b77",
    overflowY: "hidden",
  };

  return (
    <div>
      <div className="order-home">
        <div>
          <div className="order-home__text-top">
            <h3 className="order-home__title">Orders #34562</h3>
            <div className="order-home__btns">
              <button
                onClick={btnClick}
                className="oreder-home__dine order-hm-btns"
                ref={btnActive}>
                Dine In
              </button>
              <button
                onClick={btnClick}
                className="order-hm-btns"
                ref={btnActive}>
                To go{" "}
              </button>
              <button
                onClick={btnClick}
                className="order-hm-btns"
                ref={btnActive}>
                Delivery
              </button>
            </div>

            <div className="oreder-home__buttom-text-box">
              <p className="order-home__button-text">Item</p>
              <div className="order-home__button-text-end">
                <p className="order-home__button-text">Qty</p>
                <p className="order-home__button-text">Price</p>
              </div>
            </div>
            <div></div>
          </div>

          <div className="order-home__product-buy">
            <ul className="order-home__product-list product-list list-unstyled">
              {MainCards.map((item) => (
                <li className="product-list__item d-flex  gap-4">
                  <div className="w-75">
                    <div className="d-flex justify-content-between gap-1">
                      <div className="d-flex align-items-center gap-3">
                        <img src={item.image} width="45" height="41" alt="" />
                        <div>
                          <p className="prosuct-list__name m-0">
                            {item.foodName}
                          </p>
                          <p className="prosuct-list__name product-list__price m-0">
                            {item.price}
                          </p>
                        </div>
                      </div>
                      <button className="product-list__count">2</button>
                    </div>
                    <input
                      className="product-list__input mt-2"
                      type="text"
                      placeholder="Order Note..."
                    />
                  </div>

                  <div>
                    <p className="product-list__price-count mt-3">
                      {item.price}
                    </p>
                    <button className="product-list__delete d-flex mt-4">
                      <img src={Karzinka} alt="delete" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="product-buy-box">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column gap-3">
                <p className="proudct-buy__skitka">Discount</p>
                <p className="proudct-buy__skitka">Sub total</p>
              </div>
              <div className="d-flex flex-column gap-3">
                <p className="proudct-buy__price">$0</p>
                <p className="proudct-buy__price"> $ 21,03</p>
              </div>
            </div>
            <button
              className="proudct-buy__btn w-100"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight">
              Continue to Payment
            </button>
          </div>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Payment
          </h5>
          <p className="offcanvs-text-header">3 payment method available</p>
        </div>
        <div className="offcanvas-body">
          <div className="offcanvas-body-cards">
            <h4 className="payment-method">Payment Method</h4>
            <div className="d-flex gap-3 pt-2">
              <button className="payment-cards-btn payments-btns-cads">
                Credit Card
              </button>
              <button className="payments-btns-cads">Paypal</button>
              <button className="payments-btns-cads">Cash</button>
            </div>
          </div>

          <form className="payment-form">
            <label style={{ width: "100%", marginBottom: "16px" }}>
              <p className="payment-input-text">Cardholder Name</p>
              <input
                className="payment-inp"
                type="text"
                placeholder="Levi Ackerman"
              />
            </label>
            <label style={{ width: "100%" }}>
              <p className="payment-input-text">Card Number</p>
              <input
                className="payment-inp"
                type="number"
                placeholder="2564 1421 0897 1244"
              />
            </label>

            <div className="d-flex gap-2 mt-4  payment-cvv-box">
              <label style={{ width: "100%" }}>
                <p className="payment-input-text">Expiration Date</p>
                <input
                  className="payment-inp"
                  type="number"
                  placeholder="02/2022"
                />
              </label>
              <label style={{ width: "100%" }}>
                <p className="payment-input-text">CVV</p>
                <input
                  className="payment-inp"
                  type="password"
                  placeholder=""
                />
              </label>
            </div>
            <div className="d-flex gap-2 mt-4 ">
              <label style={{ width: "100%" }}>
                <p className="payment-input-text">Order Type</p>
                <select className="most-cards__select">
              <option value="dine">Today</option>
            </select>
              </label>
              <label style={{ width: "100%" }}>
                <p className="payment-input-text">Table no.</p>
                <input
                  className="payment-inp"
                  type="number"
                  placeholder="140"
                />
              </label>
            </div>

            <div className="pt-4 d-flex align-items-center gap-2">
              <button className=" form-payment-btns">Cancel</button>
              <button className="payment-btn-form form-payment-btns">Cancel</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
