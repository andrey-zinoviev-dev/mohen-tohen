import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SelectInterface } from "./interfaces";
import React from "react"
export default function SelectElement({label, name, options, updateApplication}:SelectInterface) {
  //states
  const [openedSelect, setOpenedSelect] = React.useState<boolean>(false);

  return(
    <>
      <label>{label}</label>
      <button onClick={() => {
        setOpenedSelect(!openedSelect);
      }}>
        Выбрать диапазон
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      {openedSelect && <ul>
        {/* <li>Пункт 1</li> */}
        {options.map((option) => {
          return <li key={option.label}>
            <input id={option.id} type="radio" name={name} />
            <label onClick={() => {
              updateApplication((prevValue) => {
                return {...prevValue, city: option.label};
              })
            }} htmlFor={option.id}>{option.label}</label>
          </li>
        })}
      </ul>}
    </>
  )
}