import React from "react"
import "./ShowApplicationPhotos.css"
import ApplicationPhotoPopup from "./ApplicationPhotoPopup";
export default function ShowApplicationPhotos({photos}: {photos: {name: string, type: string, path?: string}[]}) {
  //state
  const [selectedPhoto, setSelectedPhoto] = React.useState<{name: string, type: string, path?: string} | null>(null);
  console.log(selectedPhoto);
  return (
    <>
        <ul className="photos">
          {photos.map((photo) => {
            return <li key={photo.name} onClick={() => {
              setSelectedPhoto(photo);
            }}>
              <img src={photo.path}></img>
            </li>
          })}
        </ul>
        {selectedPhoto && <ApplicationPhotoPopup photo={selectedPhoto} closePhoto={setSelectedPhoto}></ApplicationPhotoPopup>}
    </>

  )
}