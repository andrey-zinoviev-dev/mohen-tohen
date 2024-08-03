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
                <div className="application__wrapper-content-grid">
                    <div className="application__wrapper-content-data-wrapper">
                        <label>ФИО</label>
                        {/* <span>{applicationData.name.length > 0 ? applicationData.name : "Не заполнено"}</span> */}
                    </div>
                    <div className="application__wrapper-content-data-wrapper">
                        <label>Почта</label>
                        {/* <span>{applicationData.email.length > 0 ? applicationData.email : "Не заполнено"}</span> */}
                    </div>
                    <div className="application__wrapper-content-data-wrapper">
                        <label>Телефон</label>
                        {/* <span>{applicationData.phone.length > 0 ? applicationData.phone : "Не заполнено"}</span> */}
                    </div>
                    <div className="application__wrapper-content-data-wrapper">
                        <label>Город</label>
                        {/* <span>{applicationData.city && applicationData.city.length > 0 ? applicationData.city : "Не заполнено"}</span> */}
                    </div>
                    <div className="application__wrapper-content-data-wrapper">
                        <label>Категории товаров</label>
                        <ul className="application__wrapper-content-data-wrapper-categories">
                            {/* {applicationData.category.length > 0 ? applicationData.category.map((category) => {
                                                return <li key={category}>
                                                    {category}
                                                </li> 
                            })  
                            :
                            <li key="no categories">
                                Не выбрано
                            </li>
                            }  */}
                        </ul>
                    </div>
                </div>
                <div className="application__wrapper-content-data-wrapper">
                    <label>Описание</label>
                    {/* <p>{applicationData.description && applicationData.description.length > 0 ? applicationData.description : "Не заполнено"}</p> */}
                </div>
                <div className="application__wrapper-content-data-wrapper">
                    <label>Описание продукции</label>
                    {/* <p>{applicationData.productionProcess && applicationData.productionProcess.length > 0 ? applicationData.productionProcess : "Не заполнено"}</p> */}
                </div>
                <div className="application__wrapper-content-data-wrapper">
                    <label>Тираж продукции</label>
                    {/* <span>{applicationData.stock && applicationData.stock.length > 0 ? applicationData.stock : "Не заполнено" }</span> */}
                </div>
                <div className="application__wrapper-content-data-wrapper">
                    <label>Габариты продукции</label>
                    {/* <span>{applicationData.size && applicationData.size.length > 0 ? applicationData.size : "Не заполнено"}</span> */}
                </div>
                <div className="application__wrapper-content-data-wrapper">
                    <label>Продукция сборная (модульная)</label>
                    <span>Да=Нет</span>
                </div>
                <div className="application__wrapper-content-data-wrapper">
                    <label>Средние сроки изготовления</label>
                    {/* <span>{applicationData.productionLength && applicationData.productionLength.length > 0 ? applicationData.productionLength : "Не заполнено"}</span> */}
                </div>
                <div className="application__wrapper-content-data-wrapper">
                    <label>Дата заполнения</label>
                    {/* <span>{date.split(", ")[0]}</span> */}
                </div>
            </section>
            <Footer />
        </>
    )
};