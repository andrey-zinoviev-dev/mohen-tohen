import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Collaboration.css"
// import SelectElement from "./SelectElement";
// import { inquerySellSelect } from "./utils";
import { CollaborationInterface } from "./interfaces";
export default function Collaboration () {
    //state
    const [formData, setFormData] = React.useState<CollaborationInterface>(
        {
            name: "",
            email: "",
            subject: "",
            phone: "",
            // sell: "",
        }
    );

    //variables
    const formValues = Object.values(formData);
    console.log(formValues);
    const formIsCompleted = formValues.every((entry) => {
        return entry.length > 0;
    });

    // console.log(formIsCompleted);

    return (
        <section className="collaboration">
            <div className="collaboration__headline-wrapper">
                <h2>Вы дизайнер? Давайте сотрудничать!</h2>
                <a href="mailto:sttrog_810@mail.ru">
                    sttrog_810@mail.ru
                    <FontAwesomeIcon icon={faArrowRight} />
                </a>
            </div>
            <div className="collaboration__wrapper">
                <h3>Данные для заявки</h3>
                <form className="collaboration__form" onSubmit={(evt) => {
                    evt.preventDefault();
                }}>
                    <div className="collaboration__form-inputs">
                        <div className="colalboration__form-input-wrapper">
                            <label htmlFor="name">
                                Имя
                            </label>
                            <input id="name" onChange={(evt) => {
                                setFormData((prevValue) => {
                                    return {...prevValue, name: evt.target.value};
                                })
                            }} placeholder="Алексей Солдатов"></input>
                        </div>
                        <div className="colalboration__form-input-wrapper">
                            <label htmlFor="phone">
                                Телефон
                            </label>
                            <input id="phone" onChange={(evt) => {
                                setFormData((prevValue) => {
                                    return {...prevValue, phone: evt.target.value};
                                })
                            }} placeholder="+79031513045"></input>
                        </div>
                    </div>
                    <div className="collaboration__form-inputs">
                        <div className="colalboration__form-input-wrapper">
                            <label htmlFor="email">
                                Почта
                            </label>
                            <input id="email" onChange={(evt) => {
                                setFormData((prevValue) => {
                                    return {...prevValue, email: evt.target.value};
                                })
                            }} placeholder="example@mail.org"></input>
                        </div>
                        <div className="colalboration__form-input-wrapper">
                            <label htmlFor="subject">
                                Направление
                            </label>
                            <input id="subject" onChange={(evt) => {
                                setFormData((prevValue) => {
                                    return {...prevValue, subject: evt.target.value};
                                })
                            }} placeholder="например, керамика"></input>
                        </div>
                    </div>
                    
                    {/* <div className="collaboration__form-inputs">
                        <div className="colalboration__form-input-wrapper">
                            <SelectElement name="sell" label="Продавал ли ты свои товары ранее?" options={inquerySellSelect} updateApplication={setFormData} />
                            
                        </div>
                    </div> */}
                    <button className="collaboration__form-btn" disabled={formIsCompleted ? false : true}>
                        <span>Отправить заявку</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </form>
                {/* <div className="collaboration__wrapper">
                    <p>По кнопке ниже Вы можете ознакомиться со всеми условиями сотрудичества с нами, чтобы люди быстрее смогли приобрести Ваши товары</p>
                    <button>
                        <span>Ознакомиться с условиями</span>
                    </button>
                </div> */}
            </div>
        </section>
    )
}