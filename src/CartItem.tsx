import { goodPageInt } from "./interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "./hooks";
import { changeQuantity } from "./features/basketSlice";
import { useState } from "react";
import { createPortal } from "react-dom";
import PortalComp from "./PortalComp";
import DeletePopup from "./DeletePopup";
import { remove } from "./features/basketSlice";
import PortalCentered from "./PortalCentered";
import "./CartItem.css";
export default function CartItem({item}: {item: goodPageInt}) {
  //dispatch
  const dispatch = useAppDispatch();

  //state
  const [openDelete, setOpenDelete] = useState<boolean>(false);

  //functions
  function deleteItem() {
    dispatch(remove(item.good))
  }

  return (
    <>
        <img src={item.good.photos[0].url}></img>
        <div className="cart-item__wrapper">
            <span>{item.good.title}</span>
            <div>
                <span>{item.good.material}</span>
                <span>{item.good.dimensions}</span>
                <div style={{backgroundColor: item.good.color}}></div>
            </div>
            <div className="cart-item__wrapper-buttons">
                <button>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                {0}
                <button>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
            
        </div>
        <span>
            {item.good.price}&#8381;
        </span>
    </>
    // <div className="cart__ul-li-details">
    //   <div className="cart__ul-li-details-params">
    //                                     <img className="cart__ul-li-img" src={item.good.photos[0].url}></img>
    //                                     <div className="cart__ul-li-text">
    //                                         <span className="cart__ul-li-text-title">{item.good.title}</span>
    //                                         <div className="cart__ul-li-text-specs">
    //                                             <span>{item.good.material && item.good.material}</span>
                                                
                                            
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                                 <div className="cart__ul-li-quantity">
    //                                     <button className="cart__button" disabled={item.quantity === 1 ? true : false} onClick={() => {
    //                                         dispatch(changeQuantity({good: item.good, quantity: -1}));
    //                                     }}>
    //                                         <FontAwesomeIcon icon={faMinus} />
    //                                     </button>
    //                                     <span>{item.quantity}</span>
    //                                     <button className="cart__button" disabled={item.good.batch === item.quantity ? true : false} onClick={() => {
    //                                         dispatch(changeQuantity({good: item.good, quantity: 1}));
    //                                     }}>
    //                                         <FontAwesomeIcon icon={faPlus} />
    //                                     </button>
    //                                 </div>
    //                                 <span>{item.good.price}</span>
    //                                 <button className="cart__ul-li-delete cart__button" onClick={() => {
    //                                     setOpenDelete(true);
    //                                 }}>
    //                                     <FontAwesomeIcon icon={faXmark} />
    //                                 </button>
    //     {openDelete && createPortal(<PortalComp>
    //         <PortalCentered>
    //             <DeletePopup submitDelete={deleteItem} closeDelete={setOpenDelete}></DeletePopup>
    //         </PortalCentered>
    //     </PortalComp>, document.body)}
    // </div>
  )
}