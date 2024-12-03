import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ListGridPhoto.css";
export default function ListGridOldPhoto({ image, removePhoto }: { image: { url: string, title: string }, removePhoto: (url: string) => void}) {
  return (
    <>
      <button className="button" type="button" onClick={() => {
        // setSelectedPhoto(file);
      }}>
        <button className="button__close" type="button" onClick={() => {
          removePhoto(image.url);
          // evt.stopPropagation();
          // removePhoto(file)
        }}>
          <FontAwesomeIcon icon={faXmarkCircle} />
        </button>
        <img className="list-img" src={image.url} onLoad={() => {
        }}></img>
      </button>
    </>
  )
}