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
                 
                <div className="application__wrapper_welcome">
                    {!startedApplication ?
                    <>
                        <img src="https://i.pinimg.com/564x/27/48/e1/2748e1f1db7df1111d8c96ad2890179b.jpg"></img>
                        <div className="application__wrapper_welcome-text">
                            <h3>Добро пожаловать, Сергей!</h3>
                            <p>Мы рады приветствовать вас на нашей торговой площадке, где продаются особенные вещи сделанные с любовью. Здесь каждый товай - это предмет искусства!</p>
                            <div>
                                <p>Регистрация на платформе состоит из 4 основных этапов:</p>
                                <ul className="application__wrapper-progress">
                                    <li className="application__wrapper-progress-step">
                                        <span className="application__wrapper-progress-step-index">01</span>
                                        <span>Этап 1</span>
                                    </li>
                                    <li className="application__wrapper-progress-step">
                                        <span className="application__wrapper-progress-step-index">02</span>
                                        <span>Этап 2</span>
                                    </li>
                                    <li className="application__wrapper-progress-step">
                                        <span className="application__wrapper-progress-step-index">03</span>
                                        <span>Этап 3</span>
                                    </li>
                                    <li className="application__wrapper-progress-step">
                                        <span className="application__wrapper-progress-step-index">04</span>
                                        <span>Этап 4</span>
                                    </li>
                                </ul>
                            </div>
                            <p>После прохождения этих этапов анкеты вы станете частью платформы Mohen - Tohen и сможете сконцентрироваться только на творчестве и производвстве!</p>
                            <button onClick={() => {
                                setStartedApplication(true);
                            }}>Заполнить анкету
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </>
                    :
                    <>
                        <div className="application__form-wrapper">
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
                                    <div className="application__form-data-wrapper">
                                        <label htmlFor="description">Опишите себя</label>
                                        <textarea id="description" placeholder="Меня зовут Алексей Солдатов, я керамист-художник с 5-летним стажем..."></textarea>
                                    </div>
                                    <div className="application__form-data-wrapper">
                                        <label htmlFor="description">Опишите свою продукцию и процесс производства</label>
                                        <textarea id="description" placeholder="Я произвожу керамические вазы, посуду из кристаллической керамики и природных каменй и красителей..."></textarea>
                                    </div>
                                    <div className="application__form-data-wrapper">
                                        <label>Сроки производства товаров</label>
                                        {/* <input></input> */}
                                        <select>
                                            <option>Выберите минимальные сроки</option>
                                            <select>1 - 5 дней</select>
                                            <select>6-10 дней</select>
                                            <select>11-15 дней</select>
                                            <select>15 - 20 дней</select>
                                            <select>25 - 30 дней</select>
                                        </select>
                                    </div>
                                        {/* <textarea></textarea> */}
                                </div>
                                <div className="application__form-div">
                                    <h3>
                                        <span>03</span>Фото товара
                                    </h3>
                                    <ul className="application__form-div-photos">
                                        <li>
                                            <button>
                                                <FontAwesomeIcon icon={faPlusCircle} />
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <FontAwesomeIcon icon={faPlusCircle} />
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <FontAwesomeIcon icon={faPlusCircle} />
                                            </button>
                                        </li>
                                        <li>
                                            <button id="add_photo">
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
                        </div>
                        <div className="application__wrapper-content">
                            <h3>Вот тут финальный документ</h3>
                        </div>
                    </>}
                </div>
                 
                

            </section>
            <Footer></Footer>
        </>

    )
}