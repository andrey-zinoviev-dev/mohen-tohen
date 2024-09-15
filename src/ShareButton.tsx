import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoodInterface } from "./interfaces";
import { useAppDispatch } from "./hooks";
import { changeMessage } from "./features/notificationSlice";

export default function ShareButton({ href }: { href: string }) {
  const dispatch = useAppDispatch();

  return (
    <button onClick={(evt) => {
      evt.stopPropagation();
      navigator.clipboard.writeText(href)
      .then(() => {
        dispatch(changeMessage({message: "Ссылка на товар скопирована!"}))
      })
    }}>
      <FontAwesomeIcon icon={faArrowUpFromBracket} />
    </button>
  )
}