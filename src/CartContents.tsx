import { goodPageInt } from "./interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./CartContents.css";
import { useAppSelector } from "./hooks";

export default function CartContents() {
    const cartState = useAppSelector((state) => {
        return state.user.basket;
    });

    //functions
    function calculateTotal() {
        return cartState.reduce((result, item) => {
            result = result + (item.good.price * item.quantity);
            return result;
        }, 0);
    }

    return (
        <>
            <ul className="cart__ul">
                        {/* <li className="cart__ul-li cart__ul-li_first" key="parameters">
                            <span className="cart__ul-li-span">Товар</span>
                            <span>Количество</span>
                            <span>Цена</span>
                        </li> */}
                        {cartState.map((cartGood) => {
                            return <li className="cart__ul-li" 
                            key={cartGood.good._id}>
                                <button className="cart__ul-li-delete cart__button" onClick={() => {
                                    // deleteItem(cartGood.good._id)
                                    // .then((data) => {
                                    //     data.data && dispatch(deleteBasketGood(cartGood.good))
                                    // })
                                    
                                }}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                                <div className="cart__ul-li-details">
                                    <div className="cart__ul-li-details-params">
                                        <img className="cart__ul-li-img" src={cartGood.good.cover}></img>
                                        <div className="cart__ul-li-text">
                                            <span className="cart__ul-li-text-title">{cartGood.good.title}</span>
                                            {/* <span className="cart__ul-li-text-refid">Артикул: {cartGood.good._id}</span> */}
                                            <div className="cart__ul-li-text-specs">
                                                <span>{cartGood.good.material && cartGood.good.material}</span>
                                                
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart__ul-li-quantity">
                                        <button className="cart__button" onClick={() => {
                                            // updateBasket({id: cartGood.good._id, quantity: -1})
                                            // .then((data) => {

                                            //     data.data && dispatch(updateBasketGoodQuantity({ good: data.data.good, quantity: data.data.quantity }))
                                            // })
                                        }}>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                        <span>{cartGood.quantity}</span>
                                        <button className="cart__button" onClick={() => {
                                            // updateBasket({id: cartGood.good._id, quantity: 1})
                                            // .then((data) => {
                                            //     data.data && dispatch(updateBasketGoodQuantity({ good: data.data.good, quantity: data.data.quantity }))
                                            // })
                                        
                                        }}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                    </div>
                                    <span>{cartGood.good.price}</span>
                                </div>
                            </li>
                        })}
            </ul>
            <span>Итого: {calculateTotal()}</span>
        </>
        
    )
}
