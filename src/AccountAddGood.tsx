import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import InputEl from "./InputEl";
import "./AccountAddGood.css"
import AddButton from "./AddButton";

export default function AccountAddGood({close}: {close: React.Dispatch<React.SetStateAction<boolean>>}) {
  //states
  // const [addPhotos, setAddPhotos] = React.useState<boolean>(false);

  //refs
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  //functions
  function openInput() {
    fileInputRef.current && fileInputRef.current.click();
  }
  
  return (
    <>
      <button onClick={() => {
        close(false);
      }}>
        <FontAwesomeIcon icon={faArrowLeft} />
        Вернуться к товарам
      </button>
      {/* <h3>Добавление нового товара</h3> */}
      <form className="addGoodform" onSubmit={(evt) => {
        evt.preventDefault();
        console.log("send data to server here");
      }}>
        <div className="addGoodform__text-wrapper">
          <label className="addGoodform__label">
            Название
            <InputEl name="title"></InputEl>
            {/* <input></input> */}
          </label>
          <label className="addGoodform__label">
            Описание
            <InputEl name="description"></InputEl>
            {/* <input></input> */}
          </label>
          <label className="addGoodform__label">
            Материал
            <InputEl name="material"></InputEl>
            {/* <input></input> */}
          </label>
          <label className="addGoodform__label">
            Цена
            <InputEl name="price" type={"number"}></InputEl>
          </label>
          <button>
            Отправить товар
          </button>
        </div>
        <label className="addGoodform__label">
          Фото
          <ul>
            <li key={"new-photo"}>
              <AddButton openInput={openInput}></AddButton>        
            </li>
          </ul>

        </label>

      </form>
      <input type="file" ref={fileInputRef} style={{display: "none"}}></input>
    </>
  )
}