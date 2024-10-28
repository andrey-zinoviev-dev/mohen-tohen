import "./DeletePopup.css"
export default function DeletePopup({submitDelete, closeDelete}: {submitDelete: () => void, closeDelete: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <div className="delete">
      <h3>Уверены, что хотите удалить?</h3>
      <div className="delete__buttons">
        <button onClick={() => {
          submitDelete();
        }}>Да</button>
        <button onClick={() => {
          closeDelete(false);
        }}>Нет</button>
      </div>
    </div>
  )
}