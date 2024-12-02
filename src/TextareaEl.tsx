import "./TextareaEl.css";
export default function TextareaEl({ placeholder }: { placeholder: string }) {
    return (
        <textarea placeholder={placeholder} className="textarea-el">

        </textarea>
    )
}