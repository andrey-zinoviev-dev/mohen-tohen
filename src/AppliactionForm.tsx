import React from "react";
import { faArrowRight, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ApplicationForm.css"
import heading from "./assets/mh-1.png"
import Footer from "./Footer";
import SelectElement from "./SelectElement";
import { applicationCategoriesSelect, applicationCitySelect, applicationStockSelect } from "./utils";
import { ApplicationInterface } from "./interfaces";

export default function ApplicationForm() {
    const [startedApplication, setStartedApplication] = React.useState<boolean>(false);
    // const [openedSelect, setOpenedSelect] = React.useState<boolean>(false);
    const [applicationData, setApplicationData] = React.useState<ApplicationInterface>({
        name: "",
        email: "",
        phone: "",
        city: "",
        description: "",
        category: [],
        productionLength: "",
        productionProcess: "",
        stock: "",
    });

    //variables
    const date = new Date().toLocaleString();
    // console.log(date);

    React.useEffect(() => {
        console.log(applicationData);
    }, [applicationData])
    
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
                            <form onSubmit={(evt) => {
                                evt.preventDefault();
                            }} className="application__form">
                                <div className="application__form-div">
                                    <h3>
                                        <span>01</span>
                                        Персональные данные
                                    </h3>
                                    <div className="application__form-data-wrapper">
                                        <label>Твое ФИО</label>
                                        <input className="application__form-data-wrapper-input" onChange={(evt) => {
                                            setApplicationData((prevValue) => {
                                                return {...prevValue, name: evt.target.value};
                                            })
                                        }} placeholder="Солдатов Алексей Михайлович..." type="text"></input>
                                    </div>
                                    <div className="application__form-data-wrapper">
                                        <label>Твоя почта</label>
                                        <input className="application__form-data-wrapper-input" onChange={(evt) => {
                                            setApplicationData((prevValue) => {
                                                return {...prevValue, email: evt.target.value};
                                            })
                                        }} placeholder="email@operator.org" type="email"></input>
                                    </div>
                                    <div className="application__form-data-wrapper">
                                        <label>Твой телефон</label>
                                        <input className="application__form-data-wrapper-input" onChange={(evt) => {
                                            setApplicationData((prevValue) => {
                                                return {...prevValue, phone: evt.target.value};
                                            })
                                        }} placeholder="+790335153046" type="phone"></input>
                                    </div>
                                    <div className="application__form-data-wrapper application__form-data-wrapper_fit-content">
                                        <SelectElement label="Выбери город, в котором ты находишься" name="city" options={applicationCitySelect} updateApplication={setApplicationData}></SelectElement>
                                    </div>
                                </div>
                                <div className="application__form-div">
                                    <h3>
                                        <span>02</span>
                                        Что ты производите?
                                    </h3>
                                    <div className="application__form-data-wrapper">
                                        <label>Какие товары ты производишь?</label>
                                        <ul className="application__form-data-wrapper-categories">
                                            {applicationCategoriesSelect.map((option) => {
                                                return <li>
                                                    <button onClick={() => {
                                                        setApplicationData((prevValue) => {
                                                            return {...prevValue, category: prevValue.category.find((prevCategory) => {
                                                                return prevCategory === option.label; 
                                                            }) ? prevValue.category.filter((prevCategory) => {
                                                                return prevCategory !== option.label;
                                                            }) : [...prevValue.category, option.label]}
                                                        })
                                                    }} className={applicationData.category.find((category) => {
                                                        return category === option.label; 
                                                    }) ? "application__form-data-wrapper-categories-button_active application__form-data-wrapper-button" : "application__form-data-wrapper-button"}>{option.label}</button>
                                                </li>
                                            })}
                                        </ul>
                                    </div>                                    
                                    <div className="application__form-data-wrapper">
                                        <label htmlFor="description">Расскажи о своем творчестве</label>
                                        <textarea onChange={(evt) => {
                                            setApplicationData((prevValue) => {
                                                return {...prevValue, description: evt.target.value}
                                            })
                                        }} id="description" placeholder="Меня зовут Алексей Солдатов, я керамист-художник с 5-летним стажем..."></textarea>
                                    </div>
                                    <div className="application__form-data-wrapper">
                                        <label htmlFor="description">Опиши свою продукцию и процесс производства</label>
                                        <textarea onChange={(evt) => {
                                            setApplicationData((prevValue) => {
                                                return {...prevValue, productionProcess: evt.target.value}
                                            })
                                        }} id="description" placeholder="Я произвожу керамические вазы, посуду из кристаллической керамики и природных каменй и красителей..."></textarea>
                                    </div>
                                    <div className="application__form-data-wrapper application__form-data-wrapper_fit-content">
                                        {/* <SelectElement>

                                        </SelectElement> */}
                                        {/* <label>Сколько стоит твоя продукция?</label>
                                        <button onClick={() => {
                                            setOpenedSelect(!openedSelect);
                                        }}>Выбрать диапазон
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </button>
                                        <ul className={!openedSelect ? "application__form-data-wrapper-select" : "application__form-data-wrapper-select application__form-data-wrapper-select-active"}>
                                            <li>
                                                <input id="default" name="price" type="radio" />
                                                <label htmlFor="default">Не выбрано</label>
                                            </li>
                                            <li>
                                                <input id="1" name="price" type="radio" />
                                                <label htmlFor="1">От 1 до 3 тысяч</label>
                                            </li>
                                            <li>
                                                <input id="2" name="price" type="radio" />
                                                <label htmlFor="2">От 3 до 7 тысяч</label>
                                            </li>
                                            <li>
                                                <input id="3" name="price" type="radio" />
                                                <label htmlFor="3">От 7 до 10 тысяч</label>
                                            </li>
                                            <li>
                                                <input id="5" name="price" type="radio" />
                                                <label htmlFor="4">От 10 до 20 тысяч</label>
                                            </li>
                                            <li>
                                                <input id="6" name="price" type="radio" />
                                                <label htmlFor="6">От 20 до 50 тысяч</label>
                                            </li>
                                            <li>
                                                <input id="7" name="price" type="radio" />
                                                <label htmlFor="7">От 50 до 70 тысяч</label>
                                            </li>
                                            <li>
                                                <input id="8" name="price" type="radio" />
                                                <label htmlFor="8">От 70 до 100 тысяч</label>
                                            </li>
                                            <li>
                                                <input id="9" name="price" type="radio" />
                                                <label htmlFor="9">Больше 100 тысяч</label>
                                            </li>
                                        </ul> */}
                                        {/* <select>
                                            <option>От 1 до 3 тысяч</option>
                                            <option>От 3 до 7 тысяч</option>
                                            <option>От 7 до 10 тысяч</option>
                                            <option>От 10 до 20 тысяч</option>
                                            <option>От 20 до 50 тысяч</option>
                                            <option>От 50 до 70 тысяч</option>
                                            <option>От 70 до 100 тысяч</option>
                                            <option>Больше 100 тысяч</option>
                                        </select> */}
                                    </div>
                                    <div className="application__form-data-wrapper">
                                        <SelectElement name="stock" label="Какой тираж у твоей продукции?" updateApplication={setApplicationData} options={applicationStockSelect} />
                                        {/* <label>Какой тираж у твоей продукции?</label>
                                        <select>
                                            <option>От 1 до 10 штук</option>
                                            <option>От 10 до 20 штук</option>
                                            <option>Больше 20 штук</option>
                                        </select> */}
                                    </div>
                                    <div className="application__form-data-wrapper">
                                        <label>Какие габариты у твоей продукции?</label>
                                        <label>
                                            Продукция подлежит сборке (модульная)
                                            <input type="checkbox"></input>
                                        </label>
                                        <select>
                                            <option>Малогабаритная продукция</option>
                                            <option>Среднегабаритная продукция</option>
                                            <option>Крупногабаритная продукция</option>
                                        </select>
                                    </div>
                                    <div className="application__form-data-wrapper">
                                        <label>Сроки изготовления товаров</label>
                                        {/* <input></input> */}
                                        <select onChange={(evt) => {
                                            setApplicationData((prevValue) => {
                                                return {...prevValue, productionLength: evt.target.value};
                                            })
                                        }}>
                                            <option>Выбери минимальные сроки</option>
                                            <option>1 - 5 дней</option>
                                            <option>6-10 дней</option>
                                            <option>11-15 дней</option>
                                            <option>15 - 20 дней</option>
                                            <option>25 - 30 дней</option>
                                        </select>
                                    </div>
                                    <div className="application__form-data-wrapper">
                                        <div>
                                        <label>Ты планиурешь делатать кастомные заказы?</label>
                                        <label>
                                            <input type="radio" name="customorder"></input>
                                            Да
                                        </label>
                                        <label>
                                            <input type="radio" name="customorder"></input>
                                            Нет
                                        </label>
                                        </div>
                                        <div>
                                            <label>Опиши максимально все особенности товаров, которые сможешь произвести для индивидуальных заказов</label>
                                            <textarea name="" id="" placeholder="Для индивидуальных заказов я могу предожить кастомные габариты в зависимости от запроса, цвета, материалы и т.д"></textarea>
                                        </div>
                                    </div>
                                    
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
                            {/* <button>
                                Отправить анкету
                            </button> */}
                        </div>
                        <div className="application__wrapper-content">
                            <h3>Итоговая анкета</h3>
                            <div className="application__wrapper-content-grid">
                                <div className="application__wrapper-content-data-wrapper">
                                    <label>ФИО</label>
                                    <span>{applicationData.name.length > 0 ? applicationData.name : "Не заполнено"}</span>
                                </div>
                                <div className="application__wrapper-content-data-wrapper">
                                    <label>Почта</label>
                                    <span>{applicationData.email.length > 0 ? applicationData.email : "Не заполнено"}</span>
                                </div>
                                <div className="application__wrapper-content-data-wrapper">
                                    <label>Телефон</label>
                                    <span>{applicationData.phone.length > 0 ? applicationData.phone : "Не заполнено"}</span>
                                </div>
                                <div className="application__wrapper-content-data-wrapper">
                                    <label>Город</label>
                                    <span>{applicationData.city && applicationData.city.length > 0 ? applicationData.city : "Не заполнено"}</span>
                                </div>
                                <div className="application__wrapper-content-data-wrapper">
                                    <label>Категории товаров</label>
                                    <ul className="application__wrapper-content-data-wrapper-categories">
                                        {applicationData.category.length > 0 ? applicationData.category.map((category) => {
                                            return <li key={category}>
                                                {category}
                                            </li> 
                                        })  
                                        :
                                        <li key="no categories">
                                            Не выбрано
                                        </li>
                                        } 
                                    </ul>
                                    {/* <span>{applicationData.category.length > 0 ? applicationData.category : "Не заполнено"}</span> */}
                                </div>
                            </div>
                            <div className="application__wrapper-content-data-wrapper">
                                <label>Описание</label>
                                <p>{applicationData.description && applicationData.description.length > 0 ? applicationData.description : "Не заполнено"}</p>
                            </div>
                            <div className="application__wrapper-content-data-wrapper">
                                <label>Описание продукции</label>
                                <p>{applicationData.productionProcess && applicationData.productionProcess.length > 0 ? applicationData.productionProcess : "Не заполнено"}</p>
                            </div>
                            <div className="application__wrapper-content-data-wrapper">
                                <label>Тираж продукции</label>
                                <span>{applicationData.stock && applicationData.stock.length > 0 ? applicationData.stock : "Не заполнено" }</span>
                            </div>
                            <div className="application__wrapper-content-data-wrapper">
                                <label>Габариты продукции</label>
                                <span>{applicationData.size && applicationData.size.length > 0 ? applicationData.size : "Не заполнено"}</span>
                            </div>
                            <div className="application__wrapper-content-data-wrapper">
                                <label>Продукция сборная (модульная)</label>
                                <span>Да=Нет</span>
                            </div>
                            <div className="application__wrapper-content-data-wrapper">
                                <label>Средние сроки изготовления</label>
                                <span>{applicationData.productionLength && applicationData.productionLength.length > 0 ? applicationData.productionLength : "Не заполнено"}</span>
                            </div>
                            <div className="application__wrapper-content-data-wrapper">
                                <label>Дата заполнения</label>
                                <span>{date.split(", ")[0]}</span>
                            </div>
                        </div>
                    </>}
                </div>
                 
                

            </section>
            <Footer></Footer>
        </>

    )
}