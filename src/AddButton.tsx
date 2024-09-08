import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AddButton.css";

export default function AddButton({openInput}: {openInput: () => void}) {
  return (
    <button className="addButton" type="button" onClick={(evt) => {
      evt.stopPropagation();
      // addElement(true);
      openInput();
    }}>
      <FontAwesomeIcon icon={faPlusCircle} />
    </button>
  )
}