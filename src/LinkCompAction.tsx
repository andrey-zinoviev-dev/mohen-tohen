import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./LinkComp.css"
export default function LinkCompAction({ to, text, icon }: { to: string, text: string, icon: IconProp }) {
    return (
        <Link className="link-comp" to={to}>
            <span>{text}</span>
            <FontAwesomeIcon icon={icon} />
        </Link>
    )
}