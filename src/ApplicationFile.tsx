// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FileInterface } from "./interfaces";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./ApplicationFile.css";

// export default function ApplicationFile({file, showPhotos, removePhoto, removeFile, selectPhoto}:FileInterface) {
//     const path = file && window.URL.createObjectURL(file);
//     return (
//         <>
//             {!showPhotos && <button onClick={() => {
//                 removePhoto && removePhoto((prevValue) => {
//                     return {...prevValue, photos: {...prevValue.photos, value: prevValue.photos.value.filter((prevPhoto) => {
//                         return prevPhoto.name !== file?.name;
//                     })}};
//                 });

//                 removeFile && removeFile((prevValue) => {
//                     return prevValue.filter((prevFile) => {
//                         return prevFile.name !== file?.name;
//                     })
//                 })
//             }} className="application-file__delete">
//                 <FontAwesomeIcon icon={faXmark} />
//             </button>}
//             <img style={{cursor: showPhotos ? "default" : "pointer"}} onClick={() => {
//                 file && selectPhoto && selectPhoto(file);
//             }} src={path} onLoad={() => {
//                 path && window.URL.revokeObjectURL(path);
//             }}></img>
//         </>
        
//     )
// }