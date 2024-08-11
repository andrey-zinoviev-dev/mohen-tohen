import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./ApplicationFile.css";
import { FileInterface } from "./interfaces";

export default function ApplicationAddFile({addPhoto, addFile}:FileInterface) {
    return (
        <li className="application-file">
            <label className="application-file__label">
                <FontAwesomeIcon icon={faPlusCircle} />
                <input onChange={(evt) => {
                    const file = evt.target.files && evt.target.files[0];

                    if(file) {
                        addPhoto && addPhoto((prevValue) => {
                            return {...prevValue, photos: {...prevValue.photos, value:[...prevValue.photos.value, {name: file.name, type: file.type}]}}
                            // return {...prevValue, files: {...prevValue.photos, files: [...prevValue.photos.value, file]}};
                        });
                        addFile && addFile((prevValue) => {
                            return [...prevValue, file];
                        })
                    }
                    
                }} type="file" accept="image/png, image/jpeg" style={{display: "none"}}></input>
            </label>
        </li>
    )
}