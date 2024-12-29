import { useState } from "react"
import GoodOptionsGeneric from "./GoodOptionsGeneric";
import NonSizeOption from "./NonSizeOption";
import InputEl from "./InputEl";

interface TextOptionsInterface {
    options: {option: string, price: number}[],
    addOptionText: string,
    addOption: ({option, price}: {option: string, price: number}) => void,
    removeOption: (option: string) => void,
}

export default function TextOptions({ options, addOptionText, addOption, removeOption }: TextOptionsInterface) {
    //state
    const [newTextOption, setNewTextOption] = useState<{ option: string, price: number}>({ option: "", price: 0});

    return (
        <>
            <GoodOptionsGeneric options={options} removeOption={removeOption}>
                <div className="options__new-wrapper">
                    <InputEl name="option" updateState={setNewTextOption} placeHolder="Название опции"></InputEl>
                    <InputEl name="price" type="number" updateState={setNewTextOption} placeHolder="Стоимость опции"></InputEl>
                </div>
                <button className="options__button-add" type="button" onClick={() => {
                    addOption(newTextOption)
                }}>{addOptionText}</button>
            </GoodOptionsGeneric>
        </>
    )
}