import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ApplicationPhotoPopup.css";

export default function ApplicationPhotoPopup({photo, file, closePhoto, closePopup}:{photo?: {name: string, type: string, path?: string}, file?: File, closePhoto?: React.Dispatch<React.SetStateAction<{name: string, type: string} | null>>, closePopup?: React.Dispatch<React.SetStateAction<File |null>>,
}) {
  const path = file && window.URL.createObjectURL(file);

  return (
    <section className="photo-popup">
      <div className="photo-popup__wrapper">
        <button onClick={() => {
          closePopup && closePopup(null);
          closePhoto && closePhoto(null);
        }}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <img src={file ? path : photo?.path} onLoad={() => {
          file && path && window.URL.revokeObjectURL(path);
        }}></img>
      </div>

    </section>
  )
}