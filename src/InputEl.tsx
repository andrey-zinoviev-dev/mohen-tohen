export default function InputEl<T>({name, type, placeHolder, updateState}: {name: string, type?:string, placeHolder: string, updateState: React.Dispatch<React.SetStateAction<T>>}) {
  return (
    <input name={name} type={type} placeholder={placeHolder} onChange={(evt) => {
      // console.log(name);
      updateState((prevValue) => {
        return {...prevValue, [name]: evt.target.value};
      })
    }}></input>
  )
}