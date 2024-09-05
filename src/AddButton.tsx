import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AddButton.css";

export default function AddButton() {
  return (
    <button className="addButton">
      <FontAwesomeIcon icon={faPlusCircle} />
    </button>
  )
}