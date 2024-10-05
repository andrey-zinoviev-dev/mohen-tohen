// import React from "react";
import "./Terms.css"
import { terms } from "./utils";
import Term from "./Term";
export default function Terms() {
  return (
    <ul className="terms">
      {terms.map((term) => {
        return <li key={term.question}>
          <Term question={term.question} answer={term.answer}></Term>
          {/* <button onClick={() => {
          }}>
            <div>
              <span>{term.question}</span>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </button> */}
        </li>
      })}
    </ul>
  )
}