import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./LinkComp.css"
export default function LinkCompBack({to, text, reload}: {to:string, text: string, reload?: boolean}) {
    return (
        <Link reloadDocument={reload && reload} className="link-comp" to={to}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>{text}</span>
        </Link>
    )
}