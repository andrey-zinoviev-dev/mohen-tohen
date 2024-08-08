import React from "react";
import { createPortal } from "react-dom";
import FileUploadContent from "./FileUploadContent";

export default function FileUpload({photos}: {photos: File[]}) {

  //state
  

  return (
    createPortal(<FileUploadContent label="Загрузка файлов" photos={photos}></FileUploadContent>, document.body)
  )
}