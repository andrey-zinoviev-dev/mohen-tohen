import React from "react";
import Footer from "./Footer";
import logo from "./assets/mh-1.png";
import "./ApplicationRender.css";
import { getApplication } from "./api";
import { useParams } from "react-router-dom";
import { ApplicationInterface } from "./interfaces";

export default function ApplicationRender() {
    //state
    const [loadedApplication, setLoadedApplication] = React.useState<ApplicationInterface | null>(null);

    const { applicationID } = useParams();

    React.useEffect(() => {
        applicationID && getApplication(applicationID)
        .then((data) => {
            setLoadedApplication(data);
        })
    } ,[]);

    React.useEffect(() => {
        console.log(loadedApplication);
    }, [loadedApplication])

    return (
        <>
            <section className="application-show">
                <img className="application-show__logo" src={logo}></img>
                <h3>Анкета</h3>
                {/* <div className="application__wrapper-content-grid">
                    <div className="application__wrapper-content-data-wrapper">
                        <label>ФИО</label>
                        <span>{loadedApplication && loadedApplication.name.length > 0 ? loadedApplication.name : "Не заполнено"}</span>
                    </div>
                    <div className="application__wrapper-content-data-wrapper">
                        <label>Почта</label>
                        <span>{loadedApplication && loadedApplication.email.length > 0 ? loadedApplication.email : "Не заполнено"}</span>
                    </div>
                    <div className="application__wrapper-content-data-wrapper">
                        <label>Телефон</label>
                        <span>{loadedApplication && loadedApplication.phone.length > 0 ? loadedApplication.phone : "Не заполнено"}</span>
                    </div>
                    <div className="application__wrapper-content-data-wrapper">
                        <label>Город</label>
                        <span>{loadedApplication && loadedApplication.city && loadedApplication.city.length > 0 ? loadedApplication.city : "Не заполнено"}</span>
                    </div>
                    <div className="application__wrapper-content-data-wrapper">
                        <label>Категории товаров</label>
                        <ul className="application__wrapper-content-data-wrapper-categories">
                            {loadedApplication && loadedApplication.category.length > 0 ? loadedApplication.category.map((category) => {
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
                    <p>{loadedApplication && loadedApplication.description && loadedApplication.description.length > 0 ? loadedApplication.description : "Не заполнено"}</p>
                </div>
                <div className="application__wrapper-content-data-wrapper">
                    <label>Описание продукции</label>
                    <p>{loadedApplication && loadedApplication.productionProcess && loadedApplication.productionProcess.length > 0 ? loadedApplication.productionProcess : "Не заполнено"}</p>
                </div>
                <div className="application__wrapper-content-data-wrapper">
                    <label>Тираж продукции</label>
                    <span>{loadedApplication && loadedApplication.stock && loadedApplication.stock.length > 0 ? loadedApplication.stock : "Не заполнено" }</span>
                </div>
                <div className="application__wrapper-content-data-wrapper">
                    <label>Габариты продукции</label>
                    <span>{loadedApplication && loadedApplication.size && loadedApplication.size.length > 0 ? loadedApplication.size : "Не заполнено"}</span>
                </div>
                <div className="application__wrapper-content-data-wrapper">
                    <label>Продукция сборная (модульная)</label>
                    <span>Да=Нет</span>
                </div>
                <div className="application__wrapper-content-data-wrapper">
                    <label>Средние сроки изготовления</label>
                    <span>{loadedApplication && loadedApplication.productionLength && loadedApplication.productionLength.length > 0 ? loadedApplication.productionLength : "Не заполнено"}</span>
                </div>
                <div className="application__wrapper-content-data-wrapper">
                    <label>Дата заполнения</label>
                    <span>{date.split(", ")[0]}</span>
                </div> */}
            </section>
            <Footer />
        </>
    )
}