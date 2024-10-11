import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./EditButton.css"
export default function EditButton() {
    return (
        <button className="button-edit">
            <FontAwesomeIcon icon={faPen} />
        </button>
    )
}