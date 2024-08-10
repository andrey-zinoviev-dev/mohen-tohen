import React from "react";
import "./ApplicationOverview.css";
import { OverviewInterface } from "./interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { sendApplication } from "./api";
import ApplicationRender from "./ApplicationRender";
import FileUpload from "./FileUpload";
export default function ApplicationOverview({applicationData}:OverviewInterface){
    //state
    const [submitStatus, setSubmitStatus] = React.useState<{ready: boolean, submitted: boolean, filesUploaded: boolean, applicationSent: boolean, finished: boolean}>({ready: false, submitted: false, filesUploaded: false, applicationSent: false, finished: false});

    React.useEffect(() => {
        if(submitStatus.filesUploaded) {
            setSubmitStatus((prevValue) => {
                return {...prevValue, applicationSent: true};
            })
            sendApplication(applicationData)
            .then((data) => {
                setSubmitStatus((prevValue) => {
                    return {...prevValue, finished: true};
                })
                console.log(data);
                console.log("send notification to telegram");
                        // fetch(`https://api.telegram.org/bot${import.meta.env.VITE_bot_token}/sendMessage`, {
                        //     method: "POST",
                        //     headers: {
                        //         "Content-Type":"application/json",
                        //     },
                        //     body: JSON.stringify({
                        //         // chat_id: 471930242,
                        //         "chat_id": 2104151994,
                        //         "text": "Новая заявка- Алекс",
                        //         "parse_mode" : "markdown",
                        //         "reply_markup" : {
                        //             "inline_keyboard" : [
                        //                 [
                        //                     {
                        //                         "text" : "Open link",
                        //                         "url" : "https://google.com"
                        //                     }
                        //                 ]
                        //             ]
                        //         }
                        //     })
                        // })
            })
        }
    }, [submitStatus.filesUploaded]);

    return (
        <>
            <ApplicationRender applicationData={applicationData} showPhotos={false}>

            </ApplicationRender>
             {applicationData.offerAgreement.value && applicationData.personalDataAgreement.value && applicationData.shippingPartnerAgreement.value && <>
                {/* <button>Анкета заполнена верно</button> */}
                {!submitStatus?.ready ? <button onClick={() => {
                    setSubmitStatus((prevValue) => {
                        return {...prevValue, ready: true};
                    })
                }}>
                    Анкета запонена верно
                    <FontAwesomeIcon icon={faCheck} />
                </button> 
                    : 
                <button type="submit" onClick={() => {
                    console.log(applicationData);
                    setSubmitStatus((prevValue) => {
                        return {...prevValue, submitted: true};
                    })
                    // sendApplication(applicationData)
                    // .then((data) => {
                    //     console.log(data);
                    //     console.log("send notification to telegram");
                    //     fetch(`https://api.telegram.org/bot${import.meta.env.VITE_bot_token}/sendMessage`, {
                    //         method: "POST",
                    //         headers: {
                    //             "Content-Type":"application/json",
                    //         },
                    //         body: JSON.stringify({
                    //             // chat_id: 471930242,
                    //             "chat_id": 2104151994,
                    //             "text": "Новая заявка- Алекс",
                    //             "parse_mode" : "markdown",
                    //             "reply_markup" : {
                    //                 "inline_keyboard" : [
                    //                     [
                    //                         {
                    //                             "text" : "Open link",
                    //                             "url" : "https://google.com"
                    //                         }
                    //                     ]
                    //                 ]
                    //             }
                    //         })
                    //     })
                    // })
                }}>
                    <span>Отправить анкету</span>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
                }
                {submitStatus.submitted && <FileUpload photos={applicationData.photos.value} submitStatus={submitStatus} updateStatus={setSubmitStatus}/>}
            </>}
        </>

    )
}