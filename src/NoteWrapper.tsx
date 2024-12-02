import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NoteWrapper.css";

export default function NoteWrapper({ text }: { text: string }) {
    return (
        <div className="note-wrapper">
            <div className="note-wrapper__svg-div">
                <FontAwesomeIcon icon={faExclamation} />
            </div>
            <span>{text}</span>
        </div>
    )
}