import "./ApplicationRender.css";
import { ApplicationInterface, ApplicationNotUploadedIterface, ApplicationUploadedInterface } from "./interfaces";
import ApplicationDataWrapper from "./ApplicationDataWrapper";
// import ApplicationFiles from "./ApplicationFiles";
import ShowApplicationPhotos from "./ShowApplicationPhotos";

type ConditionalProps = | {
    showPhotos: true;
    applicationData: ApplicationUploadedInterface
} | {
    showPhotos: false,
    applicationData: ApplicationNotUploadedIterface
}

export default function ApplicationRender({applicationData, showPhotos}:ConditionalProps) {
    // console.log(applicationData);
    //variables
    // const valuesOfApplication:{value: string, textarea?: boolean, label?: string, checkbox?: boolean, date?: boolean, photo? :boolean, approved?: boolean}[] = Object.values(applicationData);
    // console.log(valuesOfApplication);
    return (
        <>
            <div className="application-render">
                {/* <img className="application-show__logo" src={logo}></img> */}
                <h3>Анкета</h3>
                <div className="application__wrapper-content-grid">
                    <ApplicationDataWrapper>
                        <label>Имя</label>
                        <span>{applicationData.name}</span>
                    </ApplicationDataWrapper>
                    <ApplicationDataWrapper>
                        <label>Почта</label>
                        <span>{applicationData.email}</span>
                    </ApplicationDataWrapper>
                    <ApplicationDataWrapper>
                        <label>Телефон</label>
                        <span>{applicationData.phone}</span>
                    </ApplicationDataWrapper>
                    <ApplicationDataWrapper>
                        <label>Город</label>
                        <span>{applicationData.city}</span>
                    </ApplicationDataWrapper>
                    <ApplicationDataWrapper>
                        <label>Что произодит продавец</label>
                        <span>{applicationData.category}</span>
                    </ApplicationDataWrapper>
                    <ApplicationDataWrapper>
                        <label>Сколько времени произовдится товар</label>
                        <span>{applicationData.productionLength}</span>
                    </ApplicationDataWrapper>
                    <ApplicationDataWrapper>
                        <label>Тираж</label>
                        <span>{applicationData.stock}</span>
                    </ApplicationDataWrapper>
                    <ApplicationDataWrapper>
                        <label>Размеры товаров</label>
                        <span>{applicationData.size}</span>
                    </ApplicationDataWrapper>

                    {/* {valuesOfApplication.filter((value) => {
                        return !value.textarea && !value.checkbox && !value.date && !value.photo && !value.approved;
                    }).map((value) => {
                        return <ApplicationDataWrapper>
                            <label>{value.label}</label>
                            <span>{ value.value.length > 0 ? value.value : "Не заполнено" }</span>
                        </ApplicationDataWrapper>
                    })} */}
                </div>
                <ApplicationDataWrapper>
                        <label>Описание продавца</label>
                        <p>{applicationData.description}</p>
                    </ApplicationDataWrapper>
                    <ApplicationDataWrapper>
                        <label>Описание товаров продавца</label>
                        <p>{applicationData.productionProcess}</p>
                    </ApplicationDataWrapper>
                    {showPhotos && applicationData.photos &&  <ApplicationDataWrapper>
                    <label>Фото продукции</label>
                        <ShowApplicationPhotos photos={applicationData.photos} />
                    </ApplicationDataWrapper>}
                {/* {valuesOfApplication.filter((value) => {
                        return value.textarea;
                    }).map((value) => {
                        return <ApplicationDataWrapper>
                            <label>{value.label}</label>
                            <p>{ value.value.length > 0 ? value.value : "Не заполнено" }</p>
                        </ApplicationDataWrapper>
                    })
                } */}
                {/* {showPhotos && <ApplicationDataWrapper>
                    <label>Фото продукции</label>
                    <ShowApplicationPhotos photos={applicationData.photos}>

                    </ShowApplicationPhotos>
                </ApplicationDataWrapper>}
                <ApplicationDataWrapper>
                    <label>Дата заполнения</label>
                    <span>{applicationData.dateOfFill}</span>
                </ApplicationDataWrapper> */}
                
            </div>
        </>
    )
}