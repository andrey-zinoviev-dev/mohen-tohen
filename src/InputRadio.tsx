import "./InputRadio.css"
export default function InputRadio<T>({name, value, icon, text, updateState}: {value: string | undefined, text: string, icon: string | undefined, name: string, updateState: React.Dispatch<React.SetStateAction<T>>}) {
  return (
    <label className="label-radio">
      <div className="label-radio__wrapper">
        <input type="radio" name={name} value={value} onChange={(evt) => {
          updateState((prevValue) => {
            return {...prevValue, [name]: evt.target.value};
          })
        }}></input>
        <span>{text}</span>
      </div>
      <img src={icon}></img>
    </label>
  )
}