import React, { useEffect, useRef, useState, useContext } from "react";
import "./adminManagement.scss";
import "../../Pages/AdminModal/AdminModal.css";
import { MainTopMenu } from "../Sh-mainTopMenu/Sh-mainTopMenu";
import { AdminModal } from "../../Pages/AdminModal/AdminModal";
import axios from "axios";
import { DataContext } from "../DataContext/DataContext";
import { ValueContext } from "../DataContext/ValueContext";
import { PutModal } from "../PutMadal/PutMadal";

export const AdminManagement = () => {
  const [img, setImg] = useState(null);
  const [foodId, setFoodID] = useState(null);

  const { data, setData } = useContext(DataContext);
  const { valueId, setValueID } = useContext(ValueContext);
  const putBtnId = useRef();

  const productName = useRef();
  const productBowl = useRef();
  const productPrice = useRef();
  const productImg = useRef();
  const productCotygoryId = useRef();


  const productNamePut = useRef();
  const productBowlPut  = useRef();
  const productPricePut  = useRef();
  const productImgPut  = useRef();
  const productCotygoryIdPut  = useRef();

  const inpFile = (props) => {
    setImg(props.target.files[0]);
  };

  const hendalFormSubmit = (e) => {
    e.preventDefault();

    let dataForm = new FormData();

    dataForm.append("name", productName.current.value);
    dataForm.append("price", productPrice.current.value);
    dataForm.append("bowls", productBowl.current.value);
    dataForm.append(
      "category_id",
      productCotygoryId.current.value
        ? productCotygoryId.current.value
        : valueId,
    );
    dataForm.append("food_img", img);
    axios
      .post("http://localhost:5000/food", dataForm)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/food/${valueId ? valueId : "1"}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));

  },[valueId, data]);


  const PutHandalFomSubmit = (evt) => {
    evt.preventDefault();

    console.log(evt.target);

    let dataFormPut = new FormData();

    dataFormPut.append("name", productNamePut.current.value);
    dataFormPut.append("price", productPricePut.current.value);
    dataFormPut.append("bowls", productBowlPut.current.value);
    dataFormPut.append("category_id", productCotygoryIdPut.current.value);
    dataFormPut.append("food_img", img);
    

    axios
      .put(`http://localhost:5000/food/${foodId}`, dataFormPut)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

  };

  const deleteFood=()=>{
    axios
    .delete(`http://localhost:5000/food/${foodId}`)
    .catch((err) => console.log(err));
  }

  const putBtn=(e)=>{
    setFoodID(e.target.getAttribute("data-id"));
  }

  return (
    <div className="managment-box">
      <div className="managment-box__top">
        <div className="d-flex align-items-center justify-content-between mb-5">
          <h3 className="managment-box__title">Products Management</h3>
          <select
            className="managment-box__select"
            onChange={(e) => {
              setValueID(e.target.value);
            }}>
            <option value="1" defaultChecked disabled>
              Management category
            </option>
            <option value="1">Hot Dishes</option>
            <option value="2">Cold dishes</option>
            <option value="3">Soup</option>
            <option value="4">Grill</option>
            <option value="5">Appetizer</option>
            <option value="6">Dessert</option>
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
          {data.map((item) => {
            return (
              <li key={item.id} className="managment-box__item">
                <div className="managment-box__item-80-box">
                  <div>
                    <img
                      className="mb-3"
                      src={`http://localhost:5000/${item.image}`}
                      width="143"
                      height="135"
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <p className="managment-box__text">{item.name}</p>
                    <div className="d-flex justify-content-center gap-2">
                      <p className="main-foot-price">${item.price}</p>
                      <p className="main-foot-bowl">bowls {item.bowls}</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={putBtn}
                  data-id={item.id}
                  ref={putBtnId}
                  
                  className="managment-box__edit-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop">
                  Edit dish
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <PutModal>
        <form className="d-flex flex-column" onSubmit={PutHandalFomSubmit}>
          <label>
            <input
              ref={productNamePut}
              className="admin-input"
              type="text"
              placeholder="Product name"
              name="new_product"
            />
          </label>
          <label>
            <input
              ref={productBowlPut}
              className="admin-input"
              type="text"
              placeholder="Product bowls"
              name="new_bowls"
            />
          </label>
          <label>
            <input
              ref={productPricePut}
              className="admin-input"
              type="text"
              placeholder="Product price"
              name="new_price"
            />
          </label>
          <select ref={productCotygoryIdPut} className="admin-input">
            <option value="selected" defaultValue={"selected"} hidden>
              Product category
            </option>
            <option value="1">Hot Dishes</option>
            <option value="2">Cold dishes</option>
            <option value="3">Soup</option>
            <option value="4">Grill</option>
            <option value="5">Appetizer</option>
            <option value="6">Dessert</option>
          </select>
          <label className="admin-file" htmlFor="admin-file">
            <div
              className="text-center position-relative admin-file-wrapper"
              style={{
                marginTop: "100px",
              }}>
              <p className="m-0 admin-file-desc-1">
                Click or drag file to this area to upload
              </p>
              <p className="m-0 admin-file-desc-2">
                Support for a single or bulk upload.
              </p>
            </div>
          </label>
          <input
            type="file"
            id="admin-file"
            ref={productImgPut}
            onChange={inpFile}
            className="d-none"
          />

          <div
            className="d-flex gap-1 justify-content-between"
            style={{ marginTop: "70px" }}>
            <button
              className="admin-cancel"
              data-bs-dismiss="modal"
              aria-label="Close">
              Cancel
            </button>
            <button className="admin-add" type="submit">
              Add
            </button>
            <button
            onClick={deleteFood}
              className="admin-cancel"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close">
              
              Delete
            </button>
          </div>
        </form>
      </PutModal>
      <AdminModal>
        <form className="d-flex flex-column" onSubmit={hendalFormSubmit}>
          <label>
            <input
              ref={productName}
              className="admin-input"
              type="text"
              placeholder="Product name"
              name="new_product"
            />
          </label>
          <label>
            <input
              ref={productBowl}
              className="admin-input"
              type="text"
              placeholder="Product bowls"
              name="new_bowls"
            />
          </label>
          <label>
            <input
              ref={productPrice}
              className="admin-input"
              type="text"
              placeholder="Product price"
              name="new_price"
            />
          </label>
          <select ref={productCotygoryId} className="admin-input">
            <option value="selected" defaultValue={"selected"} hidden>
              Product category
            </option>
            <option value="1">Hot Dishes</option>
            <option value="2">Cold dishes</option>
            <option value="3">Soup</option>
            <option value="4">Grill</option>
            <option value="5">Appetizer</option>
            <option value="6">Dessert</option>
          </select>
          <label className="admin-file" htmlFor="admin-file">
            <div
              className="text-center position-relative admin-file-wrapper"
              style={{
                marginTop: "100px",
              }}>
              <p className="m-0 admin-file-desc-1">
                Click or drag file to this area to upload
              </p>
              <p className="m-0 admin-file-desc-2">
                Support for a single or bulk upload.
              </p>
            </div>
          </label>
          <input
            type="file"
            id="admin-file"
            ref={productImg}
            onChange={inpFile}
            className="d-none"
          />

          <div
            className="d-flex justify-content-between"
            style={{ marginTop: "70px" }}>
            <button
              className="admin-cancel"
              data-bs-dismiss="modal"
              type="button"
              aria-label="Close">
              Cancel
            </button>
            <button className="admin-add" data-bs-dismiss="modal" type="submit">
              Add
            </button>
          </div>
        </form>
      </AdminModal>
    </div>
  );
};
