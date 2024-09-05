import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"
export default function AccountAddGood() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => {
        navigate(-1);
      }}>
        <FontAwesomeIcon icon={faArrowLeft} />
        Вернуться к товарам
      </button>
      <h3>Добавление нового товара</h3>
      <form>
        <label>
          Название
          <input></input>
        </label>
        <label>
          Описание
          <input></input>
        </label>
        <label>
          Материал
          <input></input>
        </label>
        <label>
          Фото
          <ul></ul>
        </label>
      </form>
    </>
  )
}