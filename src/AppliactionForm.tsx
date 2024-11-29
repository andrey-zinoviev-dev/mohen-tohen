import React from "react";
import { createPortal } from "react-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ApplicationForm.css"
// import heading from "./assets/mh-1.png"
// import Footer from "./Footer";
import SelectElement from "./SelectElement";
import { applicationSizeSelect, applicationStockSelect, applicationProdTimeSelect, categories } from "./utils";
import { ApplicationNotUploadedIterface } from "./interfaces";
import CheckboxElement from "./CheckboxElement";
// import ApplicationOverview from "./ApplicationOverview";
import ListGrid from "./ListGrid";
// import { useSendApplicationMutation } from "./features/apiSlice";
import InputEl from "./InputEl";
import Wizard from "./Wizard";
import ApplicationStep from "./ApplicationStep";
import { useSendApplicationMutation } from "./features/apiSlice";
import PortalMultimedia from "./PortalMultimedia";
import PortalContainer from "./PortalContainer";
import UploadComp from "./UploadComp";
import { useSearchParams } from "react-router-dom";
// import ApplicationFiles from "./ApplicationFiles";
// import ApplicationPhotoPopup from "./ApplicationPhotoPopup";

export default function ApplicationForm() {
    const [startedApplication, setStartedApplication] = React.useState<boolean>(false);
    // const [openedSelect, setOpenedSelect] = React.useState<boolean>(false);
    const [applicationData, setApplicationData] = React.useState<ApplicationNotUploadedIterface>({
        approved: "idle",
        name: "",
        email: "",
        phone: "",
        city: "",
        brandName: "",
        description: "",
        category: [],
        productionLength: "",
        productionProcess: "",
        stock: "",
        size: "",
        minPrice: "",
        maxPrice: "",
        offerAgreement: false,
        personalDataAgreement: false,
        shippingPartnerAgreement: false,
        dateOfFill: "",
        photos: [],
    });
    const [uploadStarted, setUploadStarted] = React.useState<boolean>(false);


    //RTK
    const [sendApplication] = useSendApplicationMutation();

    //refs
    const fileInputRef = React.useRef<HTMLInputElement | null>(null);

    //search params
    const [searchParams] = useSearchParams();
    const userName = searchParams.get("name");

    //functions
    function openInput() {
        fileInputRef.current && fileInputRef.current.click();
    }
    
    function processFileAdd(evt:React.ChangeEvent<HTMLInputElement>) {
        const fileuploaded = evt.target.files && {title: evt.target.files[0].name, file: evt.target.files[0]};
        
        fileuploaded && setApplicationData((prevValue) => {
            const photoInState = prevValue.photos.find((photo) => {
                return photo.title === fileuploaded.title;
            });

            return {...prevValue, photos: photoInState ? prevValue.photos.filter((photo) => {
                return photo.title !==  fileuploaded.title;
            }) : [...prevValue.photos, fileuploaded]};

            // return {...prevValue, photos: photoInState ? prevValue.photos.filter((photo) => {
            //     return photo.title !== fileuploaded.name;
            // }) : [...prevValue.photos, fileuploaded]}
        })
    }
    
    function removePhoto(file:File) {
        setApplicationData((prevValue) => {
          return {
            ...prevValue, photos: prevValue.photos.filter((photo) => {
              return photo.title !== file.name;
            })
          }
          // return {...prevValue, photos: prevValue.photos.filter((photo) => {
          //   return photo.name !== file.name;
          // })}
        });
    }

    function startDataSubmit(){
        setUploadStarted(true);
    }

    function submitData(){
        return sendApplication(applicationData).unwrap()
        .then((data) => {
                fetch(`https://api.telegram.org/bot${import.meta.env.VITE_TG_BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                                // chat_id: 471930242,
                    "chat_id": 2104151994,
                    "text": `Новая заявка на сотрудничество!\nИмя: ${applicationData.name}.\nТелефон- ${applicationData.phone}\nНаправления- ${applicationData.category.map((category) => {
                        return ` ${category}`
                    }).join(",")}`,
                    "parse_mode" : "markdown",
                    "reply_markup" : {
                        "inline_keyboard" : [
                            [
                                {
                                    "text" : "Open link",
                                    "url" : `https://mohen-tohen.ru/showApplication/${data._id}`
                                }
                            ]
                        ]
                    }
                })
            })
        })
    }
    
    return (
        <>
            <section className="application">
                {/* <img className="application__heading" src={heading}></img> */}
                <div className="application__wrapper_welcome">
                    {!startedApplication ?
                    <div className="application__first-stage">
                        <img src="https://i.pinimg.com/564x/44/5b/35/445b352a5eaa916a06a5c6c373ead350.jpg"></img>
                        <div className="application__wrapper_welcome-text">
                            <h3>Добро пожаловать, {userName}!</h3>
                            <p>Мы рады приветствовать вас на нашей торговой площадке, где продаются особенные вещи сделанные с любовью.</p>
                            <p>Здесь каждый товар - это предмет искусства! Также мы- это целая готовая плафторма, работа с нами дает следующие преимущества:</p>
                            <ul className="application__first-stage-ul">
                                <li>Огромная аудитория покупателей</li>
                                <li>Снижение затрат на рекламу. Тебе не нужно тратить деньги на продвижение товаров, так как маркетплейс делает это за тебя</li>
                                <li>Низкий порог входа. Начать продавать на маркетплейсе можно с минимальными вложениями, что подходит для начинающих продавцов</li>
                                <li>Удобный личный кабинет. В личном кабинете продавцы могут управлять своими товарами, добавлять новые и отслеживать статистику продаж</li>
                                <li>Возможность поделиться своими работами в один клик</li>
                                {/* <li>Готовая платформа для начала торговли и общения с покупателями</li> */}
                            </ul>
                            {/* <p>Мы рады пригласить тебя к сотрудничеству с нашим инновационным маркетплейсом предметного дизайна, который создан специально для того, чтобы облегчить тебе путь от творчества до продажи твоих уникальных произведений. */}
                            {/* </p> */}
                            {/* <div>
                                <p>Регистрация на платформе состоит из 4 основных этапов:</p>
                                <ul className="application__wrapper-progress">
                                    <li className="application__wrapper-progress-step">
                                        <span className="application__wrapper-progress-step-index">01</span>
                                        <span>Отправка анкеты</span>
                                    </li>
                                    <li className="application__wrapper-progress-step">
                                        <span className="application__wrapper-progress-step-index">02</span>
                                        <span>Контакт с представителем Mohen-Tohen</span>
                                    </li>
                                    <li className="application__wrapper-progress-step">
                                        <span className="application__wrapper-progress-step-index">03</span>
                                        <span>Создание твоего личного кабинета</span>
                                    </li>
                                    
                                </ul>
                            </div>
                            <p>После прохождения этих этапов анкеты вы станете частью платформы Mohen - Tohen и сможете сконцентрироваться только на творчестве и производвстве!</p> */}
                            <button onClick={() => {
                                setStartedApplication(true);
                            }}>Заполнить анкету
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </div>
                    :
                    <>
                        <div className="application__form-wrapper">
                            <Wizard submitForm={startDataSubmit}>
                                <ApplicationStep stepTitle="Персональные данные">
                                    <div className="application__form-data-wrapper">
                                        <label>Твое ФИО</label>
                                        <InputEl name="name" value={applicationData.name} placeHolder="Солдатов Алексей Михайлович..." updateState={setApplicationData}></InputEl>
                                        
                                    </div>
                                    <div className="application__form-data-wrapper">
                                        <label>Твоя почта</label>
                                        <InputEl name="email" value={applicationData.email} placeHolder="email@operator.org" updateState={setApplicationData} />
                                        
                                    </div>
                                    <div className="application__form-data-wrapper">
                                        <label>Твой телефон</label>
                                        <InputEl name="phone" value={applicationData.phone} placeHolder="+790335153046" updateState={setApplicationData} />
                                    </div>
                                    <div className="application__form-data-wrapper application__form-data-wrapper_fit-content">
                                        <label>В каком городе ты находишься</label>
                                        <InputEl name="city" value={applicationData.city} placeHolder="Москва" updateState={setApplicationData}></InputEl>
                                        {/* <SelectElement label="Выбери город, в котором ты находишься" options={applicationCitySelect} updateApplication={(city:string) => {
                                            setApplicationData((prevValue) => {
                                                return {...prevValue, city: city};
                                            })
                                        }}></SelectElement> */}
                                    </div>
                                </ApplicationStep>
                                <ApplicationStep stepTitle="Что ты производишь">
                                    <div className="application__form-data-wrapper">
                                        <label>Какие товары ты производишь?</label>
                                        <ul className="application__form-data-wrapper-categories">
                                            {categories.map((option) => {
                                                return <li>
                                                    <button onClick={() => {
                                                        setApplicationData((prevValue) => {
                                                            return {...prevValue, category: prevValue.category.find((prevCategory) => {
                                                                return prevCategory === option.title; 
                                                            }) ? prevValue.category.filter((prevCategory) => {
                                                                return prevCategory !== option.title;
                                                            }) : [...prevValue.category, option.title]}
                                                        })
                                                    }} className={applicationData.category.find((category) => {
                                                        return category === option.title; 
                                                    }) ? "application__form-data-wrapper-categories-button_active application__form-data-wrapper-button" : "application__form-data-wrapper-button"}>{option.title}</button>
                                                </li>
                                            })}
                                        </ul>
                                    </div>                                    
                                    <div className="application__form-data-wrapper">
                                        <label>Сколько стоит твоя продукция?</label>
                                        <div className="application__form-data-wrapper-price">
                                            <label>
                                                от
                                                <input value={applicationData.minPrice} className="application__form-data-wrapper-input" onChange={(evt) => {
                                                    setApplicationData((prevValue) => {
                                                        return {...prevValue, minPrice: evt.target.value}
                                                    })
                                                }} type="number" min={1000} placeholder="1000"></input>
                                            </label>
                                            <label>
                                                до
                                                <input value={applicationData.maxPrice} className="application__form-data-wrapper-input" onChange={(evt) => {
                                                    setApplicationData((prevValue) => {
                                                        return {...prevValue, maxPrice: evt.target.value}
                                                    })
                                                }} type="number" max={100000} placeholder="100 000"></input>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="application__form-data-wrapper application__form-data-wrapper_fit-content">
                                        <SelectElement selectedOption={applicationData.stock} label="Какой тираж у твоей продукции?" updateApplication={(stock) => {
                                            setApplicationData((prevValue) => {
                                                return {...prevValue, stock: stock};
                                            })
                                        }} options={applicationStockSelect} />
                                    </div>
                                    <div className="application__form-data-wrapper application__form-data-wrapper_fit-content">
                                        <SelectElement selectedOption={applicationData.size} label="Какие габариты у твоей продукции?" options={applicationSizeSelect} updateApplication={(size) => {
                                            setApplicationData((prevValue) => {
                                                return {...prevValue, size: size};
                                            })
                                        }}></SelectElement>
                                    </div>
                                    <div className="application__form-data-wrapper application__form-data-wrapper_fit-content">
                                        <SelectElement selectedOption={applicationData.productionLength} label="Сколько по времени ты производишь продукцию?" options={applicationProdTimeSelect} updateApplication={(time) => {
                                            setApplicationData((prevValue) => {
                                                return {...prevValue, productionLength: time};
                                            })
                                        }}>
                                        </SelectElement>
                                    </div>
                                    <div className="application__form-data-wrapper">
                                        <label htmlFor="brandName">Как называется твой бренд</label>
                                        <InputEl value={applicationData.brandName} name="brandName" placeHolder="My brand" updateState={setApplicationData} />
                                    </div>
                                    <div className="application__form-data-wrapper">
                                        <label htmlFor="description">Расскажи о своем творчестве</label>
                                        <textarea value={applicationData.description} className="application__form-textarea" onChange={(evt) => {
                                            setApplicationData((prevValue) => {
                                                
                                                return {...prevValue, description: evt.target.value};
                                            })
                                        }} id="description" placeholder="Меня зовут Алексей Солдатов, я керамист-художник с 5-летним стажем..."></textarea>
                                    </div>
                                    <div className="application__form-data-wrapper">
                                        <label htmlFor="description">Опиши свою продукцию и процесс производства</label>
                                        <textarea value={applicationData.productionProcess} className="application__form-textarea" onChange={(evt) => {
                                            setApplicationData((prevValue) => {
                                                return {...prevValue, productionProcess: evt.target.value}
                                            })
                                        }} id="description" placeholder="Я произвожу керамические вазы, посуду из кристаллической керамики и природных каменй и красителей..."></textarea>
                                    </div>
                                </ApplicationStep>
                                <ApplicationStep stepTitle="Фото товара">
                                    <ListGrid gridElements={applicationData.photos} openInput={openInput} removePhoto={removePhoto} />
                                    <input type="file" accept=".png, .jpg" ref={fileInputRef} onChange={(evt) => {
                                        processFileAdd(evt)
                                    }} style={{display: "none"}}></input>
                                </ApplicationStep>
                                <ApplicationStep stepTitle="Необоходимые соглашения">
                                    {/* <h3></h3> */}
                                    <ul className="application__form-div-agreements">
                                        <li>
                                            <a href="#">Публичная офферта Mohen - Tohen</a>
                                            <CheckboxElement label="Прочитал и соглашаюсь" checked={applicationData.offerAgreement} updateState={() => {
                                                setApplicationData((prevValue) => {
                                                    return {...prevValue, offerAgreement: !prevValue.offerAgreement};
                                                })
                                            }}></CheckboxElement> 
                                        </li>
                                        <li>
                                            <a href="#">Политика обработки персональных данных</a>
                                            <CheckboxElement label="Прочитал и соглашаюсь" checked={applicationData.personalDataAgreement} updateState={() => {
                                                setApplicationData((prevValue) => {
                                                    return {...prevValue, personalDataAgreement: !prevValue.personalDataAgreement};
                                                })
                                            }}></CheckboxElement>
                                        </li>
                                        <li>
                                            <span>Доставкой, транспортировкой и логистикой занимается третья сторона-партнер СДЭК</span>
                                            <CheckboxElement label="Прочитал и соглашаюсь" checked={applicationData.shippingPartnerAgreement} updateState={() => {
                                                setApplicationData((prevValue) => {
                                                    return {...prevValue, shippingPartnerAgreement: !prevValue.shippingPartnerAgreement}
                                                })
                                            }}></CheckboxElement>
                                        </li>
                                    </ul>
                                </ApplicationStep>
                                {/* <p>Шаг 1</p> */}
                            </Wizard>
                            {/* <h3>Анкета сотрудничества</h3> */}
                            {/* <form onSubmit={(evt) => {
                                evt.preventDefault();
                            }} className="application__form">
                                <div className="application__form-div">
                                    <h3>
                                        <span>01</span>
                                        Персональные данные
                                    </h3>
                                    <div className="application__form-data-wrapper">
                                        <label>Твое ФИО</label>
                                        <InputEl name="name" placeHolder="Солдатов Алексей Михайлович..." updateState={setApplicationData}></InputEl>
                                        
                                    </div>
                                    <div className="application__form-data-wrapper">
                                        <label>Твоя почта</label>
                                        <InputEl name="email" placeHolder="email@operator.org" updateState={setApplicationData} />
                                        
                                    </div>
                                    <div className="application__form-data-wrapper">
                                        <label>Твой телефон</label>
                                        <InputEl name="phone" placeHolder="+790335153046" updateState={setApplicationData} />
                                    </div>
                                    <div className="application__form-data-wrapper application__form-data-wrapper_fit-content">
                                        <SelectElement label="Выбери город, в котором ты находишься" options={applicationCitySelect} updateApplication={(city:string) => {
                                            
                                            setApplicationData((prevValue) => {
                                                return {...prevValue, city: city};
                                            })
                                        }}></SelectElement>
                                    </div>
                                </div>
                                <div className="application__form-div">
                                    <h3>
                                        <span>02</span>
                                        Что ты производишь?
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
                                                return {...prevValue, size: size};
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
                                    <div className="application__form-data-wrapper">
                                        <label htmlFor="brandName">Как называется твой бренд</label>
                                        <InputEl name="brandName" placeHolder="My brand" updateState={setApplicationData} />
                                    </div>
                                    <div className="application__form-data-wrapper">
                                        <label htmlFor="description">Расскажи о своем творчестве</label>
                                        <textarea onChange={(evt) => {
                                            setApplicationData((prevValue) => {
                                                
                                                return {...prevValue, description: evt.target.value};
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
                                </div>
                                <div className="application__form-div">
                                    <h3>
                                        <span>03</span>Фото товара
                                    </h3>
                                    <ListGrid gridElements={applicationData.photos} openInput={openInput} removePhoto={removePhoto} />
                                    <input type="file" accept=".png, .jpg" ref={fileInputRef} onChange={(evt) => {
                                        processFileAdd(evt)
                                    }} style={{display: "none"}}></input>
                                </div>
                                <div className="application__form-div">
                                    <h3>
                                        <span>04</span>Необоходимые соглашения
                                    </h3>
                                    <ul className="application__form-div-agreements">
                                        <li>
                                            <a href="#">Публичная офферта Mohen - Tohen</a>
                                            <CheckboxElement label="Прочитал и соглашаюсь" checked={applicationData.offerAgreement} updateState={() => {
                                                setApplicationData((prevValue) => {
                                                    return {...prevValue, offerAgreement: !prevValue.offerAgreement};
                                                })
                                            }}></CheckboxElement>
                                            
                                        </li>
                                        <li>
                                            <a href="#">Политика обработки персональных данных</a>
                                            <CheckboxElement label="Прочитал и соглашаюсь" checked={applicationData.personalDataAgreement} updateState={() => {
                                                setApplicationData((prevValue) => {
                                                    return {...prevValue, personalDataAgreement: !prevValue.personalDataAgreement};
                                                })
                                            }}></CheckboxElement>
                                        </li>
                                        <li>
                                            <span>Доставкой, транспортировкой и логистикой занимается третья сторона-партнер СДЭК</span>
                                            <CheckboxElement label="Прочитал и соглашаюсь" checked={applicationData.shippingPartnerAgreement} updateState={() => {
                                                setApplicationData((prevValue) => {
                                                    return {...prevValue, shippingPartnerAgreement: !prevValue.shippingPartnerAgreement}
                                                })
                                            }}></CheckboxElement>
                                        </li>
                                    </ul>
                                </div>
                            </form> */}
                        </div>
                    </>}
                </div>
            </section>
            {uploadStarted && createPortal(<PortalMultimedia>
                <PortalContainer>
                    <UploadComp submitData={submitData} application={true} photos={applicationData.photos.map((photo) => {
                        return photo.file;
                    })}></UploadComp>
                </PortalContainer>
            </PortalMultimedia>, document.body)}
        </>
    )
}