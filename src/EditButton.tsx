import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./EditButton.css"
export default function EditButton() {
    return (
        <Link to={"./edit"} className="button-edit">
            <FontAwesomeIcon icon={faPen} />
        </Link>
    )
}