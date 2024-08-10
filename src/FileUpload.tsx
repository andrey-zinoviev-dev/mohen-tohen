import React from "react";
import { createPortal } from "react-dom";
import FileUploadContent from "./FileUploadContent";

export default function FileUpload({photos, submitStatus, updateStatus}: {photos: File[],  submitStatus: {ready: boolean, submitted: boolean, filesUploaded: boolean, applicationSent: boolean, finished: boolean},  updateStatus: React.Dispatch<React.SetStateAction<{ready: boolean, submitted: boolean, filesUploaded: boolean, applicationSent: boolean, finished: boolean}>>}) {
  //state
  return (
    createPortal(<FileUploadContent label="Загрузка файлов" photos={photos} submitStatus={submitStatus} updateStatus={updateStatus}></FileUploadContent>, document.body)
  )
}