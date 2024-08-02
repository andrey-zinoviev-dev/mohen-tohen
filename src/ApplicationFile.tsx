import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FileInterface } from "./interfaces";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ApplicationFile({file, removePhoto, selectPhoto}:FileInterface) {
    const path = file && window.URL.createObjectURL(file);
    return (
        <>
            <button onClick={() => {
                removePhoto && removePhoto((prevValue) => {
                    return prevValue.filter((prevPhoto) => {
                        return prevPhoto.name !== file?.name;
                    })
                })
            }} className="application-file__delete">
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <img onClick={() => {
                file && selectPhoto && selectPhoto(file);
            }} src={path} onLoad={() => {
                path && window.URL.revokeObjectURL(path);
            }}></img>
        </>
        
    )
}