import React from "react";
import { CheckboxInterface } from "./interfaces";
import "./CheckboxElement.css"
export default function CheckboxElement({label, checked, updateState}:CheckboxInterface) {
  //state
  // const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <div className="checkbox__input-div">
          <input type="checkbox" onChange={() => {
            // setChecked((prevValue) => {
            //   return !prevValue;
            // });
            updateState();
          }} checked={checked}></input>
          <div className="checkbox__input-div-active"></div>
        </div>
        
        <span>{label}</span>
      </label>
    </div>
  )
}