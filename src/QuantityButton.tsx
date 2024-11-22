import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./QuantityButton.css";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function QuantityButton({ stock, numberInBasket, updateQuantity, minus }: { stock: number, numberInBasket: number, updateQuantity: () => void, minus: boolean}) {
  return (
    <button onClick={() => {
      updateQuantity();
    }} disabled={minus ? (numberInBasket === 1 ? true : false) : (numberInBasket === stock ? true : false)} className="button-quantity">
      <FontAwesomeIcon icon={minus ? faMinus : faPlus} />
    </button>
  )
}