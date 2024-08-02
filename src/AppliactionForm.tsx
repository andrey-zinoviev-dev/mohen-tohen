import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ApplicationForm.css"
import heading from "./assets/mh-1.png"
import Footer from "./Footer";
import SelectElement from "./SelectElement";
import { applicationCategoriesSelect, applicationCitySelect, applicationSizeSelect, applicationStockSelect, applicationProdTimeSelect } from "./utils";
import { ApplicationInterface } from "./interfaces";
import CheckboxElement from "./CheckboxElement";
import ApplicationOverview from "./ApplicationOverview";
import ApplicationFiles from "./ApplicationFiles";
// import ApplicationPhotoPopup from "./ApplicationPhotoPopup";

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
        offerAgreement: false,
        personalDataAgreement: false,
        shippingPartnerAgreement: false,
    });


    //variables
    // const readyToSubmit = 

    //functions
    // function updateCity<T>(arg: T):T {
    //     return arg;
    //     // console.log(city);
    // }

    // React.useEffect(() => {
    //     console.log(applicationData);
    // }, [applicationData])
    
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
                                        <SelectElement label="Выбери город, в котором ты находишься" options={applicationCitySelect} updateApplication={(city:string) => {
                                            setApplicationData((prevValue) => {
                                                return {...prevValue, city: city}
                                            })
                                        }}></SelectElement>
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
                                    <div className="application__form-data-wrapper">
                                        <label>Сколько стоит твоя продукция?</label>
                                        <div className="application__form-data-wrapper-price">
                                            <label>
                                                от
                                                <input className="application__form-data-wrapper-input" type="number" min={1000} placeholder="1000"></input>
                                            </label>
                                            <label>
                                                до
                                                <input className="application__form-data-wrapper-input" type="number" max={100000} placeholder="100 000"></input>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="application__form-data-wrapper application__form-data-wrapper_fit-content">
                                        <SelectElement label="Какой тираж у твоей продукции?" updateApplication={(stock) => {
                                            setApplicationData((prevValue) => {
                                                return {...prevValue, stock: stock};
                                            })
                                        }} options={applicationStockSelect} />
                                    </div>
                                    <div className="application__form-data-wrapper application__form-data-wrapper_fit-content">
                                        <SelectElement label="Какие габариты у твоей продукции?" options={applicationSizeSelect} updateApplication={(size) => {
                                            setApplicationData((prevValue) => {
                                                return {...prevValue, size: size}
                                            })
                                        }}></SelectElement>
                                    </div>
                                    <div className="application__form-data-wrapper application__form-data-wrapper_fit-content">
                                        <SelectElement label="Сколько по времени ты производишь продукцию?" options={applicationProdTimeSelect} updateApplication={(time) => {
                                            setApplicationData((prevValue) => {
                                                return {...prevValue, productionLength: time};
                                            })
                                        }}>
                                        </SelectElement>
                                    </div>
                                </div>
                                <div className="application__form-div">
                                    <ApplicationFiles></ApplicationFiles>
                                    {/* <h3>
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
                                    </ul> */}
                                </div>
                                <div className="application__form-div">
                                    {/* <h3>Информация для справки</h3> */}
                                    <h3>
                                        <span>04</span>Необоходимые соглашения
                                    </h3>
                                    <ul className="application__form-div-agreements">
                                        <li>
                                            <a href="#">Публичная офферта Mohen - Tohen</a>
                                            <CheckboxElement label="Прочитал и соглашаюсь" checked={applicationData.offerAgreement} updateState={() => {
                                                setApplicationData((prevValue) => {
                                                    return {...prevValue, offerAgreement: !prevValue.offerAgreement}
                                                })
                                            }}></CheckboxElement>
                                            {/* <label>
                                                <input type="checkbox" onChange={() => {
                                                    setApplicationData((prevValue) => {
                                                        return {...prevValue, offerAgreement: !prevValue.offerAgreement}
                                                    })
                                                }} />
                                                <span>Прочитал и соглашаюсь</span>
                                            </label> */}
                                        </li>
                                        <li>
                                            <a href="#">Политика обработки персональных данных</a>
                                            <CheckboxElement label="Прочитал и соглашаюсь" checked={applicationData.personalDataAgreement} updateState={() => {
                                                setApplicationData((prevValue) => {
                                                    return {...prevValue, personalDataAgreement: !prevValue.personalDataAgreement}
                                                })
                                            }}></CheckboxElement>
                                            {/* <label>
                                                <input onChange={(() => {
                                                    setApplicationData((prevValue) => {
                                                        return {...prevValue, personalDataAgreement: !prevValue.personalDataAgreement}
                                                    })
                                                })} type="checkbox" />
                                                <span>Прочитал и соглашаюсь</span>
                                            </label> */}
                                        </li>
                                        <li>
                                            <span>Доставкой, транспортировкой и логистикой занимается третья сторона-партнер СДЭК</span>
                                            <CheckboxElement label="Прочитал и соглашаюсь" checked={applicationData.shippingPartnerAgreement} updateState={() => {
                                                setApplicationData((prevValue) => {
                                                    return {...prevValue, shippingPartnerAgreement: !prevValue.shippingPartnerAgreement}
                                                })
                                            }}></CheckboxElement>
                                            {/* <label>
                                                <input type="checkbox" onChange={() => {
                                                    setApplicationData((prevValue) => {
                                                        return {...prevValue, shippingPartnerAgreement: !prevValue.shippingPartnerAgreement}
                                                    })
                                                }} />
                                                <span>Прочитал и соглашаюсь</span>
                                            </label> */}
                                        </li>
                                    </ul>
                                </div>
                            </form>
                            {/* <button>
                                Отправить анкету
                            </button> */}
                        </div>
                        <div className="application__wrapper-content">
                            <ApplicationOverview applicationData={applicationData}></ApplicationOverview>
                            {/* <h3>Итоговая анкета</h3>
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
                            {applicationData.offerAgreement && applicationData.personalDataAgreement && applicationData.shippingPartnerAgreement && <>
                                {!readyToSubmit ? <button onClick={() => {
                                    setReadyToSubmit(true);
                                }}>
                                    Анкета запонена верно
                                    <FontAwesomeIcon icon={faCheck} />
                                </button> 
                                : 
                                <button>Отправить анкету
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>}
                            </>} */}

                        </div>
                    </>}
                </div>
            </section>
            {/* <ApplicationPhotoPopup url=""></ApplicationPhotoPopup> */}
            <Footer></Footer>
        </>

    )
}