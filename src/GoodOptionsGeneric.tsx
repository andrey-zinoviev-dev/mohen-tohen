// import { ComponentType, useEffect, useState } from "react";
import ListElementGeneric from "./ListElementGeneric";
import OptionWrapper from "./OptionWrapper";
// import InputEl from "./InputEl";
import NonSizeOption from "./NonSizeOption";
import ColorOption from "./ColorOption";

interface GoodOptionsGenericInterface{
    options: { option: string, price: number }[],
    removeOption: (option: string) => void,
    children: React.ReactNode,
    // optionElement: (element: T) => React.ReactNode,
    color?: boolean
    // addOption: ({option, price}: { option: string, price: number }) => void,
}

export default function GoodOptionsGeneric ({ options, removeOption, children, color}: GoodOptionsGenericInterface) {
    // //state
    // const [newOption, setNewOption] = useState<{ option: string, price: number }>({option: "", price: 0});

    return (
        <>
            {/* <InputEl value={newOption.option} placeHolder="Название опции" name="option" updateState={setNewOption}></InputEl>
            <InputEl value={newOption.price.toString()} placeHolder="Цена опции" name="price" updateState={setNewOption}></InputEl> */}
            <ListElementGeneric classUl="ul-options" renderItems={(option) => {
                return <OptionWrapper deleteButton price={option.price} removeOption={() => {
                    removeOption(option.option)
                }}>

                    {/* <OptionElement></OptionElement> */}
                    {color ? <ColorOption color={option.option} active={true}></ColorOption> : <NonSizeOption option={option.option}></NonSizeOption>}
                    {/* {children} */}
                </OptionWrapper>
            }} items={options}>
                {children}
            </ListElementGeneric>
        </>
    )
}