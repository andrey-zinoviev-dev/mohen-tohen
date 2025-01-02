import "./TextareaEl.css";

interface TextAreaInterface<T> {
    placeholder: string,
    updateValue: React.Dispatch<React.SetStateAction<T>>,
    name: string,
    value: string,
}

export default function TextareaEl<T>({ placeholder, name, value, updateValue }: TextAreaInterface<T>) {
    return (
        <textarea defaultValue={value} onChange={((evt) => {
            updateValue((prevValue) => {
                return {...prevValue, [name]: evt.target.value};
            })
        })} placeholder={placeholder} className="textarea-el">

        </textarea>
    )
}