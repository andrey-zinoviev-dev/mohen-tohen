import "./Loader.css";
export default function Loader({ text }: { text: string }) {

  return (
    <div className="loader">
      <h3>{text}</h3>
      <div className="spinner"></div>
    </div>

  )
}