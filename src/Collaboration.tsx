import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Collaboration.css"
// import SelectElement from "./SelectElement";
// import { inquerySellSelect } from "./utils";
import { CollaborationInterface } from "./interfaces";
import SuccessWrapper from "./SuccessWrapper";
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

    const [formSent, setFormSent] = React.useState<boolean>(false);

    //variables
    // const formValues = Object.values(formData);
    // // console.log(formValues);
    // const formIsCompleted = formValues.every((entry) => {
    //     return entry.value.length > 0;
    // });

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
                {!formSent ? <form className="collaboration__form" onSubmit={(evt) => {
                    evt.preventDefault();
                    console.log(formData);
                    fetch(`https://api.telegram.org/bot${import.meta.env.VITE_bot_token}/sendMessage`, {
                        method: "POST",
                        headers: {
                            "Content-Type":"application/json",
                        },
                        body: JSON.stringify({
                            // chat_id: 471930242,
                            "chat_id": 2104151994,
                            "text": `Новая заявка на сотрудничество!\nИмя- ${formData.name}\nТелефон- <a href="tel:${formData.phone}">${formData.phone}</a>\nПочта- ${formData.email}\nНаправление- ${formData.subject && formData.subject}
                            `,
                            "parse_mode" : "html",
                        })
                    })
                    .then(() => {
                        setFormSent(true);
                    })
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
                                    return {...prevValue, subject: prevValue.subject && evt.target.value}
                                })
                            }} placeholder="например, керамика"></input>
                        </div>
                    </div>
                    
                    {/* <div className="collaboration__form-inputs">
                        <div className="colalboration__form-input-wrapper">
                            <SelectElement name="sell" label="Продавал ли ты свои товары ранее?" options={inquerySellSelect} updateApplication={setFormData} />
                            
                        </div>
                    </div> */}
                    <button className="collaboration__form-btn">
                        <span>Отправить заявку</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </form>
                :
                <SuccessWrapper label="Заявка успешно отправлена!"></SuccessWrapper>}
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