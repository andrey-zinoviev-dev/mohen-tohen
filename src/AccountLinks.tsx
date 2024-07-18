import React from "react"
import { Link, useLocation } from "react-router-dom"
import { LinksInterface } from "./interfaces"
import "./AccountLinks.css";

export function AccountLinks ({links}:LinksInterface) {
    //location
    const location = useLocation();
    const accountPage = location.pathname.split("/")[location.pathname.split("/").length - 1];
    const matchedLink = links.find((link) => {
        return link.href === accountPage;
    });

    // console.log(matchedLink);

    //state
    // const [selectedLink, setSelectedlink] = React.useState<LinkInterface | undefined>(matchedLink);

    // console.log(selectedLink);

    return (
        <ul className="account__links">
            {links.map((link) => {
                return <li key={link.title}>
                    <Link onClick={() => {
                        // setSelectedlink(link); 
                    }} to={link.href} className={matchedLink?.title === link.title ? "account__links-li-link_active account__links-li-link" : "account__links-li-link"}>
                        {link.title}
                    </Link>
                </li>
            })}
        </ul>
    )
}