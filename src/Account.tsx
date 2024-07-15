import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Account.css";
import Goods from "./Goods";
import { useAppDispatch, useAppSelector } from "./hooks";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function Account() {
    //redux
    const userState = useAppSelector((state) => {
        return state.user;
    });
    console.log(userState);
    //dispatch
    const dispatch = useAppDispatch();

    return (
        <section className="account">
            <div className="account__goods-wrapper">
                {userState.seller && <Goods category="Ваши товары" goods={userState.goodsCollection}></Goods>}
                <Goods category={userState.seller ? "История продаж" : "История покупок" } goods={userState.seller ? [] : []}></Goods>
            </div>
            <div className="account__user-wrapper">
                <h3>{userState.name}</h3>
                <button>
                    <FontAwesomeIcon icon={faPen} />
                </button>
            </div>
        </section>
    )
};

