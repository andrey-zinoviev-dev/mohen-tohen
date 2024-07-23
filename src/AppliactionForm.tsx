import React from "react";
import { faArrowRight, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ApplicationForm.css"
import heading from "./assets/mh-1.png"
import Footer from "./Footer";

export default function ApplicationForm() {
    const [startedApplication, setStartedApplication] = React.useState<boolean>(false);
    return (
        <>
            <section className="application">
                <img className="application__heading" src={heading}></img>
                {/* <div className="application__buttons">
                    <button>Ваши данные</button>
                    <button>Ваши товары</button>
                    <button>информация</button>
                </div> */}
                {!startedApplication ? 
                <div>
                    <img src="https://i.pinimg.com/564x/27/48/e1/2748e1f1db7df1111d8c96ad2890179b.jpg"></img>
                    <div>
                        <h3>Добро пожаловать, Сергей!</h3>
                        <p>Мы рады приветствовать вас на нашей торговой площадке ,где продаются особенные вещи сделанные с любовью.Здесь каждый товай - это предмет искусства!</p>
                        <button onClick={() => {
                            setStartedApplication(true);
                        }}>Начнем с заполнения анкеты
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
                    :
                <>
                    <h3>Анкета сотрудничества</h3>
                    <form className="application__form">
                        <div className="application__form-div">
                            <h3>
                                <span>01</span>
                                Персональные данные
                            </h3>
                            <input placeholder="Ваше имя..." type="text"></input>
                            <input placeholder="Ваша фамилия..." type="text"></input>
                            <input placeholder="Ваша почта..." type="email"></input>
                            <input placeholder="Ваш телефон" type="phone"></input>
                            <select>
                                <option value="default" selected>Ваш город</option>
                                <option value="Москва">Москва</option>
                                <option value="Московская область">Московская область</option>
                                <option value="Санкт-Петербург">Санкт-Петербург</option>
                            </select>
                        </div>
                        <div className="application__form-div">
                            <h3>
                                <span>02</span>
                                Что вы производите?
                            </h3>
                            <select>
                                <option value="default" selected>Категория товара</option>
                                <option value="Свет">Свет</option>
                                <option value="Декор">Декор</option>
                                <option value="Текстиль">Текстиль</option>
                                <option value="Мебель">Мебель</option>
                                <option value="Сервировка">Сервировка</option>
                                <option value="Атмосфера">Атмосфера</option>
                                <option value="Подарки">Подарки</option>
                                <option value="Идеи">Идеи</option>
                                <option value="Услуги">Услуги</option>
                            </select>
                                {/* <input placeholder="Название"></input> */}
                                <textarea placeholder="Описание продукции...."></textarea>
                                <textarea></textarea>
                        </div>
                        <div className="application__form-div">
                            <h3>
                                <span>03</span>Фото товара
                            </h3>
                            <ul>
                                <li key="empty-photos">
                                    <button>
                                        <FontAwesomeIcon icon={faPlusCircle} />
                                    </button>
                                </li>
                            </ul>
                        </div>
                        {/* <div className="application__form-flex">
                            
                        </div> */}
                    </form>
                    <div>
                        <h3>Информация для справки</h3>
                        <ul>
                            <li>Пункт номер 1</li>
                            <li>Пункт номер 2</li>
                            <li>Пункт номер 3</li>
                        </ul>
                        <div>
                            <button>Условия сотрудичества</button>
                            <button>Договор сотрудничества</button>
                        </div>
                    </div>
                    <button>
                        Отправить анкету
                    </button>
                </>
                }
                

            </section>
            <Footer></Footer>
        </>

    )
}