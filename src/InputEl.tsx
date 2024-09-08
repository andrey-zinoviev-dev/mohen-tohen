export default function InputEl<T>({name, type, updateState}: {name: string, type?:string, updateState: React.Dispatch<React.SetStateAction<T>>}) {
  return (
    <input name={name} type={type} onChange={(evt) => {
      // console.log(name);
      updateState((prevValue) => {
        return {...prevValue, [name]: evt.target.value};
      })
    }}></input>
  )
}