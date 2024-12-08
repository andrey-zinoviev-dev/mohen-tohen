import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react"

export default function GoodConstructorStart() {
  //state
  const [options, setOptions] = useState<{title: string, options: string[]}[]>([]);
  const [newOption, setNewOption] = useState<{title: string, options: string[]}>({
    title: "",
    options: [],
  });

  //refs
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <div>
      <h3>Что в товаре можно поменять</h3>
      <ul>
        {options.map((option) => {
          return <li key={option.title}>
            <span>{option.title}</span>
            
            {option.options.map((currentOption) => {
              return <div>
                <span>{currentOption}</span>
                <button type="button" onClick={() => {
                  setOptions((prevValue) => {
                    return prevValue.map((prevOption) => {
                      return prevOption.title === option.title ? {...option, options: prevOption.options.filter((optionToRemove) => {
                        return optionToRemove !== currentOption
                      })} : prevOption
                    })
                  })
                }}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            })}
            
            {/* <input type="text" value={option.options.map((selectedOption) => {
                return `${selectedOption}`
            })}></input> */}
          </li>
        })}
        {/* <li key={"new-option"}>
          <input onChange={(evt) => {
            setNewOption((prevValue) => {
              return {...prevValue, title: evt.target.value}
            })
          }} type="text" placeholder="Название опции"></input>
          <input onChange={(evt) => {
            setNewOption((prevValue) => {
              return {...prevValue, options: evt.target.value.split(", ")}
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
        </li> */}
      </ul>
      <form ref={formRef}>
        <input onChange={(evt) => {
          setNewOption((prevValue) => {
            return {...prevValue, title: evt.target.value}
          })
        }} type="text" placeholder="Название опции"></input>
        <input onChange={(evt) => {
          setNewOption((prevValue) => {
            return {...prevValue, options: evt.target.value.split(", ")}
          })
        }} type="text" placeholder="Значения опции через запятую, если их больше 1"></input>
        <button onClick={() => {
          setOptions((prevValue) => {
            return [...prevValue, newOption];
          });
          setNewOption({
              title: "",
              options: []
          });
          formRef.current?.reset();
        }} type="button">
            <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
    </div>
  )
}