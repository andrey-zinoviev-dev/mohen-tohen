// import { useState } from "react";
import GoodConstructorOption from "./GoodConstructorOption";

export default function GoodConstructor({ options, changeOption }: { options:{title: string, price: number, type: string}[], changeOption: React.Dispatch<React.SetStateAction<{title: string, price: number, type: string}[]>>}) {
  //state
  // const [options, setOptions] = useState<{title: string, price: number}[]>([]);


  return (
    <div>
      <h3>Что в товаре можно поменять</h3>
      <ul>
        <li>
          <GoodConstructorOption changeOption={changeOption} options={options} optionType={"color"} title="Цвет" />
        </li>
        <li>
          <GoodConstructorOption changeOption={changeOption} options={options} optionType={"size"} title="Размер" />
        </li>
        <li>
          <GoodConstructorOption changeOption={changeOption} options={options} optionType={"material"} title="Материал" />
        </li>
      </ul>
    </div>
  )
}