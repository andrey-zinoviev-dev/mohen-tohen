import { useEffect, useState } from "react"
import FileUpload from "./FileUpload";
import SuccessWrapper from "./SuccessWrapper";
import Loader from "./Loader";
import { usePostGoodToServerMutation } from "./features/apiSlice";
import LinkCompBack from "./LinkCompBack";

export default function UploadComp({formData}: {formData: {title: string, description: string, material: string, dimensions: string, photos: {title: string, file: File}[], price: number}}) {
  // console.log(formData.photos);
  //state
  const [uploadStatus, setUploadStatus] = useState<string>("started");

  //RTK
  const [addGood] = usePostGoodToServerMutation();

  useEffect(() => {
    if(uploadStatus === 'files_uploaded') {
      // console.log(formData);
      addGood(formData)
      .then((data) => {
        if(data) {
          setUploadStatus("finished");
        }
      })
    }
  }, [uploadStatus]);

  //switch
  function showComponent() {
    switch (uploadStatus) {
      case "started":
        return <FileUpload files={formData.photos} setUploadStatus={setUploadStatus}></FileUpload>
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