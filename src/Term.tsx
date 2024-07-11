import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { TermInterface } from "./interfaces";
export default function Term ({question, answer}:TermInterface) {
  //state
  const [clicked, setClicked] = React.useState<boolean>(false);

  return (
    <button onClick={() => {
      setClicked((prevValue) => {
        return !prevValue;
      });
    }}>
      <div>
        <h4>{question}</h4>
        <FontAwesomeIcon icon={!clicked ? faPlus : faXmark} />
      </div>
      {clicked && <span>{answer}</span>}
    </button>
  )
}