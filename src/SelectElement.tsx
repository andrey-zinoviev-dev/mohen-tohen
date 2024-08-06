import "./SelectElement.css";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OptionInterface, SelectInterface } from "./interfaces";
import React from "react"
export default function SelectElement({label, options, updateApplication}:SelectInterface) {
  //states
  // const [openedSelect, setOpenedSelect] = React.useState<boolean>(false);
  // const [selectedOption, setSelectedOption] = React.useState<OptionInterface>(options[0])
  const [selectState, setSelectState] = React.useState<{opened: boolean, selectedOption: OptionInterface}>({opened: false, selectedOption: options[0]})
  return(
    <>
      <label>{label}</label>
      <button type="button" onClick={() => {
        setSelectState((prevValue) => {
          return {...prevValue, opened: !prevValue.opened};
        })
        // setOpenedSelect(!openedSelect);
      }}>
        {selectState.selectedOption.label}
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      {selectState.opened && <ul className="select">
        {/* <li>Пункт 1</li> */}
        {options.map((option) => {
          return <li key={option.label}>
            <button onClick={() => {
              setSelectState((prevValue) => {
                return {...prevValue, opened: false, selectedOption: option};
              });
              updateApplication(option.label);
              // updateApplication((prevValue) => {
              //   return {...prevValue, city: option.label};
              // })
            }}>
              {option.label}
            </button>
            {/* <input id={option.id} type="radio" name={name} />
            <label onClick={() => {
              setSelectedOption(option);
              updateApplication((prevValue) => {
                return {...prevValue, city: option.label};
              })
            }} htmlFor={option.id}>{option.label}</label> */}
          </li>
        })}
      </ul>}
    </>
  )
}