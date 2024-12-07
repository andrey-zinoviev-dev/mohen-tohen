import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"

export default function GoodConstructorStart() {
  //state
  const [options, setOptions] = useState<{title: string, options: string[]}[]>([]);
  const [newOption, setNewOption] = useState<{title: string, options: string[]}>({
    title: "",
    options: [],
  });
  return (
    <div>
      <h3>Что в товаре можно поменять</h3>
      <ul>
        {options.map((option) => {
          return <li key={option.title}>
            <span>{option.title}</span>
              <input type="text" value={option.options.map((selectedOption) => {
                return `${selectedOption}`
              })}></input>
          </li>
        })}
        <li key={"new-option"}>
          <input onChange={(evt) => {
            setNewOption((prevValue) => {
              return {...prevValue, title: evt.target.value}
            })
          }} type="text" placeholder="Название опции"></input>
          <input onChange={(evt) => {
            setNewOption((prevValue) => {
              return {...prevValue, options: [...prevValue.options, ...evt.target.value.split(", ")]}
            })
          }} type="text" placeholder="Значения опции через запятую, если их больше 1"></input>
          <button onClick={() => {
            setOptions((prevValue) => {
              return [...prevValue, newOption];
            });
            setNewOption({
              title: "",
              options: []
            })
          }} type="button">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </li>
      </ul>
    </div>
  )
}