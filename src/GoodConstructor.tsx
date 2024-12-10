import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react"
import GoodConstructorOption from "./GoodConstructorOption";

export default function GoodConstructor() {
  //state
  const [options, setOptions] = useState<{title: string, options: {title: string, price: number}[]}[]>([]);
  const [newOption, setNewOption] = useState<{title: string, options: {title: string, price: number}[]}>({
    title: "",
    options: [],
  });
  const [selectedOptionType, setSelectedOptionType] = useState<{type: string} | null>(null);

  // const [selectedOptionType, setSelectedOptionType] = useState<{}>();
  //refs
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <div>
      <h3>Что в товаре можно поменять</h3>
      <ul>
        <li>
          <GoodConstructorOption title="Цвет" />
        </li>
        <li>
          <GoodConstructorOption title="Размер" />

        </li>
        <li>
          <GoodConstructorOption title="Материал" />
        </li>
        {/* {options.map((option) => {
          return <li key={option.title}>
            <span>{option.title}</span>
            {option.options.map((currentOption) => {
              return <div>
                {option.title.includes("Цвет") || option.title.includes("Цвета") ? 
                <div style={{backgroundColor: currentOption.title, width: 20, height: 20, borderRadius: 5}}>

                </div>
                :
                <span>{currentOption.title}</span>}
                <span>{currentOption.price}</span>
                <button type="button" onClick={() => {
                  setOptions((prevValue) => {
                    return prevValue.map((prevOption) => {
                      return prevOption.title === option.title ? {...option, options: prevOption.options.filter((optionToRemove) => {
                        return optionToRemove.title !== currentOption.title
                      })} : prevOption
                    })
                  })
                }}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            })}
            
           
          </li>
        })} */}

      </ul>
      
      {/* <form onSubmit={(evt) => {
        evt.preventDefault();
      }} ref={formRef}>
        <input onChange={(evt) => {
          setNewOption((prevValue) => {
            return {...prevValue, title: evt.target.value}
          })
        }} type="text" placeholder="Название опции"></input>
        <input onChange={(evt) => {
          const values = evt.target.value.split(", ").map((value) => {
            return {title: value, price: 0};
          });
          setNewOption((prevValue) => {
            return {...prevValue, options: values}
          })
        }} type="text" placeholder="Значения опции через запятую, если их больше 1"></input>
        <input type="number" placeholder="Цена опции" onChange={(evt) => {
          setNewOption((prevValue) => {
            return {...prevValue, options: prevValue.options.map((prevOption) => {
              return {...prevOption, price: evt.target.valueAsNumber};
            })}
          })
        }}></input>
        <button type="button" onClick={() => {
          setOptions((prevValue) => {
            return [...prevValue, newOption];
          });
          setNewOption({
              title: "",
              options: [],
          });
          formRef.current?.reset();
        }}>
            <FontAwesomeIcon icon={faPlus} />
        </button>
      </form> */}
    </div>
  )
}