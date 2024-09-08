import React from "react"
import { Link, useLocation } from "react-router-dom"
// import { LinksInterface } from "./interfaces"
import { useAppSelector } from "./hooks";
import { accountLinks, accountSellerLinks } from "./utils";

import "./AccountLinks.css";

export function AccountLinks () {
    //redux
    const userState = useAppSelector((state) => {
        return state.user;
    });
    //links
    const links = userState.seller ? accountSellerLinks : accountLinks;
    const finalLinks = userState.loggedIn ? links : links.filter((link) => {
        return link.title.includes("Избранное");
    })

    // const accountLinks = userState.loggedIn ? links : links.filter((link) => {
    //     return  link.title.includes("Избранное");
    // });;
    //location
    const location = useLocation();
    const accountPage = location.pathname.split("/")[location.pathname.split("/").length - 1];
    const matchedLink = links.find((link) => {
        return link.href === accountPage;
    });

    

    // console.log(userState);

    //logged out links
    // const loggedOutLinks = !userState.loggedIn && 

    // console.log(loggedOutLinks)

    // console.log(matchedLink);

    //state
    // const [selectedLink, setSelectedlink] = React.useState<LinkInterface | undefined>(matchedLink);

    // console.log(selectedLink);

    return (
        <ul className="account__links">
            {finalLinks.map((link) => {
                return <li key={link.title}>
                    {<Link onClick={() => {
                        // setSelectedlink(link); 
                    }} to={link.href} className={matchedLink?.title === link.title ? "account__links-li-link_active account__links-li-link" : "account__links-li-link"}>
                        {link.title}
                    </Link>}
                </li>
            })}
            
        </ul>
    )
}