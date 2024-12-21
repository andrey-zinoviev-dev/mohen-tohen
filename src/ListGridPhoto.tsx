import React from "react";
import "./ListGridPhoto.css";
import { createPortal } from "react-dom";
import PortalMultimedia from "./PortalMultimedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

interface ListGridPhotoInterface {
  url: string,
  // name: string,
  removePhoto: () => void,
}

export default function ListGridPhoto({ url, removePhoto }: ListGridPhotoInterface) {
// export default function ListGridPhoto({ file, removePhoto }: {file: File, removePhoto: (file: File) => void}) {
  // console.log(file);
  // const photoUrl = window.URL.createObjectURL(file);
  // console.log(photoUrl);
  //state
  const [selectedPhoto, setSelectedPhoto] = React.useState<string | null>(null);

  return (
    <>
      <div className="button" onClick={() => {
        // setSelectedPhoto(file);
      }}>
        <button className="button__close" onClick={(evt) => {
          evt.stopPropagation();
          removePhoto()
        }}>
          <FontAwesomeIcon icon={faXmarkCircle} />
        </button>
        <img className="list-img" onClick={() => {
          setSelectedPhoto(url)
        }} src={ url }></img>
      </div>
      
      {selectedPhoto && createPortal(<PortalMultimedia>
        <button onClick={() => {
          setSelectedPhoto(null);
        }}>
          <FontAwesomeIcon icon={faXmarkCircle} />
        </button>
        <img src={ url } onLoad={() => {
          window.URL.revokeObjectURL( url );
        }}>
        </img>
      </PortalMultimedia>, document.body)}
    </>
  )
}