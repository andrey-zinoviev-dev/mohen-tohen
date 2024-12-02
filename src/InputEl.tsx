import "./InputEl.css";

export default function InputEl<T>({name, value, type, disabled, placeHolder, autoFocus, underLine, updateState}: {name: string, value?:string, type?:string, disabled?:boolean, placeHolder: string, autoFocus?:boolean, underLine?: boolean, updateState: React.Dispatch<React.SetStateAction<T>>}) {
  return (
    <input disabled={disabled} value={value && value} className={underLine ? "input input_underline" : "input"} autoFocus={autoFocus} name={name} type={type} placeholder={placeHolder} onChange={(evt) => {
      // console.log(name);
      updateState((prevValue) => {
        return {...prevValue, [name]: evt.target.value};
      })
    }}></input>
  )
}