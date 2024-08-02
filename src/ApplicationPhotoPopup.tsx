import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ApplicationPhotoPopup.css";

export default function ApplicationPhotoPopup({file, closePopup}:{file: File, closePopup: React.Dispatch<React.SetStateAction<File | null>>,
}) {
  const path = window.URL.createObjectURL(file);

  return (
    <section className="photo-popup">
      <div className="photo-popup__wrapper">
        <button onClick={() => {
          closePopup(null);
        }}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <img src={path} onLoad={() => {
          window.URL.revokeObjectURL(path);
        }}></img>
      </div>

    </section>
  )
}