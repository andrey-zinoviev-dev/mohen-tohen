import React from "react";
import ApplicationAddFile from "./ApplicationAddFile";
import ApplicationFile from "./ApplicationFile";
import ApplicationPhotoPopup from "./ApplicationPhotoPopup";
import { ApplicationInterface } from "./interfaces";

export default function ApplicationFiles({photos, updatePhotos}: {photos: File[], updatePhotos: React.Dispatch<React.SetStateAction<ApplicationInterface>>}) {
    //states
    // const [addedFiles, setAddedFiles] = React.useState<File[]>([]);
    const [selectedPhoto, setSelectedPhoto] = React.useState<File | null>(null);
    return (
        <>
            <h3>
                <span>03</span>Фото товара
            </h3>
            <ul className="application__form-div-photos">
                {photos.length > 0 && photos.map((file) => {
                    return <li className="application-file" key={file.name}>
                        <ApplicationFile removePhoto={updatePhotos} selectPhoto={setSelectedPhoto} file={file}></ApplicationFile>
                    </li>
                })}
                {photos.length < 6 && <ApplicationAddFile addPhoto={updatePhotos}></ApplicationAddFile>}
            </ul>
            {selectedPhoto && <ApplicationPhotoPopup file={selectedPhoto} closePopup={setSelectedPhoto}></ApplicationPhotoPopup>}
        </>
    )
}