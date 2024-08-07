import React from "react";
import ApplicationAddFile from "./ApplicationAddFile";
import ApplicationFile from "./ApplicationFile";
import ApplicationPhotoPopup from "./ApplicationPhotoPopup";
import { ApplicationInterface } from "./interfaces";
import "./ApplicationFiles.css";

export default function ApplicationFiles({photos, showPhotos, updatePhotos}: {photos: {value: File[], photo: boolean}, showPhotos?:boolean, updatePhotos?: React.Dispatch<React.SetStateAction<ApplicationInterface>>}) {
    //states
    // const [addedFiles, setAddedFiles] = React.useState<File[]>([]);
    const [selectedPhoto, setSelectedPhoto] = React.useState<File | null>(null);
    return (
        <>
            <ul className="application-files">
                {photos.value.length > 0 && photos.value.map((file) => {
                    return <li className="application-file" key={file.name}>
                        {showPhotos ? <ApplicationFile showPhotos={showPhotos} file={file} /> 
                        : 
                        <ApplicationFile showPhotos={showPhotos} removePhoto={updatePhotos} selectPhoto={setSelectedPhoto} file={file}></ApplicationFile>}
                    </li>
                })}
                {!showPhotos && photos.value.length < 6 && <ApplicationAddFile showPhotos={showPhotos} addPhoto={updatePhotos}></ApplicationAddFile>}
            </ul>
            {selectedPhoto && <ApplicationPhotoPopup file={selectedPhoto} closePopup={setSelectedPhoto}></ApplicationPhotoPopup>}
        </>
    )
}