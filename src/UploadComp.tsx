import { useEffect, useState } from "react"
import FileUpload from "./FileUpload";
import SuccessWrapper from "./SuccessWrapper";
import Loader from "./Loader";
// import { usePostGoodToServerMutation } from "./features/apiSlice";
import LinkCompBack from "./LinkCompBack";

export default function UploadComp({photos, submitData}: {photos: File[], submitData: () => Promise<void>}) {
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
        return <>
          <SuccessWrapper label="Успешная выгрузка"></SuccessWrapper>
          <LinkCompBack to="../mygoods" text="Вернуться к товарам" />
        </>
    }
  }

  return (
    <>
      {showComponent()}
    </>
  )
}