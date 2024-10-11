import React from "react"
import "./ShowApplicationPhotos.css"
// import ApplicationPhotoPopup from "./ApplicationPhotoPopup";
import { createPortal } from "react-dom";
import PortalMultimedia from "./PortalMultimedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function ShowApplicationPhotos({photos}: {photos: {title: string, url?: string}[]}) {
  //state
  const [selectedPhoto, setSelectedPhoto] = React.useState<{title: string, url?: string} | null>(null);
  // console.log(selectedPhoto);
  return (
    <>
        <ul className="photos">
          {photos.map((photo) => {
            return <li key={photo.title} onClick={() => {
              setSelectedPhoto(photo);
            }}>
              <img src={photo.url}></img>
            </li>
          })}
        </ul>
        {selectedPhoto && createPortal(<PortalMultimedia>
            <button className="portal__close" onClick={() => {
              setSelectedPhoto(null);
            }}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <img src={selectedPhoto.url}></img>
        </PortalMultimedia>, document.body)}
        {/* {selectedPhoto && <ApplicationPhotoPopup photo={selectedPhoto} closePhoto={setSelectedPhoto}></ApplicationPhotoPopup>} */}
    </>

  )
}