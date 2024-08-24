import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Account.css";
// import Goods from "./Goods";
import { useAppSelector } from "./hooks";
import { faArrowLeft, faPen } from "@fortawesome/free-solid-svg-icons";
import { accountLinks, accountSellerLinks } from "./utils";
import { Outlet, useNavigate, useLocation, Link } from "react-router-dom";
import LinksComp from "./LinksComp";
import { AccountLinks } from "./AccountLinks";

export default function Account() {
    //redux
    const userState = useAppSelector((state) => {
        return state.user;
    });

    //links
    const links = !userState.seller ? accountLinks : accountSellerLinks;

    // console.log(address);
    // console.log(userState);
    //dispatch
    // const dispatch = useAppDispatch();

    //navigate
    const navigate = useNavigate();

    //states
    // const [selectedLink, setSelectedlink] = React.useState()

    return (
        <section className="account">
            <div className="account__navigation-wrapper">
                <button className="account__back" onClick={() => {
                    navigate("../");
                }}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Назад</span>
                </button>
                {/* {userState.name && <div className="account__user-wrapper">
                    <div>
                        <h3>{userState.name}</h3>
                        <span>{userState.phone}</span>
                    </div>
                    <button>
                        <FontAwesomeIcon icon={faPen} />
                    </button>
                </div>} */}
                <AccountLinks links={links}></AccountLinks>
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

            <div className="account__goods-wrapper">
                <Outlet></Outlet>
            </div>

        </section>
    )
}

