import React from "react";
import { useParams } from "react-router-dom";
import { decideApplication, getApplication } from "./api";
import { ApplicationInterface } from "./interfaces";
import ApplicationRender from "./ApplicationRender";
import "./ShowApplication.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import logo from "./assets/mh-1.png"
export default function ShowApplication() {
    const { applicationID } = useParams();
    //state
    const [loadedApplication, setLoadedApplication] = React.useState<ApplicationInterface | null>(null);
    const [selectedButton, setSelectedButton] = React.useState<{approved?: boolean, declined?: boolean} | null>(null);
    
    React.useEffect(() => {
        applicationID && getApplication(applicationID)
        .then((data) => {
            setLoadedApplication(data);
        })
    } ,[]);
    
    return (
        <section className="show-application">
            <img className="show-application__logo" src={logo}></img>
            {loadedApplication && <ApplicationRender applicationData={loadedApplication} showPhotos={true}></ApplicationRender>}
            <div className="show-application__buttons">
                {<button disabled={selectedButton?.declined || loadedApplication?.approved.value.declined ? true  : false} className={selectedButton?.approved || loadedApplication?.approved.value.approved ? "show-application__button show-application__button_accept" : "show-application__button"} onClick={() => {
                    applicationID && decideApplication(applicationID, {approved: true})
                    .then((data) => {
                        setSelectedButton(data.approved.value);
                    })
                }}>
                    <span>Одобрить</span>
                    <FontAwesomeIcon className="application-svg" icon={faCheckCircle} />
                </button>}
                {<button disabled={selectedButton?.approved || loadedApplication?.approved.value.approved ? true : false} className={selectedButton?.declined || loadedApplication?.approved.value.declined ? "show-application__button show-application__button_reject" : "show-application__button"} onClick={() => {
                    applicationID && decideApplication(applicationID, {declined: true})
                    .then((data) => {
                        setSelectedButton(data.approved.value)
                    })
                }}>
                    <span>Отменить</span>
                    <FontAwesomeIcon icon={faXmarkCircle} />
                </button>}
                {loadedApplication?.approved.value.approved && <p style={{color: "#51d2aa"}}>Анкета одобрена</p>}
                {loadedApplication?.approved.value.declined && <p style={{color: "tomato"}}>Анкета отклонена</p>}
            </div>
        </section>
    )
}