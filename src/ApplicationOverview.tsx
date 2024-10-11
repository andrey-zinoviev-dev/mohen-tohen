import React from "react";
import "./ApplicationOverview.css";
import { OverviewInterface } from "./interfaces";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
// import { sendApplication } from "./api";
import ApplicationRender from "./ApplicationRender";
import { createPortal } from "react-dom";
import PortalMultimedia from "./PortalMultimedia";
import PortalContainer from "./PortalContainer";
import UploadComp from "./UploadComp";
import { useSendApplicationMutation } from "./features/apiSlice";

// // //types
// type ConditionalProps = 
//     |
//     {
//         photos: {
//             title: string,
//             file: File,
//             url: never,
//         }[] 
//     }
//     |
//     {
//         photos: {
//             title: string,
//             file: never,
//             url: string,
//         }[]
//     };

// import FileUpload from "./FileUpload";
export default function ApplicationOverview({applicationData}:OverviewInterface){
    //state
    // const [submitStatus, setSubmitStatus] = React.useState<{ready: boolean, submitted: boolean, filesUploaded: boolean, applicationSent: boolean, finished: boolean}>({ready: false, submitted: false, filesUploaded: false, applicationSent: false, finished: false});

    const [uploadStarted, setUploadStarted] = React.useState<boolean>(false);

    //RTK
    const [sendApplication] = useSendApplicationMutation();

    //functions
    function submitData() {
        return sendApplication(applicationData)
        .then((data) => {
            console.log(data);
        })
    }

    //functions
    // function submitData() {
    //     return sendApplication(applicationData)
    //     .then((data) => {
    //             // setSubmitStatus((prevValue) => {
    //             //     return {...prevValue, finished: true};
    //             // })
    //             console.log(data);
    //             // console.log("send notification to telegram");
    //         fetch(`https://api.telegram.org/bot${import.meta.env.VITE_bot_token}/sendMessage`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type":"application/json",
    //             },
    //             body: JSON.stringify({
    //                             // chat_id: 471930242,
    //                 "chat_id": 2104151994,
    //                 "text": `Новая заявка- Алекс`,
    //                 "parse_mode" : "markdown",
    //                 "reply_markup" : {
    //                     "inline_keyboard" : [
    //                         [
    //                             {
    //                                 "text" : "Open link",
    //                                 "url" : "https://google.com"
    //                             }
    //                         ]
    //                     ]
    //                 }
    //             })
    //         })
    //     })
    // }

    // React.useEffect(() => {
    //     if(submitStatus.submitted) {
    //         setSubmitStatus((prevValue) => {
    //             return {...prevValue, applicationSent: true};
    //         })
            // sendApplication(applicationData)
            // .then((data) => {
            //     setSubmitStatus((prevValue) => {
            //         return {...prevValue, finished: true};
            //     })
            //     console.log(data);
            //     console.log("send notification to telegram");
            //             fetch(`https://api.telegram.org/bot${import.meta.env.VITE_bot_token}/sendMessage`, {
            //                 method: "POST",
            //                 headers: {
            //                     "Content-Type":"application/json",
            //                 },
            //                 body: JSON.stringify({
            //                     // chat_id: 471930242,
            //                     "chat_id": 2104151994,
            //                     "text": `Новая заявка- Алекс`,
            //                     "parse_mode" : "markdown",
            //                     "reply_markup" : {
            //                         "inline_keyboard" : [
            //                             [
            //                                 {
            //                                     "text" : "Open link",
            //                                     "url" : "https://google.com"
            //                                 }
            //                             ]
            //                         ]
            //                     }
            //                 })
            //             })
            // })
    //     }
    // }, [submitStatus.submitted]);

    return (
        <>
            <ApplicationRender applicationData={applicationData} showPhotos={false}>

            </ApplicationRender>
             {applicationData.offerAgreement && applicationData.personalDataAgreement && applicationData.shippingPartnerAgreement && <>
                {/* <button>Анкета заполнена верно</button> */}
                {/* {!submitStatus?.ready ? <button onClick={() => {
                    setSubmitStatus((prevValue) => {
                        return {...prevValue, ready: true};
                    })
                }}>
                    Анкета запонена верно
                    <FontAwesomeIcon icon={faCheck} />
                </button> 
                    :  */}
                <button type="button" onClick={() => {
                    setUploadStarted(true);
                    // sendApplication(applicationData)
                    // console.log(applicationData);
                    // setUploadStarted(true);
                    // setSubmitStatus((prevValue) => {
                    //     return {...prevValue, submitted: true};
                    // })
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
                    {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
                </button>
                {/* } */}
                {/* {submitStatus.submitted && <FileUpload files={files} submitStatus={submitStatus} updateStatus={setSubmitStatus}/>} */}
            </>}

            {uploadStarted && createPortal(<PortalMultimedia>
                <PortalContainer>
                    <UploadComp submitData={submitData} photos={applicationData.photos.map((photo) => {
                        return photo.file;
                    })}></UploadComp>
                </PortalContainer>
            </PortalMultimedia>, document.body)}
        </>

    )
}