import "./OptionWrapper.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
interface OptionWrapperInterface{
    children: React.ReactNode | React.ReactNode[],
    removeOption: () => void,
    deleteButton?: boolean,
    price: number,
}

export default function OptionWrapper({ children, removeOption, deleteButton, price }: OptionWrapperInterface) {
    return (
        <div className="option-wrapper">
            {children}
            <span>{price}&#8381;</span>
            {deleteButton && <button type="button" onClick={() => {
                removeOption()
            }}>
                <FontAwesomeIcon icon={faXmark} />
            </button>}
        </div>
    )
}