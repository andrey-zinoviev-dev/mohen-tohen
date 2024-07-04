import "./Cart.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "./hooks";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { addOne, remove, removeOne } from "./features/basketSlice";

export default function Cart() {
    const cartState = useAppSelector((state) => {
        return state.basket.goods;
    })

    const dispatch = useAppDispatch();

    return (
        <section className="cart">
            <h3>корзина</h3>
            {cartState.length > 0 ? <ul className="cart__ul">
                <li className="cart__ul-li cart__ul-li_first" key="parameters">
                    <span className="cart__ul-li-span">Товар</span>
                    <span>Количество</span>
                    <span>Цена</span>
                </li>
                {cartState.map((cartGood) => {
                    return <li className="cart__ul-li" key={cartGood.title}>
                        <button className="cart__ul-li-delete" onClick={() => {
                                    dispatch(remove(cartGood));
                                }}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <div className="cart__ul-li-details">
                            <div className="cart__ul-li-details-params">
                                <img className="cart__ul-li-img" src={cartGood.cover}></img>
                                <div className="cart__ul-li-text">
                                    <span className="cart__ul-li-text-author">{cartGood.seller.name}</span>
                                    <span className="cart__ul-li-text-title">{cartGood.title}</span>
                                    <span className="cart__ul-li-text-refid">Артикул: 12//mongoXYFLS//21</span>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => {
                                    dispatch(addOne(cartGood))
                                }}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                                <span>{cartGood.quantity}</span>
                                <button onClick={() => {
                                    dispatch(removeOne(cartGood))
                                }}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                            </div>
                            <span>{cartGood.price}</span>
                        </div>
                        
                    </li>
                })}
            </ul>
            :
            <p>Ваша корзина пуста, но ее можно наполнить</p>
            }
        </section>
    )
}