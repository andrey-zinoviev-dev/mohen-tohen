import React from "react";
import { createPortal } from "react-dom";
import FileUploadContent from "./FileUploadContent";

export default function FileUpload({photos, updateStatus}: {photos: File[], updateStatus: React.Dispatch<React.SetStateAction<{ready: boolean, submitted: boolean, finished: boolean}>>}) {

  //state
  

  return (
    createPortal(<FileUploadContent label="Загрузка файлов" photos={photos} updateStatus={updateStatus}></FileUploadContent>, document.body)
  )
}