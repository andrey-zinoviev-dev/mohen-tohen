import React from "react";
// import { SetStateAction } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HomeStagingForm.css"
import { faPaperPlane, faXmark } from "@fortawesome/free-solid-svg-icons";
import InputEl from "./InputEl";
import SuccessWrapper from "./SuccessWrapper";
export default function HomeStagingForm({closePortal}: {closePortal: React.Dispatch<React.SetStateAction<boolean>>}) {
  //state
  const [formData, setFormData] = React.useState<{name: string, phone: string}>({name: "", phone: ""});
  const [formSubmitted, setFormSubmitted] = React.useState<boolean>(false);
  return (
    <form className="homestaging-form" onSubmit={(evt) => {
      evt.preventDefault();
      setFormSubmitted(true);
      console.log(formData);
    }}>
      {!formSubmitted ? <>
          <button type="button" className="homestaging-form__close" onClick={() => {
          closePortal(false);
        }}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className="homestaging-form__text-wrapper">
          <h2>Здесь форма для заявки на профессиональное декорирование</h2>
          <p>Преврати мечты в реальность — ваш персональный декор уже ждет!</p>
        </div>
        <InputEl name="name" placeHolder="Ваше имя" updateState={setFormData}></InputEl>
        <InputEl type="phone" name="phone" placeHolder="Ваш телефон" updateState={setFormData}></InputEl>
        <button className="homestaging-form__button" type="submit">
          Отправить заявку
          <FontAwesomeIcon icon={faPaperPlane} />  
        </button>
      </>
      :
      <>
        <SuccessWrapper label="Заявка отправлена" />
        <button className="homestaging-form__button" onClick={() => {
          closePortal(false);
        }}>Закрыть</button>
      </>}
      
      {/* <input onChange={(evt) => {
        setFormData((prevValue) => {
          return {...prevValue, name: evt.target.value};
        })
      }} required placeholder="Ваше имя"></input>
      <input onChange={(evt) => {
        setFormData((prevValue) => {
          return {...prevValue, phone: evt.target.value};
        })
      }} required placeholder="Ваш телефон"></input>
      <button className="homestaging-form__button" type="submit">
        Отправить заявку
        <FontAwesomeIcon icon={faPaperPlane} />  
      </button> */}
    </form>
  )
}