import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./LinkComp.css"
export default function LinkCompAction({ to, text, transparent, icon }: { to: string, text: string, transparent?: boolean, icon: IconProp }) {
    return (
        <Link className={transparent ? "link-comp link-comp_transparent" : "link-comp"} to={to}>
            <span>{text}</span>
            <FontAwesomeIcon icon={icon} />
        </Link>
    )
}