import React from "react";
import { useParams } from "react-router-dom";
import { getApplication } from "./api";
import { ApplicationInterface } from "./interfaces";
import ApplicationRender from "./ApplicationRender";
import "./ShowApplication.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
export default function ShowApplication() {
    const { applicationID } = useParams();

    //state
    const [loadedApplication, setLoadedApplication] = React.useState<ApplicationInterface | null>(null);

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
                <button>
                    <span>Одобрить</span>
                    <FontAwesomeIcon className="application-svg" icon={faCheckCircle} />
                </button>
                <button>
                    <span>Отменить</span>
                    <FontAwesomeIcon icon={faXmarkCircle} />
                </button>
            </div>
        </section>
    )
}