import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react"

export default function GoodConstructor() {
  //state
  const [options, setOptions] = useState<{title: string, options: {title: string, price: number}[]}[]>([]);
  const [newOption, setNewOption] = useState<{title: string, options: {title: string, price: number}[]}>({
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
            {/* <span>{option.price}</span> */}
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
      <form onSubmit={(evt) => {
        evt.preventDefault();
        // console.log(evt.currentTarget.)
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
      </form>
    </div>
  )
}