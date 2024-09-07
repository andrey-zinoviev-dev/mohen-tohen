export default function InputEl({name, type}: {name: string, type?:string}) {
  return (
    <input name={name} type={type} onChange={() => {
      console.log(name);
    }}></input>
  )
}