import { BasketGoodInterface } from "./interfaces";
import ColorOption from "./ColorOption";

interface CreatedOrderItem {
 item: BasketGoodInterface,
}

export default function CreatedOrderItem ({ item }: CreatedOrderItem) {
    return (
        <div className="cart__ul-item" style={{backgroundColor: "transparent", padding: "10px 0"}}>
            <img className="cart-item__cover" src={item.cover}></img>
            <div className="cart-item__wrapper">
                <div className="cart-item__params">
                    <span>{item.title} x {item.quantity}</span>
                    <div className="cart-item__wrapper-details">
                        <span>{item.selectedMaterial.option}</span>
                        <span>{item.selectedDimension.option}</span>

                        <ColorOption active={true} color={item.selectedColor.option}></ColorOption>
                    </div>
                </div>
                <span className="cart-item__price">{item.price + item.selectedColor.price + item.selectedDimension.price + item.selectedMaterial.price}&#8381;</span>
            </div>
        </div>
    )
}