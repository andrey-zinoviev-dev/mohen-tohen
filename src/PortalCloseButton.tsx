import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PortalCloseButton.css"
export default function PortalCloseButton({ close }: { close: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <button onClick={() => {
            close(false);
        }} className="portal-close">
            <FontAwesomeIcon icon={faXmark} />
        </button>
    )
}