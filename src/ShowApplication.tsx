import React from "react";
import { useParams } from "react-router-dom";
import { decideApplication, getApplication } from "./api";
import { ApplicationInterface } from "./interfaces";
import ApplicationRender from "./ApplicationRender";
import "./ShowApplication.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
export default function ShowApplication() {
    const { applicationID } = useParams();
    //state
    const [loadedApplication, setLoadedApplication] = React.useState<ApplicationInterface | null>(null);
    const [selectedButton, setSelectedButton] = React.useState<{accept?: boolean, decline?: boolean} | null>(null);
    
    React.useEffect(() => {
        applicationID && getApplication(applicationID)
        .then((data) => {
            console.log(data);
            setLoadedApplication(data);
        })
    } ,[]);
    
    return (
        <section className="show-application">
            {loadedApplication && <ApplicationRender applicationData={loadedApplication} showPhotos={true}></ApplicationRender>}
            <div className="show-application__buttons">
                <button disabled={selectedButton?.decline ? true  : false} className={selectedButton?.accept ? "show-application__button show-application__button_accept" : "show-application__button"} onClick={() => {
                    // setSelectedButton({accept: true});
                    applicationID && decideApplication(applicationID, true)
                    .then((data) => {
                        console.log(data);
                    })
                }}>
                    <span>Одобрить</span>
                    <FontAwesomeIcon className="application-svg" icon={faCheckCircle} />
                </button>
                <button disabled={selectedButton?.accept ? true : false} className={selectedButton?.decline ? "show-application__button show-application__button_reject" : "show-application__button"} onClick={() => {
                    // setSelectedButton({decline: true});
                    applicationID && decideApplication(applicationID, true)
                    .then((data) => {
                        console.log(data);
                    })
                }}>
                    <span>Отменить</span>
                    <FontAwesomeIcon icon={faXmarkCircle} />
                </button>
            </div>
        </section>
    )
}