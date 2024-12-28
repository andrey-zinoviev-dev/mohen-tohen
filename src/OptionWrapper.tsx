import "./OptionWrapper.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
interface OptionWrapperInterface{
    children: React.ReactNode | React.ReactNode[],
    removeOption: () => void,
    deleteButton?: boolean,
}

export default function OptionWrapper({ children, removeOption, deleteButton }: OptionWrapperInterface) {
    return (
        <div className="option-wrapper">
            {children}
            {/* <span>{}</span> */}
            {/* <InputEl name=""></InputEl> */}
            {/* <input type="number" onChange={((evt) => {
                console.log(evt.target.value);
            })} placeholder="цена опции"></input> */}
            {deleteButton && <button type="button" onClick={() => {
                removeOption()
            }}>
                <FontAwesomeIcon icon={faXmark} />
            </button>}
        </div>
    )
}