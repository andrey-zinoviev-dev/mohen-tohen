import React from "react";
import "./ListGridPhoto.css";
import { createPortal } from "react-dom";
import PortalMultimedia from "./PortalMultimedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
export default function ListGridPhoto({ file, removePhoto }: {file: File, removePhoto: (file: File) => void}) {
  // console.log(file);
  const photoUrl = window.URL.createObjectURL(file);
  // console.log(photoUrl);
  //state
  const [selectedPhoto, setSelectedPhoto] = React.useState<File | null>(null);

  return (
    <>
      <button className="button" type="button" onClick={() => {
        setSelectedPhoto(file);
      }}>
        <button className="button__close" onClick={(evt) => {
          evt.stopPropagation();
          removePhoto(file)
        }}>
          <FontAwesomeIcon icon={faXmarkCircle} />
        </button>
        <img className="list-img" src={photoUrl} onLoad={() => {
          window.URL.revokeObjectURL(photoUrl);
        }}></img>
      </button>
      
      {selectedPhoto && createPortal(<PortalMultimedia>
        <button onClick={() => {
          setSelectedPhoto(null);
        }}>
          <FontAwesomeIcon icon={faXmarkCircle} />
        </button>
        <img src={photoUrl} onLoad={() => {
          window.URL.revokeObjectURL(photoUrl);
        }}>
        </img>
      </PortalMultimedia>, document.body)}
    </>
  )
}