import "./TextareaEl.css";
export default function TextareaEl({ placeholder, updateValue }: { placeholder: string, updateValue: React.Dispatch<React.SetStateAction<{details: string}>>}) {
    return (
        <textarea onChange={((evt) => {
            updateValue((prevValue) => {
                return {...prevValue, details: evt.target.value};
            })
        })} placeholder={placeholder} className="textarea-el">

        </textarea>
    )
}