import { ColorsInterface } from "./interfaces";
import "./GoodColors.css"

export default function GoodColors({colors}:ColorsInterface) {
  return (
    <ul className="colors">
      {colors.map((color) => {
        return <li key={color.colorCode}>
          <button className="colors__li-button" onClick={() => {
            console.log(color);
          }} style={{backgroundColor: color.colorCode}}></button>
        </li>
      })}
    </ul>
  )
}