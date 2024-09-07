import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./AddButton.css";

export default function AddButtonState({changeState}: {changeState:  React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <button className="addButton" type="button" onClick={() => {
      // addElement(true);
      changeState(true);
    }}>
      <FontAwesomeIcon icon={faPlusCircle} />
    </button>
  )
}