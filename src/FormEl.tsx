import "./FormEl.css"
export default function FormEl({ submitForm, children }: { submitForm: () => void, children: React.ReactNode[] }) {
  return (
    <form className="form" onSubmit={(evt) => {
      evt.preventDefault();
      submitForm();
    }}>
      {children}
    </form>
  )
}