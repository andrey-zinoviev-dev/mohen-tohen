import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Account.css";
// import Goods from "./Goods";
import { useAppSelector } from "./hooks";
import { faArrowLeft, faPen } from "@fortawesome/free-solid-svg-icons";
import HistoryGoods from "./HistoryGoods";
import { accountLinks } from "./utils";
import { Link, Outlet } from "react-router-dom";
import LinksComp from "./LinksComp";

export default function Account() {
    //redux
    const userState = useAppSelector((state) => {
        return state.user;
    });
    // console.log(userState);
    //dispatch
    // const dispatch = useAppDispatch();

    return (
        <section className="account">
            <div className="account__navigation-wrapper">
                <button>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Назад</span>
                </button>
                {userState.name && <div className="account__user-wrapper">
                    <h3>{userState.name}</h3>
                    <button>
                        <FontAwesomeIcon icon={faPen} />
                    </button>
                </div>}
                <LinksComp inAccount={true} links={accountLinks} />
                {/* <ul>
                    {accountLinks.map((link) => {
                        return <li key={link.title}>
                            <Link to={link.href}>
                                {link.title}
                            </Link>
                        </li>
                    })}
                </ul> */}
            </div>

            <div className="account__goods-wrapper">
                <Outlet></Outlet>
                {/* <HistoryGoods></HistoryGoods> */}
                {/* {userState.seller && <Goods inAccountPage={true} category="Ваши товары" goods={userState.goodsCollection}></Goods>} */}
                {/* <Goods inAccountPage={true} category={userState.seller ? "История продаж" : "История покупок" } goods={userState.seller ? [] : userState.history}></Goods> */}
            </div>

        </section>
    )
}

