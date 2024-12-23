import "./OptionWrapper.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
interface OptionWrapperInterface{
    children: React.ReactNode | React.ReactNode[],
    removeOption: () => void,
}

export default function OptionWrapper({ children, removeOption }: OptionWrapperInterface) {
    return (
        <div className="option-wrapper">
            {children}
            <input placeholder="цена опции"></input>
            <button type="button" onClick={() => {
                removeOption()
            }}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>
    )
}