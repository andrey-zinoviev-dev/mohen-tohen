import React from "react";
import Footer from "./Footer";
import logo from "./assets/mh-1.png";
import "./ApplicationRender.css";
import { getApplication } from "./api";
import { useParams } from "react-router-dom";
import { ApplicationInterface } from "./interfaces";
import ApplicationDataWrapper from "./ApplicationDataWrapper";

export default function ApplicationRender({applicationData}:{applicationData:ApplicationInterface,}) {
    //variables
    const valuesOfApplication:{value: string, textarea?: boolean, label?: string, checkbox?: boolean}[] = Object.values(applicationData);
    // const inputs
    // //state
    // const [loadedApplication, setLoadedApplication] = React.useState<ApplicationInterface | null>(null);

    // const { applicationID } = useParams();

    // React.useEffect(() => {
    //     applicationID && getApplication(applicationID)
    //     .then((data) => {
    //         setLoadedApplication(data);
    //     })
    // } ,[]);

    // React.useEffect(() => {
    //     console.log(loadedApplication);
    // }, [loadedApplication])

    return (
        <>
            <div className="application-render">
                {/* <img className="application-show__logo" src={logo}></img> */}
                <h3>Анкета</h3>
                <div className="application__wrapper-content-grid">
                    {valuesOfApplication.filter((value) => {
                        return !value.textarea && !value.checkbox;
                    }).map((value) => {
                        return <ApplicationDataWrapper label={value.label} data={value.value} textarea={value.textarea}></ApplicationDataWrapper>
                    })}
                </div>
                {valuesOfApplication.filter((value) => {
                        return value.textarea;
                    }).map((value) => {
                        return <ApplicationDataWrapper label={value.label} data={value.value} textarea={value.textarea}></ApplicationDataWrapper>
                    })
                }
                <ApplicationDataWrapper label="Дата заоплнения" data={applicationData.dateOfFill.value} textarea={false}></ApplicationDataWrapper>
                
            </div>
        </>
    )
}