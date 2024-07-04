import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { buyerLinks, links, sellerLinks } from "./utils";

export default function Footer() {
    return (
        <footer className="footer">
            {/* <Collaboration></Collaboration> */}
            <div className="footer__text">
                <h2 className="footer__header">Mohen-Tohen</h2>
                <div className="footer__wrapper">
                    <div className="footer__category">
                        <h3 className="footer__wrapper-header">Как с нами связаться</h3>
                        <ul className="footer__ul">
                            {links.map((link) => {
                                return <li key={link.name}>
                                    <FontAwesomeIcon icon={link.icon}></FontAwesomeIcon>
                                    <span>{link.name}</span>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="footer__category">
                        <h3 className="footer__wrapper-header">Покупателям</h3>
                        <ul className="footer__ul">
                            {buyerLinks.map((link) => {
                                return <li key={link.name}>
                                    <span>{link.name}</span>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="footer__category">
                        <h3 className="footer__wrapper-header">Продавцам</h3>
                        <ul className="footer__ul">
                            {sellerLinks.map((link) => {
                                return <li key={link.name}>
                                    <span>{link.name}</span>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}