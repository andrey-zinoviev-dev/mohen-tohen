import { useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
import "./GoodColors.css"
import ListElementGeneric from "./ListElementGeneric";
import ColorOption from "./ColorOption";
import OptionWrapper from "./OptionWrapper";
import InputEl from "./InputEl";

interface GoodColorInterface {
  colors: {color: string, price: number}[],
  addColor: (color: {color: string, price: number}) => void,
  removeColor: (color: {color: string, price: number}) => void,
}

export default function GoodColors({ colors, addColor, removeColor }: GoodColorInterface) {
  //color state
  const [color, setColor] = useColor("#ffffff");

  //state
  const [optionPrice, setOptionPrice] = useState<{price: number}>({price: 0});

  return (
    <>
      <ColorPicker height={140} color={color} onChange={setColor} hideAlpha hideInput={["hsv", "rgb"]} />

      <ListElementGeneric classUl="ul-options" items={colors} renderItems={(item) => {
        return <OptionWrapper deleteButton removeOption={() => {
          removeColor(item)
        }} >
          <ColorOption color={item.color} active={true}></ColorOption>
          <span>{item.price}&#8381;</span>
        </OptionWrapper>
      }}>
        <OptionWrapper removeOption={() => {}}>
          <button className="color-new" style={{backgroundColor: color.hex}} type="button" onClick={() => {
            addColor({color: color.hex, price: optionPrice.price })
            setColor({hex: "#ffffff", rgb: {r: 255, g: 255, b: 255, a: 1}, hsv: {h: 0, s: 0, v: 100, a: 1} })
            setOptionPrice({price: 0})
          }}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <InputEl value={optionPrice.price.toString()} name="price" placeHolder="Стоимость опции" updateState={setOptionPrice}></InputEl>
        </OptionWrapper>
      </ListElementGeneric>

    </>
  )
}