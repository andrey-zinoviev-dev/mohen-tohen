import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function AccountAddGood({close}: {close: React.Dispatch<React.SetStateAction<boolean>>}) {

  return (
    <>
      <button onClick={() => {
        close(false);
      }}>
        <FontAwesomeIcon icon={faArrowLeft} />
        Вернуться к товарам
      </button>
      {}
      <h3>Добавление нового товара</h3>
      <form onSubmit={(evt) => {
        evt.preventDefault();
        console.log("send data to server here");
      }}>
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
        <button>
          Отправить товар
        </button>
      </form>
    </>
  )
}