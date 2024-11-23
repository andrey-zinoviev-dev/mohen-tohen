// import React from "react";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Collaboration.css"
import InputEl from "./InputEl";
import { useEffect, useState } from "react";
// import SelectElement from "./SelectElement";
// import { inquerySellSelect } from "./utils";
// import { CollaborationInterface } from "./interfaces";
// import SuccessWrapper from "./SuccessWrapper";
export default function Collaboration () {
    //state
    const [name, setName] = useState<{sellerName: string}>({
        sellerName: '',
    });
    const [nameProvided, setNameProvided] = useState<boolean>(false)
    // const [formData, setFormData] = React.useState<CollaborationInterface>(
    //     {
    //         name: "",
    //         email: "",
    //         subject: "",
    //         phone: "",
    //         // sell: "",
    //     }
    // );

    // const [formSent, setFormSent] = React.useState<boolean>(false);

    //variables
    // const formValues = Object.values(formData);
    // // console.log(formValues);
    // const formIsCompleted = formValues.every((entry) => {
    //     return entry.value.length > 0;
    // });

    // console.log(formIsCompleted);

    useEffect(() => {
        name.sellerName.length === 0 && setNameProvided(false);
    }, [name.sellerName])

    return (
        <section className="collaboration">
            <h2>Вы дизайнер? Давайте сотрудничать!</h2>
                {/* <button>

                </button> */}
                {/* <a target="_blank" href="https://mohen-tohen.ru/application">
                    Заполнить анкету сотрудничества
                    <FontAwesomeIcon icon={faArrowRight} />
                </a> */}
            <div className="collaboration__text-wrapper">
                <div className="collboration__input-wrapper">
                    <InputEl name="sellerName" placeHolder="Ваше имя" updateState={setName}></InputEl>
                    {name.sellerName.length > 0 && <button onClick={() => {
                        setNameProvided(true);
                    }}>
                        <FontAwesomeIcon icon={!nameProvided ? faArrowRight : faCheck} />
                    </button>}
                    
                </div>
                {nameProvided && <a className="collaboration__link" target="_blank" href={`https://mohen-tohen.ru/application?name=${name.sellerName}`}>
                    Заполнить анкету сотрудничества
                    <FontAwesomeIcon icon={faArrowRight} />
                </a>}
            </div>

            {/* <ul>
                <h4>Что мы прделагаем взамен</h4>
                {[
                    "Мы предлагаем постоянную витрину для твоих работ и широкую аудиторию покупателей",
                    "Доставку и страховане груза осуществляется нашим партнером СДЭК, поэтому можно спокойно заниматься творчеством",
                    "Твои произведения будут доставляться в фирменной упаковке, а также сопровождаться сертификатом подлинности, что добавляет профессионализма и доверия",
                    "Поддержка молодых авторов: наша цель — развивать российское искусство и помогать талантливым художникам"
                ].map((advantage) => {
                    return <li key={advantage}>
                        <span>{advantage}</span>
                    </li>
                })}
            </ul> */}
            {/* <div className="collaboration__wrapper">
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
                    
                    
                    <button className="collaboration__form-btn">
                        <span>Отправить заявку</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </form>
                :
                <SuccessWrapper label="Заявка успешно отправлена!"></SuccessWrapper>}
               
            </div> */}
        </section>
    )
}