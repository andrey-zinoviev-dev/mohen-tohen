import { useEffect, useState } from "react"
import FileUpload from "./FileUpload";
import SuccessWrapper from "./SuccessWrapper";
import Loader from "./Loader";

export default function UploadComp({formData}: {formData: {title: string, description: string, material: string, dimensions: string, photos: File[], price: number}}) {
  // console.log(formData.photos);
  //state
  const [uploadStatus, setUploadStatus] = useState<string>("started");

  useEffect(() => {

  }, []);

  //switch
  function showComponent() {
    switch (uploadStatus) {
      case "started":
        return <FileUpload files={formData.photos} setUploadStatus={setUploadStatus}></FileUpload>
      case "files_uploaded":
        return <Loader setUploadStatus={setUploadStatus}></Loader>
      case "finished":
        return <SuccessWrapper label="Успешная выгрузка"></SuccessWrapper>
    }
  }

  return (
    <>
      {showComponent()}
    </>
  )
}