import React from "react";
import ApplicationAddFile from "./ApplicationAddFile";
import ApplicationFile from "./ApplicationFile";
import ApplicationPhotoPopup from "./ApplicationPhotoPopup";
import { ApplicationInterface } from "./interfaces";
import "./ApplicationFiles.css";

export default function ApplicationFiles({photos, files, showPhotos, updatePhotos, updateFiles}: {photos: {value: {name: string, type: string}[], photo: boolean}, files: File[], showPhotos?:boolean, updatePhotos?: React.Dispatch<React.SetStateAction<ApplicationInterface>>, updateFiles?: React.Dispatch<React.SetStateAction<File[]>>}) {
    //states
    // const [addedFiles, setAddedFiles] = React.useState<File[]>([]);
    const [selectedPhoto, setSelectedPhoto] = React.useState<File | null>(null);
    return (
        <>
            <ul className="application-files">
                {files.length > 0 && files.map((file) => {
                    return <li className="application-file" key={file.name}>
                        {showPhotos ? <ApplicationFile showPhotos={showPhotos} file={file} /> 
                        : 
                        <ApplicationFile showPhotos={showPhotos} removePhoto={updatePhotos} removeFile={updateFiles} selectPhoto={setSelectedPhoto} file={file}></ApplicationFile>}
                    </li>
                })}
                {!showPhotos && photos.value.length < 6 && <ApplicationAddFile showPhotos={showPhotos} addPhoto={updatePhotos} addFile={updateFiles}></ApplicationAddFile>}
            </ul>
            {selectedPhoto && <ApplicationPhotoPopup file={selectedPhoto} closePopup={setSelectedPhoto}></ApplicationPhotoPopup>}
        </>
    )
}