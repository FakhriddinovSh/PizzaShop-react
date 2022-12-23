import React from "react";
import "./chooseDishes.scss";
import { Routes, Route } from "react-router-dom";
import { Orders } from "../Orders/Orders";
import { Doashbard } from "../../Pages/Doashbard/Doashbard";
import { MainTop } from "../Sh-mainTop/Sh-mainTop";
import { MainTopMenu } from "../Sh-mainTopMenu/Sh-mainTopMenu";
import { Sidebar } from "../Sh-SideBar/Sh-Sidebar";
import { HeroMainCards } from "../MainCard/MainCards";
import { MostOrder } from "../MostOrder/MostOrder";
import { Settings } from "../../Pages/Settings/Settings";
import {AdminModal} from "../../Pages/AdminModal/AdminModal"
export const ChooseDishes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="d-flex">
                <div className="task">
                  <Sidebar />
                </div>
                <div
                  style={{
                    backgroundColor: "#252836",
                    paddingLeft: "130px",
                    paddingRight: "38px",
                  }}
                  className="hero-top">
                  <MainTop />
                  <MainTopMenu />
                  <HeroMainCards />
                </div>
                {<Orders />}
              </div>
            </>
          }
        />
        <Route
          path="/piece"
          element={
            <>
              <div className="d-flex">
                <div className="task">
                  <Sidebar />
                </div>
                <div
                  style={{
                    width: "75%",
                    backgroundColor: "#252836",
                    paddingLeft: "130px",
                    paddingRight: "38px",
                  }}>
                  <Doashbard />
                </div>

                <MostOrder />
              </div>
            </>
          }
        />
		<Route
          path="/settings"
          element={
            <>
              <div className="d-flex">
                <div className="task">
                  <Sidebar />
                </div>
                <div
                  style={{
                    backgroundColor: '#252836',
                    paddingLeft: '115px',
                    paddingRight: '38px',
                    width: '100%',
                  }}
                >
                  <Settings />
                  {/* <MainTopMenu /> */}
                </div>
                {/* {<ChooseDishes />} */}
              </div>
            </>
          }
        />
        <Route
          path="/exit"
          element={
            <>
              <div className="d-flex">
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <AdminModal />
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/*"
          element={
            <>
              <div className="d-flex">
                <div>
                  <Sidebar />
                </div>
                <div
                  style={{
                    backgroundColor: "#252836",
                    paddingLeft: "10px",
                    paddingRight: "38px",
                  }}>
                  {/* <MainTop /> */}
                  {/* <MainTopMenu /> */}
                </div>
                {/* {<ChooseDishes />} */}
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
};
