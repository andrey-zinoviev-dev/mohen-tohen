import { LinksInterface } from "./interfaces"
import "./LinksComp.css"
export default function LinksComp({links, title}:LinksInterface) {
    return (
        <div className="links">
            <h3>{title}</h3>
            <ul className="links__ul">
                {links.map((link) => {
                    return <li key={link.href}>
                        <span>{link.title}</span>
                    </li>
                })}
            </ul>
        </div>

    )
}