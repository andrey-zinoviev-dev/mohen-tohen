import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SuccessWrapper.css";

export default function SuccessWrapper({label}: {label: string}) {
  return (
    <div className="success-wrapper">
      <FontAwesomeIcon icon={faCheckCircle} />
      <label>{label}</label>
    </div>
  )
}