import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Popup.css"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { PopupInterface } from "./interfaces"

export default function Popup({ setClose, children }:PopupInterface) {
    return (
        <section className="popup">
            <div className="popup__content">
                <button onClick={() => {
                    setClose(false);
                }} className="popup__close">
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                {children}
            </div>
        </section>
    )
}