import React from "react";
import { useParams } from "react-router-dom";
import { getApplication } from "./api";
import { ApplicationInterface } from "./interfaces";
import ApplicationRender from "./ApplicationRender";
import "./ShowApplication.css"
export default function ShowApplication() {
    const { applicationID } = useParams();

    //state
    const [loadedApplication, setLoadedApplication] = React.useState<ApplicationInterface | null>(null);


    React.useEffect(() => {
        applicationID && getApplication(applicationID)
        .then((data) => {
            setLoadedApplication(data);
        })
    } ,[]);

    React.useEffect(() => {
        console.log(loadedApplication);
    }, [loadedApplication]);
    
    return (
        <section className="show-application">
            {loadedApplication && <ApplicationRender applicationData={loadedApplication}></ApplicationRender>}
        </section>
    )
};