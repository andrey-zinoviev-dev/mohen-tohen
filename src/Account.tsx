import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Account.css";
// import Goods from "./Goods";
import { useAppSelector } from "./hooks";
import { faArrowLeft, faPen } from "@fortawesome/free-solid-svg-icons";
import { accountLinks, accountSellerLinks } from "./utils";
import { Outlet, useNavigate } from "react-router-dom";
import LinksComp from "./LinksComp";

export default function Account() {
    //redux
    const userState = useAppSelector((state) => {
        return state.user;
    });
    // console.log(userState);
    //dispatch
    // const dispatch = useAppDispatch();

    //navigate
    const navigate = useNavigate();

    return (
        <section className="account">
            <div className="account__navigation-wrapper">
                <button onClick={() => {
                    navigate("../");
                }}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Назад</span>
                </button>
                {userState.name && <div className="account__user-wrapper">
                    <h3>{userState.name}</h3>
                    <button>
                        <FontAwesomeIcon icon={faPen} />
                    </button>
                </div>}
                <LinksComp inAccount={true} links={!userState.seller ? accountLinks : accountSellerLinks} />
            </div>

            <div className="account__goods-wrapper">
                <Outlet></Outlet>
            </div>

        </section>
    )
}

