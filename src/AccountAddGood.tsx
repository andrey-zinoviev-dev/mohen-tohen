import React from "react";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import InputEl from "./InputEl";
import "./AccountAddGood.css"
import ListGrid from "./ListGrid";

export default function AccountAddGood() {
  //states
  // const [addPhotos, setAddPhotos] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState<{title: string, description: string, material: string, photos:{title: string, file: File}[], price: number}>({
    title: "",
    description: "",
    material: "",
    photos: [],
    price: 0,
  });

  //refs
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  //functions
  function openInput() {
    fileInputRef.current && fileInputRef.current.click();
  }
  
  return (
    <>
      <h3>Добавление нового товара</h3>
      <form className="addGoodform" onSubmit={(evt) => {
        evt.preventDefault();
        console.log(formData);
      }}>
        <div className="addGoodform__text-wrapper">
          <label className="addGoodform__label">
            Название
            <InputEl name="title" updateState={setFormData}></InputEl>
            {/* <input></input> */}
          </label>
          <label className="addGoodform__label">
            Описание
            <InputEl updateState={setFormData} name="description"></InputEl>
            {/* <input></input> */}
          </label>
          <label className="addGoodform__label">
            Материал
            <InputEl updateState={setFormData} name="material"></InputEl>
            {/* <input></input> */}
          </label>
          <label className="addGoodform__label">
            Цена
            <InputEl updateState={setFormData} name="price" type={"number"}></InputEl>
          </label>
          <button type="submit">
            Отправить товар
          </button>
        </div>
        <div className="addGoodform__files-wrapper">
          <span>Фото</span>
          <ListGrid gridElements={formData.photos} openInput={openInput} />
        </div>
      </form>
      <input type="file" accept=".png, .jpg" ref={fileInputRef} onChange={(evt) => {
        console.log(evt.target.files[0]);
      }} style={{display: "none"}}></input>
    </>
  )
}