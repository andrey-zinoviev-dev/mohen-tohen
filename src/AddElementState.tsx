import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function AddElementState({changeState}: {changeState?: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <>
      <button onClick={() => {
        changeState && changeState(true);
      }}>
        <FontAwesomeIcon icon={faPlusCircle} />
      </button>
    </>
  )
}