import { useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
import "./GoodColors.css"
// import ListElementGeneric from "./ListElementGeneric";
// import ColorOption from "./ColorOption";
// import OptionWrapper from "./OptionWrapper";
import InputEl from "./InputEl";
import GoodOptionsGeneric from "./GoodOptionsGeneric";
import { AccountGoodInterface } from "./interfaces";

interface GoodColorInterface<T> {
  colors: {option: string, price: number}[],
  updateColors: React.Dispatch<React.SetStateAction<T>>
  // addColor: ({option, price}: {option: string, price: number}) => void,
  // removeColor: (option: string) => void,
}

export default function GoodColors<T extends AccountGoodInterface>({ colors, updateColors }: GoodColorInterface<T>) {
  //color state
  const [color, setColor] = useColor("#ffffff");

  const [optionPrice, setOptionPrice] = useState<{price: number}>({price: 0});

  //functions
  function addColor() {
    updateColors((prevValue) => {
      return {...prevValue, colors: [...prevValue.colors, {option: color.hex, price: optionPrice.price}]}
    })
  }

  function removeColor(colorToRemove: string) {
    updateColors((prevValue) => {
      return {...prevValue, colors: prevValue.colors.filter((prevColor) => {
        return prevColor.option !== colorToRemove; 
      })}
    })
  }

  return (
    <>
      <ColorPicker height={140} color={color} onChange={setColor} hideAlpha hideInput={["hsv", "rgb"]} />

      <GoodOptionsGeneric color removeOption={removeColor} options={colors}>
        <div className="options__new-wrapper">
          <div className="color-new" style={{backgroundColor: color.hex}} >
          </div>
          <InputEl value={optionPrice.price.toString()} name="price" placeHolder="Стоимость опции" updateState={setOptionPrice}></InputEl>
        </div>
        <button className="options__button-add" type="button" onClick={() => {
          addColor();
          setOptionPrice(() => {
            return {price: 0};
          })
        }}>
          Добавить цвет
        </button>
      </GoodOptionsGeneric>
    </>
  )
}