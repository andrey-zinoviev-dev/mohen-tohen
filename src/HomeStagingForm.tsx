export default function HomeStagingForm() {
  return (
    <section>
      <form>
        <h2>Форма для заявки</h2>
        <label>
          Имя
          <input placeholder="Ваше имя"></input>
        </label>
        <label>
          Телефон
          <input placeholder="Ваш телефон"></input>
        </label>
        <button>Отправить заявку</button>
      </form>
    </section>
  )
}