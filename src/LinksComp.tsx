import { Link, useLocation } from "react-router-dom"
import { LinksInterface } from "./interfaces"
import "./LinksComp.css"
export default function LinksComp({links, title, inAccount}:LinksInterface) {
    return (
        <div className={!inAccount ? "links" : "links links_inAccount"}>
            {title && <h3>{title}</h3>}
            <ul className="links__ul">
                {links.map((link) => {
                    return <li key={link.href}>
                        <Link to={link.href}>
                            <span>{link.title}</span>
                        </Link>
                    </li>
                })}
            </ul>
        </div>

    )
}