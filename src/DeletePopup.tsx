export default function DeletePopup({submitDelete, closeDelete}: {submitDelete: () => void, closeDelete: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <div>
      <h3>Уверены, что хотите удалить?</h3>
      <div>
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