import "./ApplicationRender.css";
import { ApplicationInterface } from "./interfaces";
import ApplicationDataWrapper from "./ApplicationDataWrapper";
// import ApplicationFiles from "./ApplicationFiles";
import ShowApplicationPhotos from "./ShowApplicationPhotos";

export default function ApplicationRender({applicationData, showPhotos}:{applicationData:ApplicationInterface, showPhotos: boolean}) {
    //variables
    const valuesOfApplication:{value: string, textarea?: boolean, label?: string, checkbox?: boolean, date?: boolean, photo? :boolean, approved?: boolean}[] = Object.values(applicationData);
    // console.log(valuesOfApplication);
    return (
        <>
            <div className="application-render">
                {/* <img className="application-show__logo" src={logo}></img> */}
                <h3>Анкета</h3>
                <div className="application__wrapper-content-grid">
                    {valuesOfApplication.filter((value) => {
                        return !value.textarea && !value.checkbox && !value.date && !value.photo && !value.approved;
                    }).map((value) => {
                        return <ApplicationDataWrapper>
                            <label>{value.label}</label>
                            <span>{ value.value.length > 0 ? value.value : "Не заполнено" }</span>
                        </ApplicationDataWrapper>
                    })}
                </div>
                {valuesOfApplication.filter((value) => {
                        return value.textarea;
                    }).map((value) => {
                        return <ApplicationDataWrapper>
                            <label>{value.label}</label>
                            <p>{ value.value.length > 0 ? value.value : "Не заполнено" }</p>
                        </ApplicationDataWrapper>
                    })
                }
                {showPhotos && <ApplicationDataWrapper>
                    <label>Фото продукции</label>
                    <ShowApplicationPhotos photos={applicationData.photos.value}>

                    </ShowApplicationPhotos>
                    {/* <ApplicationFiles photos={applicationData.photos.value} showPhotos={showPhotos}/> */}
                </ApplicationDataWrapper>}
                <ApplicationDataWrapper>
                    <label>Дата заполнения</label>
                    <span>{applicationData.dateOfFill.value}</span>
                </ApplicationDataWrapper>
                
            </div>
        </>
    )
}