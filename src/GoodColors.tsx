import { ColorsInterface } from "./interfaces";
import "./GoodColors.css"

export default function GoodColors({updateColor, colors}:ColorsInterface) {
  return (
    <ul className="colors">
      {colors.map((color) => {
        return <li key={color.colorCode}>
          <button className="colors__li-button" onClick={() => {
            // dispatch(editGood())
            updateColor(color)
          }} style={{backgroundColor: color.colorCode}}></button>
        </li>
      })}
    </ul>
  )
}