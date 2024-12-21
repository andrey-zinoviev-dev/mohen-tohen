import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import ColorOption from "./ColorOption";
import SizeOption from "./SizeOption";

export default function GoodConstructorOption({ title, options, optionType, changeOption }: {title: string, options: {title: string, price: number, type: string}[], optionType: string, changeOption: React.Dispatch<React.SetStateAction<{title: string, price: number, type: string}[]>>}) {
    //state
    const [optionClicked, setOptionClicked] = useState<boolean>(false);
    // const [options, setOptions] = useState<{title: string, price: number}[]>([]);
    const [newOption, setNewOption] = useState<{title: string, price: number, type: string}>({
        title: "",
        price: 0,
        type: optionType
    });
    
    return (
        <>
            <button type="button" onClick={() => {
                setOptionClicked(!optionClicked)
            }}>
                {title}
            </button>
            <ul>
                {options.filter((option) => {
                    return option.type === optionType
                }).map((option) => {
                    return <li key={option.title}>
                        {optionType === "color" ? 
                            <ColorOption active={false} color={option.title}></ColorOption>
                            :
                            optionType === "size" ?
                            <SizeOption size={option.title}></SizeOption>
                            :
                            <span>{option.title}</span>
                        }
                        {/* <span>{option.title}</span> */}
                        <span>{option.price}&#8381;</span>
                        <span>{option.type}</span>
                    </li>
                })}
                {/* {options.map((option) => {
                    return <li key={option.title}>
                        {title === "Цвет" ? <ColorOption color={option.title}></ColorOption> 
                        : 
                        title === "Размер" ? <SizeOption size={option.title} /> : <span>{option.title}</span>}
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
                })} */}
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
                    changeOption((prevValue) => {
                        return [...prevValue, newOption]
                    })
                    // console.log(newOption);
                    // setOptions((prevValue) => {
                    //     return [...prevValue, newOption]
                    // });
                    setNewOption({
                        title: "",
                        price: 0,
                        type: optionType,
                    })
                }}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </>}
        </>
    )
}