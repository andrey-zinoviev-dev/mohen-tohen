import { useEffect, useState } from "react"
import FileUpload from "./FileUpload";
import SuccessWrapper from "./SuccessWrapper";
import Loader from "./Loader";
// import { usePostGoodToServerMutation } from "./features/apiSlice";
import LinkCompBack from "./LinkCompBack";
import PortalCentered from "./PortalCentered";

type CommonProps = {
  photos: File[],
  submitData: () => Promise<void>,
}

type ConditionalProps = | {
  application: true,
  linkBack?: never,
  close?:never,
  // photos: File[],
  // submitData: () => Promise<void>,
} | {
  application: false,
  linkBack?: {to: string, text: string},
  close?: () => void,
  // photos: File[],
  // submitData: () => Promise<void>,
};

// type FinalTypes = CommonProps & ConditionalProps;

export default function UploadComp({application, photos, submitData, linkBack, close}: CommonProps & ConditionalProps) {
  // console.log(props.);
  // console.log(props.)
  // console.log(UploadCompType)
  // console.log(formData.photos);

  //state
  const [uploadStatus, setUploadStatus] = useState<string>("started");

  useEffect(() => {
    if(uploadStatus === 'files_uploaded') {
      submitData()
      .then(() => {
        setUploadStatus("finished");
      })
      // setUploadStatus("finished");
      // console.log(formData);
      // addGood(formData)
      // .then((data) => {
      //   if(data) {
      //   }
      // })
      // uploadFunction()
    }
  }, [uploadStatus]);

  //switch
  function showComponent() {
    switch (uploadStatus) {
      case "started":
        return <FileUpload files={photos} setUploadStatus={setUploadStatus}></FileUpload>
      case "files_uploaded":
        return <Loader text="Файлы загрузились, товар выгружается"></Loader>
      case "finished":
        return <PortalCentered>
          <SuccessWrapper label="Успешная выгрузка"></SuccessWrapper>
          {application ? 
          <>
            <p>Поздравляем, ты большой молодец! Мы ответим в самое ближайшее время, максимум 2 дня, а пока ты можешь посмотреть наш блог, ознакомиться с нашими соц сетями </p>
            <a href="">Подробнее о том, как мы проверяем анкеты</a>
          </>
          :
          <>
            {linkBack && <LinkCompBack to={linkBack.to} text={linkBack.text} />}
            {close && <button onClick={close}>Закрыть</button>}
          </>
          
          }
        </PortalCentered>
    }
  }

  return (
    <>
      {showComponent()}
    </>
  )
}