import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./LinkComp.css"
export default function LinkCompBack({to, text}: {to:string, text: string}) {
    return (
        <Link className="link-comp" to={to}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>{text}</span>
        </Link>
    )
}