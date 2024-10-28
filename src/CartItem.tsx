import { goodPageInt } from "./interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "./hooks";
import { changeQuantity } from "./features/basketSlice";
import { useState } from "react";
import { createPortal } from "react-dom";
import PortalComp from "./PortalComp";
import DeletePopup from "./DeletePopup";
export default function CartItem({item}: {item: goodPageInt}) {
  //dispatch
  const dispatch = useAppDispatch();

  //state
  const [openDelete, setOpenDelete] = useState<boolean>(false);

  //functions
  function deleteItem() {
    console.log(item);
  }

  return (
    <>
      <div className="cart__ul-li-details-params">
                                        <img className="cart__ul-li-img" src={item.good.photos[0].url}></img>
                                        <div className="cart__ul-li-text">
                                            <span className="cart__ul-li-text-title">{item.good.title}</span>
                                            {/* <span className="cart__ul-li-text-refid">Артикул: {cartGood.good._id}</span> */}
                                            <div className="cart__ul-li-text-specs">
                                                <span>{item.good.material && item.good.material}</span>
                                                
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart__ul-li-quantity">
                                        <button className="cart__button" disabled={item.quantity === 1 ? true : false} onClick={() => {
                                            dispatch(changeQuantity({good: item.good, quantity: -1}));
                                            // updateBasket({id: cartGood.good._id, quantity: -1})
                                            // .then((data) => {
                                            //     data.data && dispatch(updateBasketGoodQuantity({ good: data.data.good, quantity: data.data.quantity }))
                                            // })
                                        }}>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button className="cart__button" disabled={item.good.batch === item.quantity ? true : false} onClick={() => {
                                            dispatch(changeQuantity({good: item.good, quantity: 1}));

                                            // console.log(cartGood.good.batch === cartGood.quantity)
                                            // updateBasket({id: cartGood.good._id, quantity: 1})
                                            // .then((data) => {
                                            //     data.data && dispatch(updateBasketGoodQuantity({ good: data.data.good, quantity: data.data.quantity }))
                                            // })
                                        
                                        }}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                    </div>
                                    <span>{item.good.price}</span>
                                    <button className="cart__ul-li-delete cart__button" onClick={() => {
                                        setOpenDelete(true);
                                        // dispatch(remove(cartGood.good))
                                        
                                        // deleteItem(cartGood.good._id)
                                        // .then((data) => {
                                        //     data.data && dispatch(deleteBasketGood(cartGood.good))
                                        // })
                                        
                                    }}>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </button>
        {openDelete && createPortal(<PortalComp>
          <DeletePopup submitDelete={deleteItem} closeDelete={setOpenDelete}></DeletePopup>
        </PortalComp>, document.body)}
    </>
  )
}