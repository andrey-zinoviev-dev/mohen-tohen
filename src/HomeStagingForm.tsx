import React from "react";
// import { SetStateAction } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HomeStagingForm.css"
import { faPaperPlane, faXmark } from "@fortawesome/free-solid-svg-icons";
export default function HomeStagingForm({closePortal}: {closePortal: React.Dispatch<React.SetStateAction<boolean>>}) {
  //state
  const [formData, setFormData] = React.useState<{name: string, phone: string}>({name: "", phone: ""});

  return (
    <form className="homestaging-form" onSubmit={(evt) => {
      evt.preventDefault();
      console.log(formData);
    }}>
      <button className="homestaging-form__close" onClick={() => {
        closePortal(false);
      }}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className="homestaging-form__text-wrapper">
        <h2>Здесь форма для заявки на профессиональное декорирование</h2>
        <p>Преврати мечты в реальность — ваш персональный декор уже ждет!</p>
      </div>
      <input onChange={(evt) => {
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
      </button>
    </form>
  )
}