import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SuccessWrapper.css";

export default function SuccessWrapper({label}: {label: string}) {
  return (
    <div className="success-wrapper">
      <label>{label}</label>
      <FontAwesomeIcon icon={faCheckCircle} />
    </div>
  )
}