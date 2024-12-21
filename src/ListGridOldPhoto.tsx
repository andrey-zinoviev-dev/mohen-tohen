import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ListGridPhoto.css";
export default function ListGridOldPhoto({ image, removePhoto }: { image: string, removePhoto: (url: string) => void}) {
  return (
    <>
      <div className="button" onClick={() => {
        // setSelectedPhoto(file);
      }}>
        <button className="button__close" type="button" onClick={() => {
          removePhoto(image);
          // evt.stopPropagation();
          // removePhoto(file)
        }}>
          <FontAwesomeIcon icon={faXmarkCircle} />
        </button>
        <img className="list-img" src={image} onLoad={() => {
        }}></img>
      </div>
    </>
  )
}