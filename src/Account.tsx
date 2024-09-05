// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Account.css";
// import Goods from "./Goods";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { accountLinks, accountSellerLinks } from "./utils";
import { Outlet } from "react-router-dom";
// import LinksComp from "./LinksComp";
import { AccountLinks } from "./AccountLinks";

export default function Account() {

    // //links
    // const links = !userState.seller ? accountLinks : accountSellerLinks;

    // console.log(address);
    // console.log(userState);
    //dispatch
    // const dispatch = useAppDispatch();

    //navigate
    // const navigate = useNavigate();

    return (
        <section className="account">
            <div className="account__navigation-wrapper">
                {/* <button className="account__back" onClick={() => {
                    navigate("../");
                }}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Назад</span>
                </button> */}
                <AccountLinks></AccountLinks>
                {/* <ul>
                    {links.map((link) => {
                        return <li key={link.title}>
                            <Link to={link.href}>
                                {link.title}
                            </Link>
                        </li>
                    })}
                </ul> */}
                {/* <LinksComp inAccount={true} links={!userState.seller ? accountLinks : accountSellerLinks} /> */}
            </div>

            <div className="account__wrapper">
                <Outlet></Outlet>
            </div>

        </section>
    )
}

