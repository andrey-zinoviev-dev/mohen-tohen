import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Account.css";
// import Goods from "./Goods";
import { useAppSelector } from "./hooks";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import HistoryGoods from "./HistoryGoods";

export default function Account() {
    //redux
    const userState = useAppSelector((state) => {
        return state.user;
    });
    console.log(userState);
    //dispatch
    // const dispatch = useAppDispatch();

    return (
        <section className="account">
            <div className="account__goods-wrapper">
                <HistoryGoods></HistoryGoods>
                {/* {userState.seller && <Goods inAccountPage={true} category="Ваши товары" goods={userState.goodsCollection}></Goods>} */}
                {/* <Goods inAccountPage={true} category={userState.seller ? "История продаж" : "История покупок" } goods={userState.seller ? [] : userState.history}></Goods> */}
            </div>
            <div className="account__user-wrapper">
                <h3>{userState.name}</h3>
                <button>
                    <FontAwesomeIcon icon={faPen} />
                </button>
            </div>
        </section>
    )
}

