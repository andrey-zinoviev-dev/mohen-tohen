import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import ColorOption from "./ColorOption";

export default function GoodConstructorOption({title}: {title: string}) {
    //state
    const [optionClicked, setOptionClicked] = useState<boolean>(false);
    const [options, setOptions] = useState<{title: string, price: number}[]>([]);
    const [newOption, setNewOption] = useState<{title: string, price: number}>({
        title: "",
        price: 0,
    });
    
    return (
        <>
            <button type="button" onClick={() => {
                setOptionClicked(!optionClicked)
            }}>
                {title}
            </button>
            <ul>
                {options.map((option) => {
                    return <li key={option.title}>
                        {title === "Цвет" ? <ColorOption color={option.title}></ColorOption> : <span>{option.title}</span>}
                        <span>{option.price}&#8381;</span>
                        <button onClick={() => {
                            setOptions((prevValue) => {
                                return prevValue.filter((prevOption) => {
                                    return prevOption.title !== option.title;
                                })
                            })
                        }} type="button">
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </li>
                })}
            </ul>
            {optionClicked && <>
                <input type="text" onChange={(evt) => {
                    setNewOption((prevValue) => {
                        return {...prevValue, title: evt.target.value}
                    })
                }} placeholder="Опция"></input>
                <input type="number" onChange={(evt) => {
                    setNewOption((prevValue) => {
                        return {...prevValue, price: evt.target.valueAsNumber}
                    })
                }} placeholder="Сколько опция стоит"></input>
                <button type="button" onClick={() => {
                    setOptions((prevValue) => {
                        return [...prevValue, newOption]
                    });
                    setNewOption({
                        title: "",
                        price: 0,
                    })
                }}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </>}
        </>
    )
}