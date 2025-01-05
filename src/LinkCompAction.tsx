// import { IconProp } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./LinkComp.css"
export default function LinkCompAction({ to, text, transparent, state }: { to: string, text: string, transparent?: boolean, state?:unknown }) {
    return (
        <Link state={state} className={transparent ? "link-comp link-comp_transparent" : "link-comp"} to={to}>
            <span>{text}</span>
            {/* {icon && <FontAwesomeIcon icon={icon} />} */}
        </Link>
    )
}