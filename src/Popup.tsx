import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Popup.css"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { PopupInterface } from "./interfaces"
import { useAppDispatch } from "./hooks"
import { closePopup } from "./features/popupSlice"

export default function Popup({ children, setClose }:PopupInterface) {


    return (
        <section className="popup">
            <div className="popup__content">
                <button onClick={() => {
                    setClose(false);
                    // setClose && setClose(false);
                }} className="popup__close">
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                {children}
            </div>
        </section>
    )
}