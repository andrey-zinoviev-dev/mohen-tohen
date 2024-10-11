import React from "react";
import { useParams } from "react-router-dom";
// import { decideApplication, getApplication } from "./api";
import { ApplicationUploadedInterface } from "./interfaces";
import ApplicationRender from "./ApplicationRender";
import "./ShowApplication.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import logo from "./assets/mh-1.png"
import { useDecideApplicationMutation, useGetApplicationQuery } from "./features/apiSlice";

export default function ShowApplication() {
    const { applicationID } = useParams();

    //RTK
    const {
        data: application = {} as ApplicationUploadedInterface
    } = useGetApplicationQuery(applicationID!);
    // console.log(application);

    const [decideApplication] = useDecideApplicationMutation();

    //state
    // const [loadedApplication, setLoadedApplication] = React.useState<ApplicationInterface | null>(null);
    const [decision, setDecision] = React.useState<string>("idle");

    //functions
    function submitDecision(data: string) {
        applicationID && decideApplication({id: applicationID, decision: data})
        .then((data) => {
            const result = data.data?.decision;
            result && setDecision(result);
        })
    }
    
    React.useEffect(() => {
        // console.log(application.approved);
        application.approved && setDecision(application.approved)
    }, [application])
    
    // React.useEffect(() => {

    //     if(decision !== "idle") {
    //         applicationID && decideApplication({id: applicationID, decision: decision})
    //         .then((data) => {
    //             const result = data.data;
    //             result && setDecision(result);
    //         })
    //     }
    // }, [decision])
    
    return (
        <section className="show-application">
            <img className="show-application__logo" src={logo}></img>
            {application && <ApplicationRender showPhotos={true} applicationData={application}></ApplicationRender>}
            <div className="show-application__buttons">
                <button disabled={decision !== "idle" && decision === "declined" ? true : false} className={decision === 'approved' ? "show-application__button show-application__button_accept" : "show-application__button"} onClick={() => {
                    submitDecision("approved");
                }}>
                    <span>Одобрить</span>
                    <FontAwesomeIcon className="application-svg" icon={faCheckCircle} />
                </button>
                <button disabled={decision !== "idle" && decision === "approved" ? true : false} className={decision === 'declined' ? "show-application__button show-application__button_reject" : "show-application__button"} onClick={() => {
                    submitDecision("declined");
                }}>
                    <span>Отменить</span>
                    <FontAwesomeIcon icon={faXmarkCircle} />
                </button>
                {decision === "approved" && <p style={{color: "#51d2aa"}}>Анкета одобрена</p>}
                {decision === "declined" && <p style={{color: "tomato"}}>Анкета отклонена</p>}
            </div>
        </section>
    )
}